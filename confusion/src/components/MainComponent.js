import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      // selectedDish: null,
    };
  }

  // onDishSelect(dish) {
  //   this.setState({ selectedDish: dish });
  // }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        {/* <Menu
          dishes={this.state.dishes}
          onClick={(dish) => this.onDishSelect(dish)}
          selectedDish={this.state.selectedDish}
        />
        <DishDetail
          selectedDish={this.state.selectedDish}
          dishes={this.state.dishes}
        /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
