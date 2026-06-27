import { useState, useMemo } from 'react'
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
    options: ['text-style', 'font-size', 'text-size', 'font-style'],
    answer: 1,
  },
  {
    question: 'Which method adds an element to the end of an array in JavaScript?',
    options: ['push()', 'pop()', 'shift()', 'unshift()'],
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
    options: ['useState', 'useEffect', 'useContext', 'useReducer'],
    answer: 1,
  },
  {
    question: 'What does the `map()` method return in JavaScript?',
    options: [
      'A new array',
      'The original array modified',
      'A boolean',
      'undefined',
    ],
    answer: 0,
  },
  {
    question: 'Which tag is used to link a CSS file in HTML?',
    options: ['<style>', '<css>', '<link>', '<script>'],
    answer: 2,
  },
  {
    question: 'What is the default local storage limit in most browsers?',
    options: ['1MB', '5MB', '10MB', 'Unlimited'],
    answer: 1,
  },
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function Quiz() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState([])

  const shuffled = useMemo(() => shuffle(questions), [])

  const handleAnswer = (index) => {
    if (selected !== null) return
    setSelected(index)
    const correct = index === shuffled[current].answer
    if (correct) setScore((s) => s + 1)
    setAnswers((prev) => [
      ...prev,
      {
        question: shuffled[current].question,
        yourAnswer: shuffled[current].options[index],
        correctAnswer: shuffled[current].options[shuffled[current].answer],
        correct,
      },
    ])
  }

  const next = () => {
    if (current + 1 < shuffled.length) {
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
    setAnswers([])
  }

  if (finished) {
    const pct = Math.round((score / shuffled.length) * 100)
    return (
      <section className="quiz">
        <div className="container quiz__inner">
          <h2 className="quiz__heading">Quiz Complete!</h2>
          <p className="quiz__score">
            You scored <strong>{score}</strong> out of {shuffled.length} ({pct}%)
          </p>
          <p className="quiz__message">
            {pct === 100
              ? 'Perfect score! Amazing!'
              : pct >= 60
                ? 'Great job!'
                : 'Keep practicing!'}
          </p>
          <div className="quiz__progress-bar">
            <div
              className="quiz__progress-fill"
              style={{ width: `${pct}%` }}
            />
          </div>
          {answers.filter((a) => !a.correct).length > 0 && (
            <div className="quiz__review">
              <h3>Review Incorrect Answers</h3>
              {answers
                .filter((a) => !a.correct)
                .map((a, i) => (
                  <div key={i} className="quiz__review-item">
                    <p className="quiz__review-q">{a.question}</p>
                    <p className="quiz__review-wrong">
                      Your answer: {a.yourAnswer}
                    </p>
                    <p className="quiz__review-correct">
                      Correct: {a.correctAnswer}
                    </p>
                  </div>
                ))}
            </div>
          )}
          <button className="quiz__btn" onClick={restart}>
            Restart Quiz
          </button>
        </div>
      </section>
    )
  }

  const q = shuffled[current]
  const progress = ((current + 1) / shuffled.length) * 100

  return (
    <section className="quiz">
      <div className="container quiz__inner">
        <div className="quiz__progress">
          <span>
            Question {current + 1} of {shuffled.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="quiz__progress-bar">
          <div className="quiz__progress-fill" style={{ width: `${progress}%` }} />
        </div>
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
            {current + 1 < shuffled.length ? 'Next' : 'Finish'}
          </button>
        )}
      </div>
    </section>
  )
}

export default Quiz
