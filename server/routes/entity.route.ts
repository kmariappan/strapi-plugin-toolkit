export const entityRoutes = [
  {
    method: "GET",
    path: "/",
    handler: "entityController.index",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/entity/:collectionName",
    handler: "entityController.getEntities",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/entity/:collectionName/:id",
    handler: "entityController.getEntityById",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "POST",
    path: "/entity/:collectionName",
    handler: "entityController.createEntity",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "PUT",
    path: "/entity/:collectionName/:id",
    handler: "entityController.updateEntity",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "DELETE",
    path: "/entity/:collectionName/:id",
    handler: "entityController.deleteEntity",
    config: {
      policies: [],
      auth: false,
    },
  },
]
