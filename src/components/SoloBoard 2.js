import React, { useState, useEffect } from 'react';
import { getRandomQuestion } from '../services/getTrivia';
import styles from './Question.css';
// import useCategoryIds from '../hooks/useCategoryIds';
// import useCategories from '../hooks/useCategories';
const FuzzyMatching = require('fuzzy-matching');

const Question = () => {
  // const categoryIds = useCategoryIds();
  // const questions = useCategories();
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [tally, setTally] = useState({ correct: 0, incorrect: 0 });
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const fm = new FuzzyMatching([answer]);

  useEffect(() => {
    setDisplayAnswer(false);
    setCorrect(false);
    getRandomQuestion()
      .then(res => {
        setQuestion(res[0].question.toUpperCase());
        setCategory(res[0].category.title.toUpperCase());
        setValue(res[0].value);
        setAnswer(res[0].answer);
      });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setDisplayAnswer(false);
    setCorrect(false);
    getRandomQuestion()
      .then(res => {
        setQuestion(res[0].question.toUpperCase());
        setCategory(res[0].category.title.toUpperCase());
        setValue(res[0].value);
        setAnswer(res[0].answer)
        ;});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserAnswer(e.target.value);
    const compare = fm.get(userAnswer).value;
    if(compare === answer){
      setCorrect(true);
      setScore(score + value);
      setTally(tally => ({ 
        ...tally, 
        correct: tally.correct + 1 
      }));
    } else {
      setCorrect(false);
      setScore(score - value);
      setTally(tally => ({ 
        ...tally, 
        incorrect: tally.incorrect + 1 
      }));
    }
    setDisplayAnswer(true);
  };

  console.log(answer, 'answer');
  console.log(tally, 'tally');

  const handleChange = e => {
    setUserAnswer(e.target.value);
  };

  return (
    <div className={styles.QuestionCard}>
      <div className={styles.topBar}>
        <header className={styles.cardHeader}>
          <h1 className={styles.value}>{'$' + value}</h1>
          <div className={styles.tally}>
            <p className={styles.score}>score: {'$' + score}</p> 
          </div>
        </header>
      </div>
      <div className={styles.topSubBar}></div>
      <div className={styles.cardQuestion}>
        <div className={styles.leftBar}></div>
        <div className={styles.questionFrame}>
          <h2 className={styles.category}>{category}</h2>
          <p className={styles.question}>{question}</p>
          <p className={styles.answer}>{displayAnswer ? answer : ''}<span>{correct ? ' ✓' : ''}</span></p>
        </div>
        <div className={styles.rightBar}></div>
      </div>
      <div className={styles.bottomBar}>
        <footer className={styles.cardFooter}>
          <form onSubmit={handleSubmit} className={styles.answerForm}>
            <input className={styles.input} value={userAnswer || ''} onChange={handleChange}></input>
            {userAnswer ? <button className={styles.submitButton}>submit</button> : <button className={styles.passButton} onClick={handleClick}>next</button>}
          </form>
        </footer>
      </div>
    </div>
  );
};

export default Question;
