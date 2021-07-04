import { useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { database } from '../services/firebase';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import { Container, Aside, Main, Form, CreateRoom, Separator } from '../styles/auth';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if(!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      // alert('Room does not exists.')
      toast.error('A sala não existe.', { duration: 4000, 
        position: 'top-center',
        style: {
          fontWeight: 500,
          color: 'var(--danger)',
          border: '1px solid var(--danger)',
        }
      }, 
      )
      return;
    }

    if(roomRef.val().endedAt) {
      // alert('Room already closed');
      toast.error('A sala já foi fechada.', { duration: 4000, 
        position: 'top-center',
        style: {
          fontWeight: 500,
          color: 'var(--danger)',
          border: '1px solid var(--danger)',
        }
      }, 
      )
      return;
    }

    history.push(`/rooms/${roomCode}`)
  }

  return (
    <>
      <Toaster />

      <Container>
        <Aside>
          <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
          <strong>Crie salas de Q&amp;A ao-vivo</strong>
          <p>Tire as dúvidas da sua audiência em tempo-real</p>       
        </Aside>
        <Main>
          <div className="main-content">
            <img src={logoImg} alt="Letmeask" />
            <CreateRoom onClick={handleCreateRoom}>
              <img src={googleIconImg} alt="Logo do Google" />
              Crie sua sala com o Google
            </CreateRoom>
            <Separator>ou entre em uma sala</Separator>
            <Form onSubmit={handleJoinRoom}>
              <input
                type="text"  
                placeholder="Digite o código da sala"       
                onChange={event => setRoomCode(event.target.value)}
                value={roomCode}   
              />
              <Button type="submit">
                Entrar na sala
              </Button>
            </Form>
          </div>
        </Main>
      </Container>
    </>
  )
}