import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
const { Sider } = Layout;

const Sidebar = () => (
  <Sider>
    <Menu theme="dark" defaultSelectedKeys={["3"]} mode="inline">
      <Menu.Item key="1">
        <Icon type="team" />
        <span>
          <NavLink
            className="c-link"
            to="/training"
            activeClassName="is-active"
            exact={true}
          >
            Treningi
          </NavLink>
        </span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="team" />
        <span>
          <NavLink
            className="c-link"
            to="/diets"
            activeClassName="is-active"
            exact={true}
          >
            Dieta
          </NavLink>
        </span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="team" />
        <span>
          <NavLink
            className="c-link"
            to="/calculators"
            activeClassName="is-active"
          >
            Kalkulatory
          </NavLink>
        </span>
      </Menu.Item>
    </Menu>
  </Sider>
);

export default Sidebar;
