const Option = (props) => (
    <div className="option">
        <p>
            <strong>{props.count}. {props.option}</strong>
        </p>
        <button
            className="button link-button"
            onClick={(e) => props.handleRemove(props.option)}
        >
            remove
        </button>
    </div>
);

/* What I have done here is that I referenced an Arrow Function and
 called NOT REFERENCED the method handleRemove() with the option value 
 as the parameter. That way I was able to pass down a parameter to a 
 method of a parent component.  */

export default Option;