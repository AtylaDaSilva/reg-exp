import React, { Component } from "react";

class App extends Component {
  state = {
    form: [
      { id: "rg", value: "" },
      { id: "cpf", value: "" },
      { id: "phone", value: "" },
      { id: "email", value: "" },
    ]
  }

  handleChange = (event) => { 
    let newState = this.state.form;
    
    for (let element of newState) { 
      if (element.id === event.target.id) { 
        element.value = event.target.value;
        this.setState({ form: newState });
      }
    }
  }

  validateRg = () => { 
    const rg = this.state.form[0].value;

    if (!rg) { 
      console.log("Please, insert a valid RG");
      return false;
    }

    console.log("RG = ", rg);

    const regExp = new RegExp(/^\d{10}\s?-?\s?\d{1}$/);
    const result = rg.match(regExp);

    console.log("Match = ", result[0]);
    return result;
  }

  
  render() { 
    return (
      <div className="formContainer">
        <form method="dialog">
          <fieldset>
            <legend>Form Validation With RegExp</legend>
            <div className="rgForm">
              <fieldset>
                <legend><label htmlFor={this.state.form[0].id}>RG: </label></legend>
                <input type="text" name="$rg" id={this.state.form[0].id} placeholder="some text"
                  onChange={this.handleChange}
                />
                <button type="button"
                  onClick={ this.validateRg }
                >
                  Validate
                </button>
              </fieldset>
            </div>
            <div className="cpfForm">
              <fieldset>
                <legend><label htmlFor={ this.state.form[1].id }>CPF: </label></legend>
                <input type="text" name="$cpf" id={this.state.form[1].id} placeholder="some more text"
                  onChange={this.handleChange}
                />
                <button type="button">Validate</button>
              </fieldset>
            </div>
            <div className="phoneForm">
              <fieldset>
                <legend><label htmlFor={ this.state.form[2].id }>Phone: </label></legend>
                <input type="tel" name="$phone" id={this.state.form[2].id} placeholder="Your phone goes here"
                  onChange={this.handleChange}
                />
                <button type="button">Validate</button>
              </fieldset>
            </div>
            <div className="emailForm">
              <fieldset>
                <legend><label htmlFor={ this.state.form[3].id }>Email: </label></legend>
                <input type="email" name="$email" id={this.state.form[3].id} placeholder="some even more text"
                  onChange={this.handleChange}
                />
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