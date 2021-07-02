import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { EmptyQuestions } from '../components/EmptyQuestions';
import { RemoveQuestionModal, EndRoomModal } from '../components/AdminRoomModal'; 
// import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';

import { Header, Main, Spinner } from '../styles/room';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  // const { user } = useAuth();
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id; 
  
  const { title, questions, isLoading } = useRoom(roomId);
  
  const [removeQuestionModalIsOpen, setRemoveQuestionModalIsOpen] = useState(false);
  const [endRoomModalIsOpen, setEndRoomModalIsOpen] = useState(false);
  const [removeQuestionId, setRemoveQuestionId] = useState('');

  function handleOpenRemoveQuestionModal(questionId: string) {
    setRemoveQuestionId(questionId)
    setRemoveQuestionModalIsOpen(true);
  }

  function handleCloseRemoveQuestionModal() {
    setRemoveQuestionModalIsOpen(false);
  }

  function handleOpenEndRoomModal() {
    setEndRoomModalIsOpen(true);
  }

  function handleCloseEndRoomModal() {
    setEndRoomModalIsOpen(false);
  }

  async function handleEndRoomModal() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push('/');
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    })         
  }

  async function handleHighlightQuestion(questionId: string) {  
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    })   
  }

  async function handleDeleteQuestion() {
    await database.ref(`rooms/${roomId}/questions/${removeQuestionId}`).remove();
    handleCloseRemoveQuestionModal();
  }

  return (
    <div>
      <Header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleOpenEndRoomModal}>Encerrar sala</Button>
          </div>
        </div>
      </Header>

      <RemoveQuestionModal
        isOpen={removeQuestionModalIsOpen}
        onRequestClose={handleCloseRemoveQuestionModal}
        handleDelete={handleDeleteQuestion}
      />

      <EndRoomModal
        isOpen={endRoomModalIsOpen}
        onRequestClose={handleCloseEndRoomModal}
        handleDelete={handleEndRoomModal}
      />

      <Main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          { questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>
        <div className="question-list">
          {isLoading && <Spinner />}

          {questions.length === 0 && !isLoading && 
            <EmptyQuestions>
              Envie o código desta sala para seus amigos e comece a responder perguntas!
            </EmptyQuestions>
          }
            
          {questions.map((question) => {
            return (
              <Question
                key={question.id} 
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (    
                  <>              
                    <button
                      type="button"
                      className="check-button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                        {/* <img src={checkImg} alt="Marcar pergunta como respondida" /> */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12.0003" cy="11.9998" r="9.00375" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60193" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </button>

                    <button
                      type="button"
                      className="highlight-button"
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      {/* <img src={answerImg} alt="Dar destaque à pergunta" /> */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 17.9999H18C19.657 17.9999 21 16.6569 21 14.9999V6.99988C21 5.34288 19.657 3.99988 18 3.99988H6C4.343 3.99988 3 5.34288 3 6.99988V14.9999C3 16.6569 4.343 17.9999 6 17.9999H7.5V20.9999L12 17.9999Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>

                    </button>
                  </>
                )}
                

                <button
                  type="button"
                  className="remove-button"
                  onClick={() => handleOpenRemoveQuestionModal(question.id)}
                >
                  {/* <img src={deleteImg} alt="Remover pergunta" /> */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5.99988H5H21" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                </button>
              </Question>
            );
          })}
           
        </div>
      </Main>
    </div>
  );
}