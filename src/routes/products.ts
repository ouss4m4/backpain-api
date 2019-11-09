import { Request, Response, Application } from "express";
import { ProductController } from "../controllers/productControllers/product-controller";
import { ErrorHandler } from "../middlewares/errorHandler";

export class ProductRoute {
  public productController = new ProductController();
  public errorHandler: ErrorHandler = new ErrorHandler();
  constructor() {}
  public routes(app: Application): void {
    // fetch all products list
    app
      .route("/products")
      .get((req, res) => this.productController.getProductsList(req, res));
    app
      .route("/product")
      .get((req, res) => this.productController.getProductByID(req, res));
    app.route("/products/collections")
    .get((req,res )=> this.productController.getCollectionsList(req, res));
  }
}
