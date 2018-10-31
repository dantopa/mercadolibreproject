const express = require('express');
const app = express();
const request = require('request');

app.listen(8000, () => {
  console.log('Server started!');
});

app.route('/api/items/:query').get(async (req, res) => {
  const query = req.params['query'];
  const limit = 4;
  const url = "https://api.mercadolibre.com";
  const endpoint = url + '/sites/MLA/search?q=:' + query + '&limit=' + limit;
  request.get(endpoint, (err, response, body) => {
    if (err) {
      return next(err);
    }
    if (body) {
      let data = JSON.parse(body);
      let items = [];
      let categories = [];
      data["results"].map(item => {
        categories.push(item["category_id"]);
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
        "categories": categories,
        "items": items
      };
      res.send(result);
    }
  });
});

