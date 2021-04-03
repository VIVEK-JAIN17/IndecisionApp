// import React from 'react';

const Option = (props) => {

    return (
        <div>
            <p>
                <strong>{props.option}</strong>
                <button
                    onClick={(e) => props.handleRemove(props.option)}
                >delete
          </button>
            </p>
        </div>
    );

    /* What I have done here is that I referenced an Arrow Function and
     called NOT REFERENCED the method handleRemove() with the option value 
     as the parameter. That way I was able to pass down a parameter to a 
     method of a parent component.  */
};

export default Option;