import React, { useState, useEffect } from 'react';
import { getRandomQuestion } from '../services/getTrivia';
import styles from './Question.css';

const Question = () => {
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    getRandomQuestion()
      .then(res => {
        setQuestion(res[0].question);
        setCategory(res[0].category.title);
        setValue(res[0].value);
        setAnswer(res[0].answer)
        ;});
  }, []);

  const handleClick = () => {
    getRandomQuestion()
      .then(res => {
        setQuestion(res[0].question);
        setCategory(res[0].category.title);
        setValue(res[0].value);
        setAnswer(res[0].answer)
        ;});
  };

  return (
    <div className={styles.Question}>
      <h2>{category}</h2>
      <h1>{value}</h1>
      <p>{question}</p>
      <button onClick={handleClick}>Get Random Question</button>
      <input></input>
      <p>{answer}</p>
    </div>
  );
};

export default Question;
