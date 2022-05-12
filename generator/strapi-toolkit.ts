import { AxiosInstance } from 'axios';
import { StrapiDatabaseQuery } from './strapi-db-query';
import { StrapiEntity } from './generated/strapi-entity';

export class StrapiToolkit {
  entity: StrapiEntity;
  db: StrapiDatabaseQuery;

  constructor(private axiosInstance?: AxiosInstance) {
    this.entity = new StrapiEntity(this.axiosInstance);
    this.db = new StrapiDatabaseQuery();
  }
}
