import { Request, Response } from 'express';

export const getData = (req: Request, res: Response): void => {
  // in typescript you directly modify the request object, use body instead
  // you can directly do so, if you are declaring req: any
  res.send('This is a basic Example for Express.js with user ' + req.body.user);
};

export const createData = (req: Request, res: Response): void => {
  res.json({ message: 'Data created successfully' });
};
