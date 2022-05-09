import { ContentKeys } from '../generated';
import { contentTypes } from '../generated/content';
import { Attribute, Content, Field } from '../types/content';
/*
const capitalize = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

 const sanitaizeAndCapitalize = (name: string): string => {
  let sanitaizedString = '';
  if (name.includes('-')) {
    const NameArray = name.split('-');
    NameArray.forEach((n) => {
      sanitaizedString = `${sanitaizedString}${capitalize(n)}`;
    });
  } else {
    sanitaizedString = `${sanitaizedString}${capitalize(name)}`;
  }
  return sanitaizedString;
};

const getContentNameFromUid = (uid: string): string => {
  const SplitedCollectionUid = uid.split('.');
  const UidPrepart = SplitedCollectionUid[0];
  const SplitedCollectionNameArray = UidPrepart.split('::');

  let manipulatedName = '';

  SplitedCollectionNameArray.forEach((name) => {
    manipulatedName = `${manipulatedName}${sanitaizeAndCapitalize(name)}`;
  });

  return manipulatedName;
}; */

const manipulateFieldType = (field: Field): string => {
  switch (field.type) {
    case 'time':
      return 'Date';
    case 'date':
      return 'Date';
    case 'enumeration':
      return 'string[]';
    case 'json':
      return 'JSON';
    case 'datetime':
      return 'Date';
    case 'email':
      return 'string';
    case 'password':
      return 'string';
    case 'integer':
      return 'number';
    case 'decimal':
      return 'number';
    case 'text':
      return 'string';
    case 'richtext':
      return 'string';
    case 'media':
      return 'string';
    /// Component Releation one to one Or repetable logic
    case 'component':
      return 'string';
    case 'relation': {
      let prefix = '';
      let suffix = '';

      if (field.relation === 'oneToMany') {
        suffix = `[]`;
      }

      if (field.target) {
        const k = field.target as ContentKeys;
        prefix = contentTypes[k]?.globalId;
      }

      if (field.relation === 'morphToMany') {
        suffix = 'any';
      }

      return `${prefix}${suffix}`;
    }

    default:
      return field.type;
  }
};

const generateLine = (key: string, field: Field) => {
  const line = `${key}${field.required ? ':' : '?:'} ${manipulateFieldType(field)}`;

  return line;
};

const getLines = (data: Attribute) => {
  const keys = Object.keys(data);

  let types = ``;

  keys.forEach((key) => {
    types = `${types}${generateLine(key, data[key])}\n`;
  });
  return types;
};

export const generateType = (content: Content) => {
  return `export type ${content?.globalId} = {
  ${getLines(content.attributes)}
  } `;
};

export const generateStringType = (name: string, data: string[]): string => {
  let manipulatedString = '';
  data.forEach((element, index) => {
    manipulatedString =
      data.length - 1 === index ? `${manipulatedString}'${element}'` : `${manipulatedString}'${element}' | `;
  });
  return `export type ${name} = ${manipulatedString} `;
};
