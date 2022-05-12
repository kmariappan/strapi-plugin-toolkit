export type ContentKeys =
  | 'admin::permission'
  | 'admin::user'
  | 'admin::role'
  | 'admin::api-token'
  | 'plugin::upload.file'
  | 'plugin::i18n.locale'
  | 'plugin::users-permissions.permission'
  | 'plugin::users-permissions.role'
  | 'plugin::users-permissions.user'
  | 'plugin::comments.comment'
  | 'plugin::comments.comment-report'
  | 'api::mani.mani'
  | 'api::student.student';

export type ComponentKeys = 'students.marks';

export type Middlewarekeys =
  | 'strapi::errors'
  | 'strapi::ip'
  | 'strapi::security'
  | 'strapi::cors'
  | 'strapi::responseTime'
  | 'strapi::poweredBy'
  | 'strapi::session'
  | 'strapi::logger'
  | 'strapi::compression'
  | 'strapi::responses'
  | 'strapi::body'
  | 'strapi::query'
  | 'strapi::favicon'
  | 'strapi::public'
  | 'plugin::users-permissions.rateLimit';

export type PolicyKeys =
  | 'admin::isAuthenticatedAdmin'
  | 'admin::hasPermissions'
  | 'plugin::content-manager.has-draft-and-publish'
  | 'plugin::content-manager.hasPermissions';

export type HookKeys = 'strapi::content-types.beforeSync' | 'strapi::content-types.afterSync';

export type ServiceKeys =
  | 'admin::user'
  | 'admin::token'
  | 'admin::role'
  | 'admin::permission'
  | 'admin::passport'
  | 'admin::metrics'
  | 'admin::content-type'
  | 'admin::constants'
  | 'admin::condition'
  | 'admin::auth'
  | 'admin::action'
  | 'admin::api-token'
  | 'plugin::content-manager.components'
  | 'plugin::content-manager.content-types'
  | 'plugin::content-manager.data-mapper'
  | 'plugin::content-manager.metrics'
  | 'plugin::content-manager.permission-checker'
  | 'plugin::content-manager.permission'
  | 'plugin::content-manager.uid'
  | 'plugin::content-manager.entity-manager'
  | 'plugin::content-type-builder.content-types'
  | 'plugin::content-type-builder.components'
  | 'plugin::content-type-builder.component-categories'
  | 'plugin::content-type-builder.builder'
  | 'plugin::content-type-builder.api-handler'
  | 'plugin::email.email'
  | 'plugin::upload.provider'
  | 'plugin::upload.upload'
  | 'plugin::upload.image-manipulation'
  | 'plugin::i18n.permissions'
  | 'plugin::i18n.metrics'
  | 'plugin::i18n.localizations'
  | 'plugin::i18n.locales'
  | 'plugin::i18n.iso-locales'
  | 'plugin::i18n.entity-service-decorator'
  | 'plugin::i18n.core-api'
  | 'plugin::i18n.content-types'
  | 'plugin::users-permissions.jwt'
  | 'plugin::users-permissions.providers'
  | 'plugin::users-permissions.role'
  | 'plugin::users-permissions.user'
  | 'plugin::users-permissions.users-permissions'
  | 'plugin::comments.admin'
  | 'plugin::comments.client'
  | 'plugin::comments.common'
  | 'plugin::comments.gql'
  | 'api::mani.mani'
  | 'api::student.student';

export type ControllerKeys =
  | 'admin::admin'
  | 'admin::api-token'
  | 'admin::authenticated-user'
  | 'admin::authentication'
  | 'admin::permission'
  | 'admin::role'
  | 'admin::user'
  | 'admin::webhooks'
  | 'plugin::content-manager.collection-types'
  | 'plugin::content-manager.components'
  | 'plugin::content-manager.content-types'
  | 'plugin::content-manager.relations'
  | 'plugin::content-manager.single-types'
  | 'plugin::content-manager.uid'
  | 'plugin::content-type-builder.builder'
  | 'plugin::content-type-builder.component-categories'
  | 'plugin::content-type-builder.components'
  | 'plugin::content-type-builder.content-types'
  | 'plugin::email.email'
  | 'plugin::upload.admin-api'
  | 'plugin::upload.content-api'
  | 'plugin::i18n.locales'
  | 'plugin::i18n.iso-locales'
  | 'plugin::i18n.content-types'
  | 'plugin::users-permissions.auth'
  | 'plugin::users-permissions.user'
  | 'plugin::users-permissions.role'
  | 'plugin::users-permissions.permissions'
  | 'plugin::users-permissions.settings'
  | 'plugin::users-permissions.contentmanageruser'
  | 'plugin::comments.admin'
  | 'plugin::comments.client'
  | 'api::mani.mani'
  | 'api::student.student';

