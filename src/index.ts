import { StrapiToolkit } from './lib/strapi-toolkit';
import { StrapiTypeBuilder } from './lib/strapi-type-builder';

const { entity, db } = new StrapiToolkit();

export { entity, db, StrapiTypeBuilder };
