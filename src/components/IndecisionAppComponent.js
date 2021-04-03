import React from 'react';
import Header from './HeaderComponent';
import Action from './ActionComponent';
import Options from './OptionsComponent';
import AddOption from './AddOptionComponent';


class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.pickRandom = this.pickRandom.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }

    // lifecycle method
    componentDidMount() {
        /* fires everytime after the component gets mounted  */

        /* try catch is necessary to makesure that the options which the 
          localStorage retrieved holds valid json. If not this could break
          generate an error while parsing (JSON.parse()) and break the code. 
        */

        try {

            // retrieve the opitons from localStorage
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            /* Set the state by updating options array with retrieved options
              only if the options are not null else we do nothing 
            */
            if (options) {
                this.setState(() => ({ options }))
            }

        } catch (err) {
            // We do nothing
        }
    }

    // lifecycle method
    componentDidUpdate(prevProps, prevState) {
        /* fires everytime after a component gets updated */

        // set the options in the localStorage if it's updated
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    // passed down to Options component
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    // passed down to Options component
    handleDeleteOption(option) {
        this.setState((prevState) => ({ options: prevState.options.filter((op) => op !== option) }))
    }


    // passed down to Action component
    pickRandom() {
        const a = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[a]);
    }

    // passed down to AddOption Component
    handleAddOption(option) {

        if (!option) {
            return 'Enter Valid Value to Add in List !';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This Option Already Exists !!'
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    }

    render() {

        const title = 'Indecision App';
        const subtitle = 'This is a React Applicaiton';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    pickRandom={this.pickRandom}
                />
                <Options
                    options={this.state.options}
                    handleRemoveAll={this.handleDeleteOptions}
                    handleRemove={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

export default IndecisionApp;