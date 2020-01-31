import React, { PureComponent } from 'react';
import DAYIN from "./Dayin.js";
import "./Crusher.css";

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <DAYIN/>
      </div>
    )
  }
}

export default App