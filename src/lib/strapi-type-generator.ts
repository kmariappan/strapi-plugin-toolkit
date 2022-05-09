// import { Attribute, Content, ContentType, Field } from './types/content';
import fs from 'fs';

type StrapiKey = {
  name: string;
  data: string[];
};

export class StrapiTypeGenerator {
  constructor(private keys: StrapiKey[]) {}

  private generateStringType = (name: string, data: string[]): string => {
    let manipulatedString = '';
    data.forEach((element, index) => {
      manipulatedString =
        data.length - 1 === index ? `${manipulatedString}'${element}'` : `${manipulatedString}'${element}' | `;
    });
    return `export type ${name} = ${manipulatedString} `;
  };

  private createFile = (data: string) => {
    fs.writeFile('./strapi-types.ts', data, (err) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log('saved');
    });
  };

  public generate = () => {
    let printString = '';

    this.keys.forEach((key) => {
      printString = `${printString}${this.generateStringType(key.name, key.data)} \n\n`;
    });

    // this.keys.forEach((key) => {
    //   if (key.name === 'ContentKeys') {
    //     key.data.forEach((k) => {
    //       const content = contents[0].data[k];
    //       try {
    //         printString = `${printString}${generateType(content)} \n\n`;
    //         console.log(content.globalId);
    //       } catch (error) {
    //         if (error) {
    //           console.log(content.globalId);
    //           console.log(error);
    //         }
    //       }
    //     });
    //   }
    // });

    this.createFile(printString);
  };

  //   private generateType = (content: Content) => {
  //     return `export type ${content?.globalId} = {
  //     ${this.getLines(content.attributes)}
  //     } `;
  //   };

  //   private getLines = (data: Attribute) => {
  //     const keys = Object.keys(data);

  //     let types = ``;

  //     keys.forEach((key) => {
  //       types = `${types}${this.generateLine(key, data[key])}\n`;
  //     });
  //     return types;
  //   };

  //   private generateLine = (key: string, field: Field) => {
  //     const line = `${key}${field.required ? ':' : '?:'} ${this.manipulateFieldType(field)}`;

  //     return line;
  //   };

  //   private manipulateFieldType = (field: Field): string => {
  //     switch (field.type) {
  //       case 'time':
  //         return 'Date';
  //       case 'date':
  //         return 'Date';
  //       case 'enumeration':
  //         return 'string[]';
  //       case 'json':
  //         return 'JSON';
  //       case 'datetime':
  //         return 'Date';
  //       case 'email':
  //         return 'string';
  //       case 'password':
  //         return 'string';
  //       case 'integer':
  //         return 'number';
  //       case 'decimal':
  //         return 'number';
  //       case 'text':
  //         return 'string';
  //       case 'richtext':
  //         return 'string';
  //       case 'media':
  //         return 'string';
  //       /// Component Releation one to one Or repetable logic
  //       case 'component':
  //         return 'string';
  //       case 'relation': {
  //         let prefix = '';
  //         let suffix = '';

  //         if (field.relation === 'oneToMany') {
  //           suffix = `[]`;
  //         }

  //         if (field.target) {
  //           const k = field.target as ContentKeys;
  //           prefix = contentTypes[k]?.globalId;
  //         }

  //         if (field.relation === 'morphToMany') {
  //           suffix = 'any';
  //         }

  //         return `${prefix}${suffix}`;
  //       }

  //       default:
  //         return field.type;
  //     }
  //   };
}
