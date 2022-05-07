import { ContentKeys } from '../generated';
import { contentTypes } from '../generated/content';

export const getContentUid = (uid: ContentKeys): string => {
  return uid;
};

export const getContentGolabalId = (uid: ContentKeys): string => {
  return contentTypes[uid].globalId;
};

export const getContentModelName = (uid: ContentKeys): string => {
  return contentTypes[uid].modelName;
};

// modelType: 'contentType',
// modelName: 'rund-tag',
// connection: 'default',
// uid: 'api::rund-tag.rund-tag',
// apiName: 'rund-tag',
// globalId: 'RundTag',
