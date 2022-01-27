import { Request, Response } from "express";

type ControllerFunction = (request: Request, response: Response) => Promise<Response>

export type Controller = {
  index: ControllerFunction
  show: ControllerFunction
  store: ControllerFunction
  update: ControllerFunction
  delete: ControllerFunction
}