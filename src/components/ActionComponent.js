const Action = (props) => {

    return (
        <div>
            <button
                onClick={props.pickRandom}
                disabled={!props.hasOptions}
            >
                What should i do ?
           </button>
        </div>
    );
};

export default Action;