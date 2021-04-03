import React from 'react';

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        /* *********** Method 1 *********** */
        // const option = document.getElementById('newItem').value.trim();
        // const error = this.props.handleAddOption(option);
        //   document.getElementById('newItem').value = '';

        /* *********** Method 2 *********** */
        const option = e.target.elements.newItem.value.trim();
        const error = this.props.handleAddOption(option);

        /* *********** Method 1 *********** */
        this.setState(() => ({ error: error }));

        /* *********** Method 2 *********** */
        // this.setState(() => { return { error } })

        if (!error) {
            e.target.elements.newItem.value = '';
        }

        /** trim() function is a built-in function that removes all the leading spaces
         * and the trailing spaces but NOT the inner spaces from the string. For example,
         * for a string '    vivek jain    ' , the output after appying trim() function
         * will be 'vivek jain' (notice how space netween vivek and jain is NOT removed).
         */
    }

    render() {
        return (
            <div>
                {this.state.error && (<p>{this.state.error}</p>)}
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='Add Option Here' id='newItem' name='newItem' />
                    <input type='submit' value='Add Option to List!' />
                </form>
            </div>
        );
    }
}

export default AddOption;