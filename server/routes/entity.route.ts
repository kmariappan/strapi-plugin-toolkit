export const entityRoutes = [
  {
    method: 'GET',
    path: '/',
    handler: 'entityController.index',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/entity/:collectionName',
    handler: 'entityController.getEntities',
    config: {
      policies: ['admin::isAuthenticatedAdmin'],
    },
  },
  {
    method: 'GET',
    path: '/entity/:collectionName/:id',
    handler: 'entityController.getEntityById',
    config: {
      policies: ['admin::isAuthenticatedAdmin'],
    },
  },

  {
    method: 'POST',
    path: '/entity/:collectionName',
    handler: 'entityController.createEntity',
    config: {
      policies: ['admin::isAuthenticatedAdmin'],
    },
  },

  {
    method: 'PUT',
    path: '/entity/:collectionName/:id',
    handler: 'entityController.updateEntity',
    config: {
      policies: ['admin::isAuthenticatedAdmin'],
    },
  },

  {
    method: 'DELETE',
    path: '/entity/:collectionName/:id',
    handler: 'entityController.deleteEntity',
    config: {
      policies: ['admin::isAuthenticatedAdmin'],
    },
  },
];
