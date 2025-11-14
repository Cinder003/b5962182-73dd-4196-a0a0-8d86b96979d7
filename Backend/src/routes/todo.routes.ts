import { Router } from 'express';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../controller/todo.controller';
import validateRequest from '../middleware/validateRequest';
import {
  createTodoSchema,
  updateTodoSchema,
} from '../validation/todo.validation';

const router = Router();

router.get('/', getTodos);
router.post('/', validateRequest(createTodoSchema), createTodo);
router.patch('/:id', validateRequest(updateTodoSchema), updateTodo);
router.delete('/:id', deleteTodo);

export default router;