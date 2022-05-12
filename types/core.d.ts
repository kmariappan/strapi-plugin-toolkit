import { EventEmitter } from "events"
import { HTTPMethod, Primitive, StringMap, TypeResult } from "./common"
import {
  StrapiContentTypeFullSchema,
  StrapiContentTypeSchema,
} from "./contentType"
import { OnlyStrings } from "./utils"

export type StrapiEvents =
  | `${"entry" | "media"}.${StrapiEventsCrudFlow}`
  | `entry.${StrapiEventsPublishFlow}`
type StrapiEventsCrudFlow = "create" | "update" | "delete"
type StrapiEventsPublishFlow = "publish" | "unpublish"

export type StrapiService = any
export type StrapiController = any
export type StrapiMiddleware = Object
export type StrapiContentType<T extends StrapiContentTypeSchema> = T
export type StrapiPolicy = Object
export type StrapiHook = Object

export type StrapiWebhook = {
  id?: string | number
  name: string
  type: string
  url: string
  headers: StringMap<string>
  events: StrapiEvents[]
  enabled: boolean
}
export type StrapiWebhookRunner = {
  config: StringMap<unknown>
  eventHub: EventEmitter
  listeners: Map<StrapiEvents, Function>
  logger: unknown
  queue: unknown
  webhooksMap: Map<StrapiEvents, StrapiWebhook[]>
}
export type StrapiWebhookStore = {
  createWebhook: (data: StrapiWebhook) => any
  deleteWebhook: (id) => any
  findWebhook: (id) => StrapiWebhook
  findWebhooks: () => StrapiWebhook[]
  updateWebhook: (data: StrapiWebhook) => any
}

export type StrapiPluginConfig<T> = TypeResult<T>

export type StrapiConfigContainer = StringMap<any> & {
  get: Function
}

export type StrapiStore = {
  get: <T extends string = string, U = unknown>({ key: T }) => U
  set: <T extends string = string, U = unknown>({ key: T, value: U }) => void
  delete: <T extends string = string>({ key: T }) => void
}

export type StrapiStoreQuery = {
  type: string
  name?: string
}

type AndWhereOperator<T> = { $and: T[] }
type OrWhereOperator<T> = { $or: T[] }

type PopulateClause<TKeys extends string = string> =
  | Partial<Record<TKeys, boolean | Array<string> | StringMap<unknown>>>
  | Array<TKeys>
  | boolean

export type StrapiAdmin = any

export type StrapiLog = {
  log: Function
  error: Function
  warn: Function
}

export type StrapiRoute = {
  method: HTTPMethod
  path: string
  handler: string
  config: StrapiRouteConfig
}

export type StrapiRouteConfig = {
  policies: Array<string>
  description?: string
  tag?: StrapiRouteConfigTag
  auth: boolean
}

export type StrapiRouteConfigTag = {
  plugin: string
  name?: string
  actionType?: string
}

export type StrapiAdminUser = any
