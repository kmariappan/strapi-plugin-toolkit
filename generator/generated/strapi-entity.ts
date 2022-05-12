import { AxiosInstance } from 'axios';
import { StrapiEntityServiceApi } from '../strapi-entity-service-api';
import { AdminPermission } from './strapi-types';
import { AdminUser } from './strapi-types';
import { AdminRole } from './strapi-types';
import { AdminApiToken } from './strapi-types';
import { UploadFile } from './strapi-types';
import { I18NLocale } from './strapi-types';
import { UsersPermissionsPermission } from './strapi-types';
import { UsersPermissionsRole } from './strapi-types';
import { UsersPermissionsUser } from './strapi-types';
import { CommentsComment } from './strapi-types';
import { CommentsCommentReport } from './strapi-types';
import { Mani } from './strapi-types';
import { Student } from './strapi-types';
import { ComponentStudentsMarks } from './strapi-types';

export class StrapiEntity {
  adminPermission: StrapiEntityServiceApi<AdminPermission>;
  adminUser: StrapiEntityServiceApi<AdminUser>;
  adminRole: StrapiEntityServiceApi<AdminRole>;
  adminApiToken: StrapiEntityServiceApi<AdminApiToken>;
  uploadFile: StrapiEntityServiceApi<UploadFile>;
  i18NLocale: StrapiEntityServiceApi<I18NLocale>;
  usersPermissionsPermission: StrapiEntityServiceApi<UsersPermissionsPermission>;
  usersPermissionsRole: StrapiEntityServiceApi<UsersPermissionsRole>;
  usersPermissionsUser: StrapiEntityServiceApi<UsersPermissionsUser>;
  commentsComment: StrapiEntityServiceApi<CommentsComment>;
  commentsCommentReport: StrapiEntityServiceApi<CommentsCommentReport>;
  mani: StrapiEntityServiceApi<Mani>;
  student: StrapiEntityServiceApi<Student>;
  componentStudentsMarks: StrapiEntityServiceApi<ComponentStudentsMarks>;
  constructor(private httpClient?: AxiosInstance) {
    this.adminPermission = new StrapiEntityServiceApi('admin::permission', this.httpClient);
    this.adminUser = new StrapiEntityServiceApi('admin::user', this.httpClient);
    this.adminRole = new StrapiEntityServiceApi('admin::role', this.httpClient);
    this.adminApiToken = new StrapiEntityServiceApi('admin::api-token', this.httpClient);
    this.uploadFile = new StrapiEntityServiceApi('plugin::upload.file', this.httpClient);
    this.i18NLocale = new StrapiEntityServiceApi('plugin::i18n.locale', this.httpClient);
    this.usersPermissionsPermission = new StrapiEntityServiceApi(
      'plugin::users-permissions.permission',
      this.httpClient
    );
    this.usersPermissionsRole = new StrapiEntityServiceApi('plugin::users-permissions.role', this.httpClient);
    this.usersPermissionsUser = new StrapiEntityServiceApi('plugin::users-permissions.user', this.httpClient);
    this.commentsComment = new StrapiEntityServiceApi('plugin::comments.comment', this.httpClient);
    this.commentsCommentReport = new StrapiEntityServiceApi('plugin::comments.comment-report', this.httpClient);
    this.mani = new StrapiEntityServiceApi('api::mani.mani', this.httpClient);
    this.student = new StrapiEntityServiceApi('api::student.student', this.httpClient);
    this.componentStudentsMarks = new StrapiEntityServiceApi('students.marks', this.httpClient);
  }
}
