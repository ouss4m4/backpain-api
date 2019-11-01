import { Request, Response } from "express";

export class ErrorHandler {
  public handle(handler: any) {
    return async (req: Request, res: Response) => {
      try {
        await handler(req, res);
      } catch (ex) {
        this.catchError(ex, req, res);
      }
    };
  }

  public catchError(err: any, req: Request, res: Response) {
    console.log("error request", req.url);
    res.status(500).send(err);
  }
}
