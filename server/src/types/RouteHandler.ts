import { Request, Response } from 'express';
import { BaseDto } from '../dtos/Base.dto';
import { ResponseError } from './classes/ResponseError';


export type HandlerReturn = BaseDto | void | ResponseError;

export type RouteHandler = (req: Request, res: Response) => Promise<HandlerReturn>;
