const express = require('express');
const app = express();
const cors = require('cors');
const request = require('request');

const corsOptions = {
  optionsSuccessStatus: 200
};

const remoteAPIurl = "https://api.mercadolibre.com";
const Author = {
  name: "Patricio",
  lastname: "D'Andrea"
};

app.use(cors(corsOptions));

app.listen(8000, () => {
  console.log('Server started!');
});

app.route('/api/items').get(async (req, res) => {
  const query = req.query['q'];
  const limit = 4;
  const result = await searchProducts(query, limit);
  let response = {
    author: Author,
    categories: result.categories,
    items: result.items
  };
  res.send(response);
});

app.route('/api/items/:id').get(async (req, res) => {
  const id = req.params['id'];
  let response = {};
  const result = await getDetail(id);
  const item = result.item;
  const desc = await getDescription(id);
  const categories = await getCategories(result.category_id);
  response.author = Author;
  response.item = item;
  response.item.description = desc;
  response.categories = categories;
  res.send(response);
});

function searchProducts(query, limit) {
  const endpoint = remoteAPIurl + '/sites/MLA/search?q=' + query + '&limit=' + limit;
  return new Promise((resolve, reject) => {
    request.get(endpoint, (err, response, body) => {
      if (err) {
        reject(next(err));
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
        data.results.forEach(function (item) {
          try {
            items.push({
              id: item.id,
              title: item.title,
              price: {
                currency: item.currency_id,
                amount: Math.floor(item.price),
                decimals:
                  !(item.price % 1 === null || item.price % 1 === undefined) ?
                    Math.ceil(item.price % 1 * 100) : 0
              },
              picture: item.thumbnail,
              condition: item.condition,
              free_shipping: item.shipping.free_shipping,
              location: item.address.state_name
            })
          } catch (e) {
            reject(e);
          }
        });
        const response = {
          categories: categories,
          items: items
        };
        resolve(response);
      }
    });
  });
}

function getDetail(id) {
  const endpoint = remoteAPIurl + '/items/' + id;
  return new Promise((resolve, reject) => {
    request.get(endpoint, (err, response, body) => {
      if (err) {
        reject({
          error: next(err)
        });
      }
      if (body) {
        let data = JSON.parse(body);
        const response = {};
        try {
          response.item = {
            id: data.id,
            title: data.title,
            price: {
              currency: data.currency_id,
              amount: Math.floor(data.price),
              decimals: !(data.price % 1 === null || data.price % 1 === undefined) ?
                Math.ceil(data.price % 1 * 100) : 0,
            },
            picture: data.pictures[0].url,
            condition: data.condition,
            free_shipping: data.shipping.free_shipping,
            sold_quantity: data.sold_quantity
          };
        } catch (e) {
          reject(e);
        }
        response.category_id = data.category_id;
        resolve(response);
      }
    })
  })
}

function getDescription(id) {
  const endpoint = remoteAPIurl + '/items/' + id + '/description/';
  return new Promise((resolve, reject) => {
    request.get(endpoint, (err, response, body) => {
      if (err) {
        resolve(next(err))
      }
      if (body) {
        let data = JSON.parse(body);
        try {
          if (data.plain_text) {
            resolve(data.plain_text);
          }
        } catch (e) {
          reject(e);
        }
      }
    })
  });
}

function getCategories(id) {
  const endpoint = remoteAPIurl + '/categories/' + id;
  return new Promise((resolve, reject) => {
    request.get(endpoint, (err, response, body) => {
      if (err) {
        reject(next(err))
      }
      if (body) {
        let data = JSON.parse(body);
        try {
          let categories = [];
          const path = data.path_from_root;
          path.forEach(function (category) {
            categories.push(category.name);
          });
          resolve(categories);
        } catch (e) {
          console.log("Categories not found");
          reject(e);
        }
      }
    })
  });
}
