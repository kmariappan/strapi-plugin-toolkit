import { EntityAbstractServiceType } from "../../types"

export const entityController = ({ strapi }: any) => ({
  getEntityAbstractService(): EntityAbstractServiceType {
    return strapi.plugin("presentation").service("entityAbstractService")
  },

  async index() {
    return this.getEntityAbstractService().getWelcomeMessage()
  },

  async getEntities(ctx: any) {
    const { params = {}, query } = ctx
    return await this.getEntityAbstractService().findMany(
      params.collectionName,
      query
    )
  },

  async getEntityById(ctx: any) {
    const { params = {}, query } = ctx
    return await this.getEntityAbstractService().findOne(
      params.collectionName,
      params.id,
      query
    )
  },

  async createEntity(ctx: any) {
    const { params = {}, request } = ctx
    const { body = {} } = request
    return await this.getEntityAbstractService().create(
      params.collectionName,
      body
    )
  },

  async updateEntity(ctx: any) {
    const { params = {}, request } = ctx
    const { body = {} } = request
    return this.getEntityAbstractService().update(
      params.collectionName,
      params.id,
      body
    )
  },

  async deleteEntity(ctx: any) {
    const { params = {} } = ctx
    return await this.getEntityAbstractService().delete(
      params.collectionName,
      params.id
    )
  },
})
