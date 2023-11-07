import { Request, Response, NextFunction } from 'express';

const auth = (req: Request, res: Response, next: NextFunction): void => {
  req.body.user = 'test';
  console.log('auth1 middleware executed. req.user:', req.body.user);
  next();
};

export default auth;
