const axios = require("axios");
const baseUrl = "https://api.coinmarketcap.com/v2/ticker/";

let coins = [];
let favorites = [];

const getCoins = (req, res, next) => {
  console.log("HIT");
  axios
    .get(baseUrl)
    .then(response => {
      for (x in response.data.data) {
        response.data.data[x].fav = false;
        coins.push(response.data.data[x]);
        // console.log(coins)
        console.log(response.data.data);
      }
      res.status(200).json(coins);
    })
    .catch(err => console.log(err));
};

const updateName = (req, res, next) => {
  let coin = coins.find(e => {
    return e.id == req.params.id;
  });
  coin.name = req.body.name;
  res.status(200).json(coins);
};

const deleteName = (req, res, next) => {
  let coinTwoIndex = coins.findIndex(coin => {
    return coin.id === +req.params.id;
  });
  coins.splice(coinTwoIndex, 1);
  res.status(200).json(coins);
};

const addFav = (req, res, next) => {
  let { coin } = req.body;
  favorites.push(coin);
  console.log(favorites);
  res.status(200).json(favorites);
};

// make a put request contains req.body and req.params
//find the coin whos id equals req.params
//set the fav to req.body.fav

// const getCoins = (req,res,next) => {
//     console.log('newHit');
//     axios.get(baseUrl).then(response => {
//         let tempCoins = response.data.data.map(e => {let {name , price}=e;
//         console.log(e);

//         return{
//             name,
//             price,
//             favorites
//         };

//         });

//         coins = tempCoins;
//         res.status(200).json(cons)

//     })
// }

// .map(function(e,i){
//     return (
//       <Coins key={i} name={e.name} price={e.quotes.USD.price}/>
//     )

module.exports = {
  getCoins,
  addFav,
  updateName,
  deleteName
};
