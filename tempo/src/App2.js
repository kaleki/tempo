import React, {Component} from "react";
import NavBar from "./components/Navbar";
import {ChoreCard} from "./components/ChoreCard";
import {Jumbotron} from "./components/Jumbotron";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from "./components/User";
import { AddChore } from "./components/AddChore";



  class App2 extends Component {
    state = {
      name: "",
      price: "",
      hours: "",
      items: [
        {
          id: 1,
          name: "XBOX",
          price: "300",
          hours: "15"
        }
      ]
  
    };

  showprofile = event => {
    this.setState({showOn: !this.setState.showOn})
  };

  closeprofile = event => {
    this.setState({hide: !this.setState.hide})
  };
 

  handleInputChange = event => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  };

  addItem = event => {
    event.preventDefault();
    const {name, price, hours} = this.state;
    const newItem = this.state.items;
    const newItemArray = newItem.length; 
    const id = newItemArray ?(newItem[newItemArray -1].id+1):1;
    this.setState({items:[...newItem, Object.assign({},{id, name, price, hours})], name: "", price: "", hours:""})
  };

  

  onDelete = index => {
    this.setState({
      items: [...this.state.items.slice(0, index),...this.state.items.slice(index + 1)]});
  };





  render () {
    const {name, price, hours} = this.state;

   return ( <div className="App">
      <BrowserRouter>
      <header>
        <NavBar/>
        <Jumbotron />
        <div style = {({display: this.state.showOn ? "block": "none"})}  className = "container">
          <AddChore 
          name = {name}
          price = {price}
          hours = {hours}
          onChange = {this.handleInputChange}
          onSubmit = {this.addItem}
          />
          <h2 className = "display text-center">Wish List</h2>

          <div className = "row">
          {this.state.items.map((item, index) =>
                <ChoreCard
                    key={item.id}
                    index={index}
                    item={item}
                    onDelete={() => this.onDelete(index)}
                />
            )
          }
          </div>
        </div>
        <button type = "button" className = "btn btn-primary" onClick = {this.showprofile}>View Profile</button>
        

      </header>
      <Switch>
         <Route path="/" exact />
          <Route path="/user" component={User} />
      </Switch>
      </BrowserRouter>
    </div>
  );
};
  };

export default App2;
