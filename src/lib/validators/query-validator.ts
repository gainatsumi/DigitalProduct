import { z } from 'zod'

export const QueryValidator = z.object({
  category: z.string().optional(),
  sort: z.enum(['asc', 'desc']).optional(),
  limit: z.number().optional(),
  name: z.string().optional(),
})

export type TQueryValidator = z.infer<typeof QueryValidator>
