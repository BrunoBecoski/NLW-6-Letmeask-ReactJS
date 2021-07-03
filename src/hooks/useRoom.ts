import { useEffect, useState } from "react";

import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type FirebaseQuestion = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likes: Record<string, {
    authorId: string;
  }>
}>

type QuestionType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
}
 
export function useRoom(roomId: string) {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [title, setTitle] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestion = databaseRoom.questions ?? {};

      const parsedQuestion = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
          likeCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0],
        }
      })

      setIsLoading(!roomRef);
      setTitle(databaseRoom.title);

      const questionsHighlight = parsedQuestion.filter((question) => {
        if (question.isHighlighted && !question.isAnswered) {
          return question;
        }
      })

      const questionsVanilla = parsedQuestion.filter((question) => {
        if (!question.isHighlighted && !question.isAnswered) {
          return question;
        }
      })

      const questionsAnswered = parsedQuestion.filter((question) => {
        if(question.isAnswered) {
          return question;
        }
      })

      questionsVanilla.sort((a, b) => {
        if (a.likeCount < b.likeCount) {
          return 1;
        }
        if (a.likeCount > b.likeCount) {
          return -1;
        }

        return 0;
      });

      const questionsFormatted = [...questionsHighlight, ...questionsVanilla, ...questionsAnswered]

      setQuestions(questionsFormatted);
    })

    return () => {
      roomRef.off('value');
    }
  }, [roomId, user?.id]);

  return { questions, title, isLoading }
}