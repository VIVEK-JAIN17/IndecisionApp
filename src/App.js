import './App.css';
import React from 'react';

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

const Header = (props) => {

  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

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

const Options = (props) => {

  const options = props.options;
  const len = options.length;
  return (
    <div>
      <h4>Options Component Here</h4>
      <p>You have {len} options! Your options are :-</p>
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
    e.target.elements.newItem.value = '';

    /* *********** Method 1 *********** */
    this.setState(() => ({ error: error }));

    /* *********** Method 2 *********** */
    // this.setState(() => { return { error } })

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

const App = () => {
  return (
    <div>
      <IndecisionApp />
    </div>
  );
}

export default App;
