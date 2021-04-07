import Option from './OptionComponent';

const Options = (props) => {

    const options = props.options;
    const len = options.length;
    const str1 = `You have ${len} options! Your options are :-`;
    const str2 = `Please add an option to get started !`;

    return (
        <div>
            <p>{len ? str1 : str2}</p>
            {
                options.map((option) => (
                    <Option
                        key={option}
                        option={option}
                        handleRemove={props.handleRemove}
                    />
                ))
            }
            <button onClick={props.handleRemoveAll}>Remove All</button>
        </div>
    );
};

export default Options;
