const {
  getItemsOption,
  getItemOption,
} = require("../controller/ItemController");

async function routes(fastify, options) {
  // Get all items
  fastify.get("/", getItemsOption);

  // Get one item
  fastify.get("/:id", getItemOption);
}

module.exports = routes;
