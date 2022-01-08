import { useEffect, useState } from 'react';
import classnames from 'classnames';

const LETTERS = { 1: 'A', 2: 'B', 3: 'C', 4: 'D' };

const QuestionMenu = ({ questionSelected, gameStarted, gameOver, question, handleOptionClick, lastQuestion }) => {
  const [selected, setSelected] = useState(null);

  const { title, options } = question;

  // Functions

  const handleClick = (id) => {
    setSelected(id);
    handleOptionClick(id);
  };

  // Effects

  useEffect(() => {
    setSelected(null);
  }, [question]);

  useEffect(() => {
    if (!questionSelected) setSelected(null);
  }, [questionSelected]);

  return (
    <div id="question-menu" className={classnames({ invisible: !gameStarted, disabled: gameOver || questionSelected })}>
      <div className="question">{title}</div>
      <div className="options">
        {
          options.map(({ id, value, correct }) => {
            return (
              <button
                key={id}
                className={
                  classnames('option', {
                    'option-left': id % 2 == 1,
                    'option-right': id % 2 == 0,
                    'option-selected': selected === id,
                    'option-correct': correct && (lastQuestion === 1 || lastQuestion === 2),
                    'option-wrong': selected === id && lastQuestion === 2,
                  })
                }
                onClick={() => handleClick(id)}
              >
                {LETTERS[id]}: {value}
              </button>
            );
          })
        }
      </div>
    </div>
  );
};

export default QuestionMenu;
