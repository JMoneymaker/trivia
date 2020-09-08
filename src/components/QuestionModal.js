// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import PropTypes from 'prop-types';
// import styles from './Question.css';

// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

const QuestionModal = ({ question, value, answer, category }) => {
  // let subtitle;
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };
  
  console.log(question, value, answer, category);
  return (

    {/* <h1>{value}</h1>

      <Modal 
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>answer</button>
          <button>pass</button>
        </form>
      </Modal> */}
  );
};



// QuestionModal.propTypes = {
//   question: PropTypes.string.isRequired,
//   value: PropTypes.number.isRequired,
//   answer: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired
// };

export default QuestionModal;
