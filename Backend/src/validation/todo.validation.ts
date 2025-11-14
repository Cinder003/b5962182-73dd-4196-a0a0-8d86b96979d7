import { z } from 'zod';

export const createTodoSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }).min(1, 'Title cannot be empty'),
  }),
});

export const updateTodoSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Title cannot be empty').optional(),
    completed: z.boolean().optional(),
  }),
  params: z.object({
    id: z.string({
      required_error: 'Todo ID is required',
    }),
  }),
});