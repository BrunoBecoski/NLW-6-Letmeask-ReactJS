import emptyQuestionsImg from '../../assets/images/empty-questions.svg';

import { Container } from './styles';

type EmptyQuestionsProps = {
  children: string;
}

export function EmptyQuestions({ children }: EmptyQuestionsProps) {
  return (
    <Container>
      <img src={emptyQuestionsImg} alt="Ilustração simbolizando perguntas" />
      <div>
        <h1>Nenhuma pergunta por aqui...</h1>
        <p> {children} </p>
      </div>
    </Container>
  )
}