export type AdminPermission = {
  id: string | number;
  action: string;
  subject?: string;
  properties?: JSON;
  conditions?: JSON;
  role?: AdminRole;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: AdminUser;
  updatedBy?: AdminUser;
};

export type AdminUser = {
  id: string | number;
  firstname?: string;
  lastname?: string;
  username?: string;
  email: string;
  password?: string;
  resetPasswordToken?: string;
  registrationToken?: string;
  isActive?: boolean;
  roles?: AdminRole;
  blocked?: boolean;
  preferedLanguage?: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: AdminUser;
  updatedBy?: AdminUser;
};

export type AdminRole = {
  id: string | number;
  name: string;
  code: string;
  description?: string;
  users?: AdminUser;
  permissions?: AdminPermission[];
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: AdminUser;
  updatedBy?: AdminUser;
};

export type AdminApiToken = {
  id: string | number;
  name: string;
  description?: string;
  type?: string[];
  accessKey: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: AdminUser;
  updatedBy?: AdminUser;
};

export type UploadFile = {
  id: string | number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: JSON;
  hash: string;
  ext?: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: JSON;
  related?: any; /// Morph To Many Relation need To find a optimal solution
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: AdminUser;
  updatedBy?: AdminUser;
};

export type I18NLocale = {
  id: string | number;
  name?: string;
  code?: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: AdminUser;
  updatedBy?: AdminUser;
};

export type UsersPermissionsPermission = {
  id: string | number;
  action: string;
  role?: UsersPermissionsRole;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: AdminUser;
  updatedBy?: AdminUser;
};

export type UsersPermissionsRole = {
  id: string | number;
  name: string;
  description?: string;
  type?: string;
  permissions?: UsersPermissionsPermission[];
  users?: UsersPermissionsUser[];
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: AdminUser;
  updatedBy?: AdminUser;
};

export type UsersPermissionsUser = {
  id: string | number;
  username: string;
  email: string;
  provider?: string;
  password?: string;
  resetPasswordToken?: string;
  confirmationToken?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: UsersPermissionsRole;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: AdminUser;
  updatedBy?: AdminUser;
};

export type CommentsComment = {
  id: string | number;
  content: string;
  blocked?: boolean;
  blockedThread?: boolean;
  blockReason?: string;
  authorUser?: UsersPermissionsUser;
  authorId?: string;
  authorName?: string;
  authorEmail?: string;
  authorAvatar?: string;
  removed?: boolean;
  approvalStatus?: string;
  related?: string;
  reports?: CommentsCommentReport[];
  threadOf?: CommentsComment;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: AdminUser;
  updatedBy?: AdminUser;
};

export type CommentsCommentReport = {
  id: string | number;
  content?: string;
  reason: string[];
  resolved?: boolean;
  related?: CommentsComment;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: AdminUser;
  updatedBy?: AdminUser;
};

export type Mani = {
  id: string | number;
  firstname: string;
  lastname: string;
  age?: number;
  mark: ComponentStudentsMarks;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: AdminUser;
  updatedBy?: AdminUser;
};

export type Student = {
  id: string | number;
  firstname: string;
  lastname: string;
  age?: number;
  mark?: ComponentStudentsMarks[];
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
  createdBy?: AdminUser;
  updatedBy?: AdminUser;
};

export type ComponentStudentsMarks = {
  id: string | number;
  English?: number;
  Tamil?: number;
  Maths?: number;
  Science?: number;
};
