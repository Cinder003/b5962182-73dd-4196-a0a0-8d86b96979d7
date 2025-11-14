import { Request, Response } from 'express';
import prisma from '../config/db.config';
import logger from '../utils/logger';
import { Prisma } from '@prisma/client';

export const getTodos = async (req: Request, res: Response) => {
  try {
    const { status, search } = req.query;

    const where: Prisma.TodoWhereInput = {};

    if (status === 'active') {
      where.completed = false;
    } else if (status === 'completed') {
      where.completed = true;
    }

    if (search && typeof search === 'string') {
      where.title = {
        contains: search,
        mode: 'insensitive',
      };
    }

    const todos = await prisma.todo.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.status(200).json(todos);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: 'Error fetching todos' });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const newTodo = await prisma.todo.create({
      data: {
        title,
      },
    });
    res.status(201).json(newTodo);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: 'Error creating todo' });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: {
        title,
        completed,
      },
    });
    res.status(200).json(updatedTodo);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: 'Error updating todo' });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.todo.delete({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: 'Error deleting todo' });
  }
};