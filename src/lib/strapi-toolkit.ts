import { StrapiDatabaseQuery } from './strapi-db-query';
import { StrapiEntity } from './strapi-entity';

export class StrapiToolkit {
  entity: StrapiEntity;
  db: StrapiDatabaseQuery;

  constructor() {
    this.entity = new StrapiEntity();
    this.db = new StrapiDatabaseQuery();
  }
}
