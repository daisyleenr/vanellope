import { Request, Response, NextFunction } from 'express';

export const getMoods = (req: Request, res: Response, next: NextFunction) => {
  res.send({ moods: [] });
};
