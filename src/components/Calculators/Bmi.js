import React, { Component } from "react";
import { Card, InputNumber, Radio, Button } from "antd";

const RadioGroup = Radio.Group;

class Bmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: 2,
      heightValue: 0,
      widthValue: 0
    };
  }

  radioChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      radioValue: e.target.value
    });
  };

  heightChange = e => {
    console.log(e);
    this.setState({
      heightValue: e
    });
  };

  widthChange = e => {
    console.log(e);
    this.setState(prevState => {
      widthValue: prevState.widthValue + 1;
    });
  };

  render() {
    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Card title="BMI" bordered={false} style={{ width: "100%" }}>
          <div>
            <RadioGroup
              onChange={this.radioChange}
              value={this.state.radioValue}
            >
              <Radio value={1}>Male</Radio>
              <Radio value={2}>Female</Radio>
            </RadioGroup>
          </div>
          <br />
          <div>
            <label>Weight: </label>
            <InputNumber
              onChange={this.widthChange}
              value={this.state.widthValue}
              size="medium"
              min={1}
              max={10}
            />
          </div>
          <br />
          <div>
            <label>Height: </label>
            <InputNumber
              onChange={this.heightChange}
              value={this.state.heightValue}
              size="medium"
              min={1}
              max={10}
            />
          </div>
          <br />
          <div>
            <Button>Result</Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default Bmi;
