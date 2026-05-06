import styles from './app.module.css';

import { Header } from './components/Header';
import { Tip } from './components/Tip';
import { Letter } from './components/Letter';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { LettersUsed } from './components/LettersUsed';

export default function App() {
  function handleRestartGame() {

  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />

        <Tip tip="Linguagem de Programação Dinamica" />
        <div className={styles.word}>

          <Letter value="A" />
          <Letter value="A" />
          <Letter value="A" />
          <Letter value="A" />
          <Letter value="A" />

        </div>

        <h4>
          Palpite
        </h4>
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder='?' />
          <Button title="Confirmar" />
        </div>
        <LettersUsed />
      </main>


    </div>
  )
}