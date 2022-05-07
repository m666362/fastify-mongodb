// our-first-route.js
let items = require("../Data/item");
const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

const getItemsOption = {
  schema: {
    response: {
      200: {
        type: "array",
        Item,
      },
    },
  },
  handler: function (req, reply) {
    reply.send(items);
  },
};

const getItemOption = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: function (req, reply) {
    const { id } = req.params;
    reply.send(items[Number(id)]);
  },
};

module.exports = {
  getItemsOption,
  getItemOption,
};
