import { EntityAbstractServiceType, EntityResponse } from '../../types';

export const entityAbstractService = ({ strapi }: any): EntityAbstractServiceType => ({
  getWelcomeMessage() {
    return 'You have landed in the dream Place 🚀';
  },

  async findMany(collectionName, options): Promise<EntityResponse> {
    return new Promise<EntityResponse>((resolve) => {
      strapi.entityService
        .findMany(collectionName, {
          ...options,
        })
        .then((res: any) => {
          resolve(response({ data: res, error: null }));
        })
        .catch((e: Error) => {
          if (e) {
            resolve(response({ data: null, error: e.message }));
          }
        });
    });
  },

  async findOne(collectionName, id, options): Promise<EntityResponse> {
    return new Promise<EntityResponse>((resolve) => {
      strapi.entityService
        .findOne(collectionName, id, {
          ...options,
        })
        .then((res: any) => {
          resolve(response({ data: res, error: null }));
        })
        .catch((e: Error) => {
          if (e) {
            resolve(response({ data: null, error: e.message }));
          }
        });
    });
  },

  async create(collectionName, values): Promise<EntityResponse> {
    return new Promise<EntityResponse>((resolve) => {
      strapi.entityService
        .create(collectionName, { data: values })
        .then((res: any) => {
          resolve(response({ data: res, error: null }));
        })
        .catch((e: Error) => {
          if (e) {
            resolve(response({ data: null, error: e.message }));
          }
        });
    });
  },

  async update(collectionName, id, values): Promise<EntityResponse> {
    return new Promise<EntityResponse>((resolve) => {
      strapi.entityService
        .update(collectionName, id, { data: values })
        .then((res: any) => {
          resolve(response({ data: res, error: null }));
        })
        .catch((e: Error) => {
          if (e) {
            resolve(response({ data: null, error: e.message }));
          }
        });
    });
  },

  async delete(collectionName, id): Promise<EntityResponse> {
    return new Promise<EntityResponse>((resolve) => {
      strapi.entityService
        .delete(collectionName, id)
        .then((res: any) => {
          resolve(response({ data: res, error: null }));
        })
        .catch((e: Error) => {
          if (e) {
            resolve(response({ data: null, error: e.message }));
          }
        });
    });
  },
});

const response = ({ data, error }: Omit<EntityResponse, 'success'>): EntityResponse => {
  return {
    success: error ? false : true,
    data,
    error,
  };
};
