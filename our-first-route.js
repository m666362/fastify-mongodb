const {getItemsOption, getItemOption} = require("./controller/ItemController")

async function tempRoutes(fastify, options) {
  // Get all items
  fastify.get("/", getItemsOption);

  // Get one item
  fastify.get("/:id", getItemOption);

}

module.exports = tempRoutes;
