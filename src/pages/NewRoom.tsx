import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// import illustrationImg from '../assets/images/illustration.svg';

import { Button } from '../components/Button';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

import { Illustration } from '../components/Illustration';
import { Logo } from '../components/Logo';

import { Container, Aside, Main, Form } from '../styles/auth';

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/admin/rooms/${firebaseRoom.key}`);
  }

  return (
    <Container>
       <Aside>
        {/* <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" /> */}
        <Illustration />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>       
      </Aside>
      <Main>
        <div className="main-content">
          {/* <img src={logoImg} alt="Letmeask" /> */}
          <Logo />
          <h2>Criar uma nova sala</h2>
          <Form onSubmit={handleCreateRoom}>
            <input
              type="text"  
              placeholder="Nome da sala" 
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </Form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </Main>
    </Container>
  )
}