import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styles from './Question.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
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
    subtitle.style.color = '#f00';
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
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
 
        <h2 ref={_subtitle => (subtitle = _subtitle)}>{category}{value}</h2>
        <div>{question}</div>
        <div>{answer}</div>
        <form>
          <input placeholder={'Your answer here...'}/>
          <button>answer</button>
          <button>pass</button>
          <button onClick={closeModal}>close</button>
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
