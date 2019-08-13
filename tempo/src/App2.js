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
          hours: "30"
        }
      ]
    }
 

  handleInputChange = event => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  addItem = event => {
    event.preventDefault();
    const {name, price, hours} = this.state;
    const itemsInState = this.state.items;
    const itemsArrayLength = itemsInState.length;
    const id = itemsArrayLength 
               ?
               (itemsInState[itemsArrayLength - 1].id + 1) 
               : 
               1;
    this.setState({
     items: [
       ...itemsInState,
       Object.assign({}, {
         id,
         name,
         price,
         hours
       })
     ],
     name: "",
     price: "",
     hours: ""
   })
  };

  EditItem = index => {
    this.setState({items:[this.state.items.map((item, itemIndex)=> {
      if (itemIndex === index){
        return {
          isEditing: !item.isEditing
        }
      }
      return item;
    })]})
  }

  onDelete = index => {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1)
      ]
    });
  };



  render () {
    const {name, price, hours} = this.state;

   return ( <div className="App">
      <BrowserRouter>
      <header>
        <NavBar />
        <Jumbotron />
        <div className = "container">
          <AddChore 
          name = {name}
          price = {price}
          hours = {hours}
          onChange = {this.handleInputChange}
          onSubmit = {this.addChore}
          />
          <h2 className = "display text-center">Wish List</h2>

          <div className = "row">
          {
            this.state.items.map((item, index) =>
                <ChoreCard
                    key={item.id}
                    index={index}
                    chore={item}
                    toggleEditing={() => this.toggleItemEditing(index)}
                    onChange={this.handleItemUpdate}
                    onDelete={() => this.onDelete(index)}
                />
            )
          }
          </div>
        </div>

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
