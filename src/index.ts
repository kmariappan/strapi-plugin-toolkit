import { generateType, generateStringType } from './lib/generator';
import { StrapiToolkit } from './lib/strapi-toolkit';
import { StrapiTypeGenerator } from './lib/strapi-type-generator';

const { entity, db } = new StrapiToolkit();

export { generateType, generateStringType, entity, db, StrapiTypeGenerator };
