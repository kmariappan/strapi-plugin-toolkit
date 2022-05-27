export const entityRoutes = [
  {
    method: 'GET',
    path: '/',
    handler: 'entityController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/entity/:collectionName',
    handler: 'entityController.getEntities',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/entity/:collectionName/:id',
    handler: 'entityController.getEntityById',
    config: {
      policies: [],
    },
  },

  {
    method: 'POST',
    path: '/entity/:collectionName',
    handler: 'entityController.createEntity',
    config: {
      policies: [],
    },
  },

  {
    method: 'PUT',
    path: '/entity/:collectionName/:id',
    handler: 'entityController.updateEntity',
    config: {
      policies: [],
    },
  },

  {
    method: 'DELETE',
    path: '/entity/:collectionName/:id',
    handler: 'entityController.deleteEntity',
    config: {
      policies: [],
    },
  },
];
