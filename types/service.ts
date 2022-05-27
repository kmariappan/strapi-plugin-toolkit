export type EntityResponse = {
  success: boolean;
  data: any | null;
  error: string | null;
};

export type EntityAbstractServiceType = {
  getWelcomeMessage: () => string;
  findMany: (collectionName: string, options?: object) => Promise<EntityResponse>;
  findOne: (collectionName: string, id: string | number, options: object) => Promise<EntityResponse>;
  create: (collectionName: string, values: any) => Promise<EntityResponse>;
  update: (collectionName: string, id: string | number, values: object) => Promise<EntityResponse>;
  delete: (collectionName: string, id: string | number) => Promise<EntityResponse>;
};
