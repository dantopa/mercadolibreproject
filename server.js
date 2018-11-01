const express = require('express');
const app = express();
const cors = require('cors');
const request = require('request');

const corsOptions = {
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.listen(8000, () => {
  console.log('Server started!');
});

app.route('/api/items').get((req, res) => {
  const query = req.query['q'];
  const limit = 4;
  const url = "https://api.mercadolibre.com";
  const endpoint = url + '/sites/MLA/search?q=' + query + '&limit=' + limit;
  request.get(endpoint, (err, response, body) => {
    if (err) {
      res.send(next(err));
    }
    if (body) {
      let data = JSON.parse(body);
      let items = [];
      let categories = [];
      try {
        const catResuls = data.filters[0].values[0].path_from_root;
        catResuls.forEach(function (category) {
          categories.push(category.name);
        });
      } catch (e) {
        console.log("Categories not found");
      }
      console.log(categories);
      data.results.map(item => {
        items.push({
          "id": item.id,
          "title": item.title,
          "price": {
            "currency": item.currency_id,
            "amount": Math.floor(item.price),
            "decimals":
              !(item.price % 1 === null || item.price % 1 === undefined) ?
                Math.ceil(item.price % 1 * 100) : 0
          },
          "picture": item.thumbnail,
          "condition": item.condition,
          "free_shipping": item.shipping.free_shipping,
          "location": item.address.state_name
        })
      });
      let result = {
        "author": {
          "name": "Patricio",
          "lastname": "D'Andrea"
        },
        "categories": categories,
        "items": items
      };
      res.send(result);
    }
  });
});

