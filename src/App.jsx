import React, { Component } from "react";

class App extends Component {
  
  render() { 
    return (
      <div className="formContainer">
        <form method="dialog">
          <fieldset>
            <legend>Form Validation With RegExp</legend>
            <div className="rgForm">
              <fieldset>
                <legend><label htmlFor="rg">RG: </label></legend>
                <input type="text" name="$rg" id="rg" placeholder="some text" />
                <button type="button">Validate</button>
              </fieldset>
            </div>
            <div className="cpfForm">
              <fieldset>
                <legend><label htmlFor="cpf">CPF: </label></legend>
                <input type="text" name="$cpf" id="cpf" placeholder="some more text" />
                <button type="button">Validate</button>
              </fieldset>
            </div>
            <div className="phoneForm">
              <fieldset>
                <legend><label htmlFor="phone">Phone: </label></legend>
                <input type="tel" name="$phone" id="phone" placeholder="Your phone goes here" />
                <button type="button">Validate</button>
              </fieldset>
            </div>
            <div className="emailForm">
              <fieldset>
                <legend><label htmlFor="email">Email: </label></legend>
                <input type="email" name="$email" id="email" placeholder="some even more text" />
                <button type="button">Validate</button>
              </fieldset>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;