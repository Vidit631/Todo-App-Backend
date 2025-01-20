import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany({ orderBy: { id: 'desc' } });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  const { title, color } = req.body;

  try {
    const newTask = await prisma.task.create({
      data: { title, color, completed: false },
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;

  try {
    const updatedTask = await prisma.task.update({
      where: { id: Number(id) },
      data: {
        title,
        color,
        completed,
      },
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.task.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

export default router;