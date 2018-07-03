import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Coins from "./components/Coins/Coins";
import Favorites from "./components/Favorites/Favorites";
import Header from "./components/Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      coins: [],
      favorites: []
    };
    this.updateName = this.updateName.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteName = this.deleteName.bind(this);
  }

  componentDidMount() {
    axios.get("/api/coins").then(res => {
      this.setState({
        coins: res.data
      });
    });
  }

  updateName(name, id) {
    console.log("UPDATE");
    axios.put(`/api/updateName/${id}`, { name: name }).then(res => {
      console.log(res);
      this.setState({
        coins: res.data
      });
    });
  }

  // handleClick(id){
  //   let arr = [];
  //   arr = this.state.coins.slice();
  //      let element  = arr.filter(element=>element.id===id)
  //      let fav = []
  //           fav.push(element)
  //           this.setState({favorites: fav})

  // }

  deleteName(id) {
    console.log("DELETE");
    axios.delete(`/api/deleteName/${id}`).then(res => {
      console.log(res);
      this.setState({
        coins: res.data
      });
    });
  }

  handleClick(coin) {
    axios.post("/api/addFav", { coin }).then(res => {
      this.setState({
        favorites: res.data
      });
    });
  }

  render() {
    // let newList = this.state.favorites.map((element,index)=>{
    //   return (

    //       console.log(<Coins key={index}  name={element.name} price={element.quotes.usd.price}/>
    //   )
    // }

    let favorites = this.state.favorites.map((e, i) => {
      return (
        <Favorites
          key={i}
          id={e.id}
          element={e}
          name={e.name}
          price={e.quotes.USD.price}
        />
      );
    });

    let allCoins = this.state.coins.map((e, i) => {
      return (
        <Coins
          key={i}
          id={e.id}
          element={e}
          name={e.name}
          price={e.quotes.USD.price}
          updateName={this.updateName}
          deleteName={this.deleteName}
          handleClick={this.handleClick}
        />
      );
    });

    return (
      <body>
        <div className="test">
          <div className="testTwo">
            <Header />
          </div>
          <div className="leftSide">
            <div className="allCoins">
              <p>{allCoins}</p>
            </div>
          </div>
          <div className="contentwrap">
            <div className="content">
              {/* {// make this a functional component} */}
              <p className="description">
                {" "}
                Welcome to CryptoCurrency Coin tracker. Displayed to the left
                are available coins with up to date prices. Add coins to your
                favorites bar on the right hand side by hitting add. Click on a
                Coins name to change the name. Hit delete after clicking on the
                coin to delete it from the list.{" "}
              </p>
            </div>
          </div>
          <div className="rightSide">
            <div className="favTitle">
              Favorites
              <p>{favorites}</p>
            </div>
          </div>
          <div className="footerPart">
            <div className="footer" />
          </div>
        </div>
      </body>
    );
  }
}

export default App;
// <div className="App">
//     <header className="App-header">Cryptocurrency Coin Tracker
//     </header>

//       <body>
//       <div>
//           <div className = "data">
//             <div>
//               <div className = "allCoins">
//                {allCoins}
//                </div>
//               <div className = 'favorites'>
//                 <div>
//                   Favorites
//                 </div>
//               </div>
//             </div>
//           </div>
//     </div>
//     </body>
// </div>
