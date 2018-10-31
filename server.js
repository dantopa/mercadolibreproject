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
      data.results.map(item => {
        categories.push(item.category_id);
        items.push({
          "id": item.id,
          "title": item.title,
          "price": {
            "currency": item.currency_id,
            "amount": item.price,
            // "decimals": item.decimals
          },
          "picture": item.thumbnail,
          "condition": item.condition,
          "free_shipping": item.shipping.free_shipping
        })
      });
      let result = {
        // "author": {
        //   "name": item.name,
        //   "lastname": item.lastname
        // },
        "categories": categories,
        "items": items
      };
      res.send(result);
    }
  });
});

