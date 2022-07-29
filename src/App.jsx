import React, { Component } from "react";

class Result extends Component { 
  render() { 
    if (this.props.form.validateButtonPressed && this.props.form.isValid) {
      return (
        <p>
          {`✔️ Valid ${this.props.form.id.toUpperCase()}` }
        </p>
      );
    } else if (this.props.form.validateButtonPressed) { 
      return (
      <p>
        {`❌ Invalid ${this.props.form.id.toUpperCase()}` }
      </p>
    );
    }
  }
}

class App extends Component {
  state = {
    form: [
      { id: "rg", value: "", isValid: false, validateButtonPressed: false },
      { id: "cpf", value: "", isValid: false, validateButtonPressed: false },
      { id: "phone", value: "", isValid: false, validateButtonPressed: false },
      { id: "email", value: "", isValid: false, validateButtonPressed: false },
    ]
  }

  setIsValid = (index, bool) => { 
    let currentState = this.state.form;
    currentState[index].isValid = bool;

    this.setState({ currentState });
    
  }

  setValidateButtonPressed = (index, bool) => { 
    let currentState = this.state.form;
    currentState[index].validateButtonPressed = bool;

    this.setState({ currentState });
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

  clearLog = (index, timer) => { 
    const timeId = setTimeout(() => { 
      let newState = this.state.form;
      newState[index].validateButtonPressed = false;

      this.setState({ newState });
    }, timer)
  }

  validateRg = () => { 
    this.setValidateButtonPressed(0, true);
    const rg = this.state.form[0].value;

    const regExp = new RegExp(/^\d{10}\s?-?\s?\d{1}$/);
    const result = rg.match(regExp);

    if (result) {
      this.setIsValid(0, true);
    } else { 
      this.setIsValid(0, false);
    }

    this.clearLog(0, 5000);
  }

  validateCpf = () => { 
    /*Validate CPF */
    this.setValidateButtonPressed(1, true);
    const cpf = this.state.form[1].value;
    
    const regExp = new RegExp(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/);
    const result = cpf.match(regExp);

    if (result) {
      this.setIsValid(1, true);
    } else { 
      this.setIsValid(1, false);
    }

    this.clearLog(1, 5000);
  }

  validatePhone = () => { 
    /*Validate Phone */
    this.setValidateButtonPressed(2, true);
    const phone = this.state.form[2].value;
    
    const regExp = new RegExp(/^9\.?\d{4}-?\d{4}$/);
    const result = phone.match(regExp);

    if (result) {
      this.setIsValid(2, true);
    } else { 
      this.setIsValid(2, false);
    }

    this.clearLog(2, 5000);
  }

  validateEmail = () => { 
    /*Validate Email */
    this.setValidateButtonPressed(3, true);
    const email = this.state.form[3].value;

    const regExp = new RegExp(/^\w*@\w+\.\w{2,3}$/);
    const result = email.match(regExp);

    if (result) {
      this.setIsValid(3, true);
    } else { 
      this.setIsValid(3, false);
    }

    this.clearLog(3, 5000);
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
                <input type="text" name="$rg" id={this.state.form[0].id} placeholder="Ex.: 1234567890-1"
                  onChange={this.handleChange}
                />
                <button type="button" onClick={this.validateRg}> Validate </button>
                <div className="log"> <Result key={this.state.form[0].id} form={ this.state.form[0] } /> </div>
              </fieldset>
            </div>
            <div className="cpfForm">
              <fieldset>
                <legend><label htmlFor={ this.state.form[1].id }>CPF: </label></legend>
                <input type="text" name="$cpf" id={this.state.form[1].id} placeholder="Ex.: 123.456.789-01"
                  onChange={this.handleChange}
                />
                <button type="button" onClick={this.validateCpf}>Validate</button>
                <div className="log"> <Result key={this.state.form[1].id} form={ this.state.form[1] } /> </div>
              </fieldset>
            </div>
            <div className="phoneForm">
              <fieldset>
                <legend><label htmlFor={ this.state.form[2].id }>Phone: </label></legend>
                <input type="tel" name="$phone" id={this.state.form[2].id} placeholder="Ex.: 9.1234-5678"
                  onChange={this.handleChange}
                />
                <button type="button" onClick={this.validatePhone}>Validate</button>
                <div className="log"> <Result key={this.state.form[2].id} form={ this.state.form[2] } /> </div>
              </fieldset>
            </div>
            <div className="emailForm">
              <fieldset>
                <legend><label htmlFor={ this.state.form[3].id }>Email: </label></legend>
                <input type="email" name="$email" id={this.state.form[3].id} placeholder="Ex.: email@email.com"
                  onChange={this.handleChange}
                />
                <button type="button" onClick={this.validateEmail}>Validate</button>
                <div className="log"> <Result key={this.state.form[3].id} form={ this.state.form[3] } /> </div>
              </fieldset>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;