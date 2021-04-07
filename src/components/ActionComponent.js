const Action = (props) => (
    <div className="action">
        <button
            className="button big-button"
            onClick={props.pickRandom}
            disabled={!props.hasOptions}
        >
            What should i do ?
           </button>
    </div>
);

export default Action;