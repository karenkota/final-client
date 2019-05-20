import React, { Component } from 'react';
import suggestionsListComponent from './suggestionsListComponent';

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ''
    };
    // static defaultProperty={
    //   suggestions: []
    // };
  }

  onChange = (e) => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = (e) => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  
  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render(){
    return (
      <div>
          <React.Fragment>
         <input
           type="text"
           onChange={onChange}
           onKeyDown={onKeyDown}
           value={userInput}
         />
        <li >
          key={suggestion} 
          onClick={onClick} > {suggestion}
        </li>
         {/* const {
          onChange,
          onClick,
          onKeyDown,
          state: {
            activeSuggestion,
            filteredSuggestions,
            showSuggestions,
            userInput
            }
          } = this; */}
         { suggestionsListComponent }
        </React.Fragment>
      </div>
     );
  };
}
export default Autocomplete;