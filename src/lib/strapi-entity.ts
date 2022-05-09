import { Student } from './generated/strapi-types';
import { StrapiEntityServiceApi } from './strapi-entity-service-api';

export class StrapiEntity {
  student: StrapiEntityServiceApi<Student>;
  constructor() {
    this.student = new StrapiEntityServiceApi();
  }
}
