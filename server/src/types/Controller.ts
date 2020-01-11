import express from 'express';

export type ControllerFunc<T> = (req: express.Request) => Promise<T>;
