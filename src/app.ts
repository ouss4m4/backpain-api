import express, { Application, Request, Response, NextFunction } from "express";
import { ProductRoute } from "./routes/products";

class App {
  public app: express.Application;
  public productRoute: ProductRoute = new ProductRoute();
  constructor() {
    this.app = express();
    this.config();
    this.productRoute.routes(this.app);
  }

  private config(): void {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH,DELETE"
      );
      next();
    });

    this.app.use((req, res, next) => {
      express.json()(req, res, err => {
        if (err) {
          console.error(err);
          return res.sendStatus(400);
        }

        next();
      });
    });
    this.app.get("/", (req, res) => {
      res.status(200).send("hello world");
    });
  }
}

export default new App().app;
