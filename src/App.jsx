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

    const regExp = new RegExp(/^\d{10}\s?-?\s?\d{1}$/);
    const result = rg.match(regExp);

    return result;
  }

  validateCpf = () => { 
    /*Validate CPF */
    const cpf = this.state.form[1].value;
    
    const regExp = new RegExp(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/);
    const result = cpf.match(regExp);

    return result;
  }

  validatePhone = () => { 
    /*Validate Phone */
    const phone = this.state.form[2].value;
    
    const regExp = new RegExp(/^9\.?\d{4}-?\d{4}$/);
    const result = phone.match(regExp);

    console.log(result);

    return result;
  }

  validateEmail = () => { 
    /*Validate Email */
    const email = this.state.form[3].value;

    const regExp = new RegExp(/^\w*@\w+\.\w{2,3}$/);
    const result = email.match(regExp);

    console.log(result);

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
                <input type="text" name="$rg" id={this.state.form[0].id} placeholder="Ex.: 1234567890-1"
                  onChange={this.handleChange}
                />
                <button type="button" onClick={ this.validateRg }> Validate </button>
              </fieldset>
            </div>
            <div className="cpfForm">
              <fieldset>
                <legend><label htmlFor={ this.state.form[1].id }>CPF: </label></legend>
                <input type="text" name="$cpf" id={this.state.form[1].id} placeholder="Ex.: 123.456.789-01"
                  onChange={this.handleChange}
                />
                <button type="button" onClick={ this.validateCpf }>Validate</button>
              </fieldset>
            </div>
            <div className="phoneForm">
              <fieldset>
                <legend><label htmlFor={ this.state.form[2].id }>Phone: </label></legend>
                <input type="tel" name="$phone" id={this.state.form[2].id} placeholder="Ex.: 9.1234-5678"
                  onChange={this.handleChange}
                />
                <button type="button" onClick={ this.validatePhone }>Validate</button>
              </fieldset>
            </div>
            <div className="emailForm">
              <fieldset>
                <legend><label htmlFor={ this.state.form[3].id }>Email: </label></legend>
                <input type="email" name="$email" id={this.state.form[3].id} placeholder="Ex.: email@email.com"
                  onChange={this.handleChange}
                />
                <button type="button" onClick={ this.validateEmail }>Validate</button>
              </fieldset>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;