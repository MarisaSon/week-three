import "./App.css";
import { Component } from "react";
import image from "./image/shopping.jpg";
import imageTwo from "./image/shoppingMan.jpg";
import GroceryList from "./GroceryList";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Container">
        <div className="box">
          <img src={image} width="250px" alt="Photo" />
        </div>

        <div className="box">
          <h1 >Grocery List</h1>
        </div>

        <GroceryList />
        <div className="box">
        <img src={imageTwo} width="250px" alt="Photo" />
        </div>
      </div>
    );
  }
}
