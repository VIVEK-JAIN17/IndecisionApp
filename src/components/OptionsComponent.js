import Option from './OptionComponent';

const Options = (props) => {

    const options = props.options;
    const len = options.length;
    const str1 = `You have ${len} options! Your options are :-`;
    const str2 = `Please add an option to get started !`;

    return (

        <div>
            <div className="header">
                <h3>Your Options</h3>
                <button
                    className="button link-button"
                    onClick={props.handleRemoveAll}
                >
                    Remove All
                </button>
            </div>

            <p className="message">{len ? str1 : str2}</p>
            {
                options.map((option, index) => (
                    <Option
                        key={option}
                        option={option}
                        count={index + 1}
                        handleRemove={props.handleRemove}
                    />
                ))
            }
        </div>
    );
};

export default Options;
