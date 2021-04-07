import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.clearSelection}
        contentLabel="selected option"
    >
        <h3>Selected option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.clearSelection} >Okay</button>
    </Modal>
);

/* This comment will explain about the working and various "props" of 
React-Modal Component by React. The react-modal compoenent passes on 
several pre-defined props to function. Those are :-
1. isOpen -> This prop takes a boolean value to determine if the modal should be open or not\.
2. contenLabel -> This prop is for screen readers. It tells what the modal represents to screen readers. */

export default OptionModal;