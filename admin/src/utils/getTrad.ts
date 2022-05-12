import { pluginId } from "../pluginId"

import { AnyType } from "../../../types/common"

export const getTrad = (id: AnyType) => `${pluginId}.${id}`
