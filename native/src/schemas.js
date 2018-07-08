import { schema } from 'normalizr'

export const roomSchema = new schema.Entity('rooms')
export const roomsSchema = new schema.Array(roomSchema)

export const moduleSchema = new schema.Entity('modules')
export const modulesSchema = new schema.Array(moduleSchema)

export const typeSchema = new schema.Entity('types')
export const typesSchema = new schema.Array(typeSchema)

export const ruleSchema = new schema.Entity('rules')
export const rulesSchema = new schema.Array(ruleSchema)

export const conditionSchema = new schema.Entity('conditions')
export const conditionsSchema = new schema.Array(conditionSchema)

roomSchema.define({ modules: modulesSchema })
moduleSchema.define({ type: typeSchema })
ruleSchema.define({ conditions: conditionsSchema })
conditionSchema.define({ module: moduleSchema, rule: ruleSchema })
