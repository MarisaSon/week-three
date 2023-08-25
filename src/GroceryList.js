import { Component } from "react";

export default class GroceryList extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      shopList: [],
    };

    this.onChangeEvent = (e) => {
      this.setState({ userInput: e });
    };

    this.addItem = (input) => {
      if (input === "") {
        return;
      }
      let listArray = this.state.shopList;
      listArray.push(input);
      this.setState({ shopList: listArray, userInput: "" });
    };

    this.deleteItem = () => {
      let listArray = this.state.shopList;
      listArray = [];
      this.setState({ shopList: listArray });
    };

    this.crossedWord = (e) => {
      const li = e.target;
      li.classList.toggle("crossed");
    };

    this.onFormSubmit = (e) => {
      e.preventDefault();
    };
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="box">
            <input
              type="text"
              placeholder="What do you want to buy today?"
              onChange={(e) => this.onChangeEvent(e.target.value)}
              value={this.state.userInput}
            />
          </div>
          <div className="box">
            <button
              onClick={() => this.addItem(this.state.userInput)}
              className="btn add"
            >
              Add
            </button>
          </div>
          <div className="box">
            <ul>
              {this.state.shopList.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="box">
            <button
              onClick={() => this.deleteItem(this.state.userInput)}
              className="btn delete"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}
