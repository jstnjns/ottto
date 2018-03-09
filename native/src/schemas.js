import { schema } from 'normalizr'

export const rule = new schema.Entity('rules')
export const rules = [ rule ]
export const condition = new schema.Entity('conditions')
export const conditions = [ condition ]

rule.define({ conditions })
condition.define({ rule })
