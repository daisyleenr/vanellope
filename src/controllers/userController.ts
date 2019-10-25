import { Request, Response, NextFunction } from 'express';

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  res.send({ users: [] });
};
