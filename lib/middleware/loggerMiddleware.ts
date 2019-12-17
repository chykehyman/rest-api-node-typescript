import { Request, Response } from 'express';

const loggerMiddleware = (req: Request, resp: Response, next: any) => {
    console.info('Request logged: ', req.method, req.path);
    next();
};

export default loggerMiddleware;
