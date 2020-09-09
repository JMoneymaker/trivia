import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
const FuzzyMatching = require('fuzzy-matching');
import styles from './Question.css';
import { GameContext } from '../hooks/useGameContext';

const modalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    width                 : '40%',
    height                : '40%',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : '#0A0B7B'
  }
};

let subtitle;

const Question = ({ question, value, answer, category }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [correct, setCorrect] = useState(false);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const { score, setScore } = useContext(GameContext);
  const fm = new FuzzyMatching([answer]);
  const [questionDisabled, setQuestionDisabled] = useState(false);

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
      <h2 ref={_subtitle => (subtitle = _subtitle)}>{value}</h2>
      <div className={styles.questionFrame}>
        <h2 className={styles.modalCategory}>{category}</h2>
        <p className={styles.modalQuestion}>{question}</p>
        <p className={styles.answer}>{displayAnswer ? answer : ''}<span>{correct ? ' ✓' : ''}</span></p>
      </div>
      <form onSubmit={handleSubmit} className={styles.modalForm}>
        <input 
          placeholder={'Your answer here...'} 
          value={userAnswer || ''} 
          onChange={handleChange} />
        <section className={styles.formButtons}>
          <button className={styles.submitButton}>answer</button>
          <button className={styles.passButton} onClick={closeModal}>pass</button>
        </section>
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
