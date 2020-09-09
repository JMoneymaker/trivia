import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
const FuzzyMatching = require('fuzzy-matching');
import styles from './Question.css';
import { GameContext } from '../hooks/useGameContext';

const modalStyles = {
  content : {
    top                   : '49.65%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    width                 : '40%',
    height                : '40%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : '#0A0B7B'
  },

  overlay: {
    backgroundColor       : ''
  } 
};

let subtitle;


const Question = ({ question, value, answer, category }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [questionDisabled, setQuestionDisabled] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [correct, setCorrect] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const { score, setScore } = useContext(GameContext);
  const fm = new FuzzyMatching([answer]);

  const openModal = () => {
    setModalIsOpen(true);
    setQuestionDisabled(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#D7A04B';
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserAnswer(e.target.value);
    setIsDisabled(true);
    setAnswered(true);
    const compare = fm.get(userAnswer).value;
    if(compare === answer){
      setCorrect(true);
      setScore(score + value);
    } else {
      setCorrect(false);
      setScore(score - value);
    }
    setDisplayAnswer(true);
  };

  const handleChange = e => {
    setUserAnswer(e.target.value);
  };
  
  return (
    <>{!questionDisabled ? 
      <li className={styles.Question} onClick={openModal}>{value}</li> 
      : <li className={styles.Question}></li>}
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={modalStyles}
      contentLabel="Question"
      //need to get this working
      ariaHideApp={false}
    >
      <section className={styles.modalHeader}>          
        <h2 className={styles.modalValue}ref={_subtitle => (subtitle = _subtitle)}>{value}</h2>
        <h2 className={styles.modalCategory}>{category}</h2>
      </section>
      <div className={styles.questionFrame}>
        <p className={styles.modalQuestion}>{question}</p>
        <p className={styles.modalAnswer}>{displayAnswer ? answer : ''}<span>{correct ? ' ✓ ' : ''}</span></p>
      </div>
      <form onSubmit={handleSubmit} className={styles.modalForm}>
        <input 
          placeholder={'Your answer...'} 
          value={userAnswer || ''} 
          onChange={handleChange} />
        <button className={styles.submitButton} disabled={isDisabled}>
          <div className={styles.thumbBobber}></div>
        </button>
        <button className={styles.nextButton} onClick={closeModal}>{answered ? 'next' : 'pass'}</button>
      </form>
    </Modal>
    </>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  answer: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default Question;
