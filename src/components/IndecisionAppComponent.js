import React from 'react';
import Header from './HeaderComponent';
import Action from './ActionComponent';
import Options from './OptionsComponent';
import AddOption from './AddOptionComponent';
import OptionModal from './OptionModalComponent';

class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }

    // passed down to Options component
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    // passed down to Options component
    handleDeleteOption = (option) => {
        this.setState((prevState) => ({ options: prevState.options.filter((op) => op !== option) }));
    };


    // passed down to Action component
    pickRandom = () => {
        const a = Math.floor(Math.random() * this.state.options.length);
        const opt = this.state.options[a];
        this.setState((prevState) => ({ selectedOption: opt }));
        // prevState.options[a]
    };

    // passed down to AddOption Component
    handleAddOption = (option) => {

        if (!option) {
            return 'Enter Valid Value to Add in List !';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This Option Already Exists !!'
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    };

    // passed down to OptionModal Component
    handleToggleModal = () => {
        this.setState(() => ({ selectedOption: undefined }));
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

    render() {

        const title = 'Indecision App';
        const subtitle = 'This is a React Applicaiton';
        return (
            <div className="main">
                <Header title={title} subtitle={subtitle} />
                <div className="container">

                    <Action
                        hasOptions={this.state.options.length > 0}
                        pickRandom={this.pickRandom}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleRemoveAll={this.handleDeleteOptions}
                            handleRemove={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    clearSelection={this.handleToggleModal}
                />
            </div>
        );
    }
}

export default IndecisionApp;