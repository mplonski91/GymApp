import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import { Layout } from "antd";

import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import HeaderPage from "../components/Header/Header";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import Diets from "../components/Diet/Diet";
import Training from "../components/Training/Training";
import Calculators from "../components/Calculators/Calculators";

const { Content } = Layout;
const AppRouter = () => (
  <BrowserRouter>
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderPage />
      <Layout>
        <Sidebar />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumbs />
          <Switch>
            <Route path="/diets" component={Diets} exact={true} />
            <Route path="/training" component={Training} />
            <Route path="/calculators" component={Calculators} />
            <Route component={NotFoundPage} />
          </Switch>
        </Content>
      </Layout>
      <Footer />
    </Layout>
  </BrowserRouter>
);

export default AppRouter;
