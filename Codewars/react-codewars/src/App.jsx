// In this kata you'll learn how to control Components with different kinds of beasts.
//  Your goal is to tame and control a beast by building a controlled React component with the following criteria:

// Create a component called Beast and its state name
// The beast to control can be passed as a prop name
// Render a textinput field with the id controlledName. Its value should be the name of the current beast.
// Whenever this field's value is modified, the state should be updated as well
// You should control the beast Yeti if name is not passed in
// Read about controlled components here: https://reactjs.org/docs/forms.html#controlled-components
import React from "react";

class Beast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name === undefined ? "Yeti" : props.name,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          id="controlledName"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <p>Current Beast: {this.state.name}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h1>Beast Controller</h1>
      <Beast name="Manticore" />
      <Beast />
      <Beast name="" />
    </div>
  );
}

export default App;
