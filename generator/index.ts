import { getAxiosInstance } from './service/http';
import { StrapiToolkit } from './strapi-toolkit';
import { StrapiTypeGenerator } from './strapi-type-generator';

const { entity, db } = new StrapiToolkit(getAxiosInstance('http://localhost:1337/toolkit/'));

export { entity, db, StrapiTypeGenerator };
