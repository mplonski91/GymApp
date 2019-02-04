import React from "react";
import { Tabs } from "antd";
import Bmi from "./Bmi";

const TabPane = Tabs.TabPane;

const Calculators = () => (
  <div>
    <h1>Calculators</h1>
    <Tabs defaultActiveKey="1">
      <TabPane tab="BMI" key="1">
        <Bmi />
      </TabPane>
      <TabPane tab="Kalkulator 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Kalkulator 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  </div>
);

export default Calculators;
