import { useState } from 'react'
import './Quiz.css'

const questions = [
  {
    question: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'High Tech Modern Language',
      'Hyper Transfer Markup Language',
      'Home Tool Markup Language',
    ],
    answer: 0,
  },
  {
    question: 'Which CSS property controls the text size?',
    options: [
      'text-style',
      'font-size',
      'text-size',
      'font-style',
    ],
    answer: 1,
  },
  {
    question: 'Which method adds an element to the end of an array in JavaScript?',
    options: [
      'push()',
      'pop()',
      'shift()',
      'unshift()',
    ],
    answer: 0,
  },
  {
    question: 'What is the correct way to create a React component?',
    options: [
      'class Component extends React.Component',
      'function Component() { return <div /> }',
      'Both are correct',
      'None of the above',
    ],
    answer: 2,
  },
  {
    question: 'Which hook is used for side effects in React?',
    options: [
      'useState',
      'useEffect',
      'useContext',
      'useReducer',
    ],
    answer: 1,
  },
]

function Quiz() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [finished, setFinished] = useState(false)

  const handleAnswer = (index) => {
    if (selected !== null) return
    setSelected(index)
    if (index === questions[current].answer) {
      setScore((s) => s + 1)
    }
  }

  const next = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1)
      setSelected(null)
    } else {
      setFinished(true)
    }
  }

  const restart = () => {
    setCurrent(0)
    setScore(0)
    setSelected(null)
    setFinished(false)
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <section className="quiz">
        <div className="container quiz__inner">
          <h2 className="quiz__heading">Quiz Complete!</h2>
          <p className="quiz__score">
            You scored <strong>{score}</strong> out of {questions.length} ({pct}%)
          </p>
          <p className="quiz__message">
            {pct === 100
              ? 'Perfect score! Amazing!'
              : pct >= 60
                ? 'Great job!'
                : 'Keep practicing!'}
          </p>
          <button className="quiz__btn" onClick={restart}>Restart Quiz</button>
        </div>
      </section>
    )
  }

  const q = questions[current]

  return (
    <section className="quiz">
      <div className="container quiz__inner">
        <p className="quiz__progress">
          Question {current + 1} of {questions.length}
        </p>
        <h2 className="quiz__question">{q.question}</h2>
        <div className="quiz__options">
          {q.options.map((opt, i) => {
            let cls = 'quiz__option'
            if (selected !== null) {
              if (i === q.answer) cls += ' quiz__option--correct'
              else if (i === selected) cls += ' quiz__option--wrong'
            }
            return (
              <button
                key={i}
                className={cls}
                onClick={() => handleAnswer(i)}
                disabled={selected !== null}
              >
                {opt}
              </button>
            )
          })}
        </div>
        {selected !== null && (
          <button className="quiz__btn" onClick={next}>
            {current + 1 < questions.length ? 'Next' : 'Finish'}
          </button>
        )}
      </div>
    </section>
  )
}

export default Quiz
