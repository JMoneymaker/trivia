import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styles from './Question.css';

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

  const openModal = () => {
    setModalIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#D7A04B';
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  return (
    <>
      <li className={styles.Question} onClick={openModal}>{value}</li>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Question"
        ariaHideApp={false}
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>{value}</h2>
        <div className={styles.questionFrame}>
          <h2 className={styles.modalCategory}>{category}</h2>
          <p className={styles.modalQuestion}>{question}</p>
          <div className={styles.modalAnswer}>{answer}</div>
        </div>
        <form className={styles.modalForm}>
          <input placeholder={'Your answer here...'}/>
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
