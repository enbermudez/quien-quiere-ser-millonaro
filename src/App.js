import { useEffect, useState } from 'react';
import classnames from 'classnames';
import QuestionMenu from './components/QuestionMenu';
import helpers from './helpers';
import data from './data';

import audioQuestion from './audio/question-1.mp3';
import audioWin from './audio/win.mp3';
import audioLose from './audio/lose.mp3';
import whoWasCorrect from './audio/who-was-correct.mp3';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [audio, setAudio] = useState({ player: null, loop: false });
  const [lastQuestion, setLastQuestion] = useState(0);
  const [questionSelected, setQuestionSelected] = useState(false);
  const [nextLevel, setNextLevel] = useState(false);

  // Functions

  const playAudio = (track, loop = false) => {
    if (audio.player) audio.player.pause();
    setAudio({ player: new Audio(track), loop });
  };

  const handleOptionClick = (id) => {
    setQuestionSelected(true);
    const isTheCorrectOption = currentQuestion.options.find((option) => option.id === id).correct;

    playAudio(whoWasCorrect);

    setTimeout(() => {
      if (isTheCorrectOption) {
        playAudio(audioWin);
        setLastQuestion(1);

        setTimeout(() => {
          setNextLevel(true);
        }, 6500);
      } else {
        playAudio(audioLose);
        setLastQuestion(2);

        setTimeout(() => {
          setGameOver(true);
        }, 6000);
      }
    }, 4000);
  };

  const nextQuestion = () => {
    setQuestionSelected(false);
    setCurrentLevel(currentLevel + 1);
    setCurrentQuestion(helpers.random(data.questions.filter((q) => q.level === currentLevel + 1)));
    setLastQuestion(0);
    setNextLevel(false);
    playAudio(audioQuestion, true);
  };

  const initialSetup = () => {
    setCurrentLevel(1);
    setQuestions(data.questions);
    setCurrentQuestion(helpers.random(data.questions.filter((q) => q.level === 1)));
    setLastQuestion(0);
    setQuestionSelected(false);
    playAudio(audioQuestion, true);
    setGameStarted(true);
    setGameOver(false);
  };

  // Effects

  useEffect(() => {
    if (!audio.player) return;
    if (audio.loop) audio.player.loop = true;
    audio.player.play();
  }, [audio]);

  useEffect(() => {
    setQuestions(data.questions);
  }, []);

  return (
    <div id="app">
      <button
        className={classnames('game-button', { invisible: gameStarted })}
        onClick={initialSetup}
      >
        Iniciar
      </button>

      <button
        className={classnames('game-button', { invisible: !gameOver })}
        onClick={initialSetup}
      >
        Volver a intentarlo
      </button>

      <button
        className={classnames('game-button', { invisible: !nextLevel })}
        onClick={nextQuestion}
      >
        Siguiente pregunta
      </button>

      { currentQuestion && (
        <QuestionMenu
          questionSelected={questionSelected}
          gameOver={gameOver}
          gameStarted={gameStarted}
          question={currentQuestion}
          handleOptionClick={handleOptionClick}
          lastQuestion={lastQuestion}
        />
      ) }
    </div>
  );
};

export default App;
