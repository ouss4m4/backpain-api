import { Request, Response } from "express";
import axios from "axios";
import { IProductQLAnswer, IProductDetailsQLAnswer } from "../../models/graphql-response.model";
import { productListQuery, productDetailQuery } from "./product-queries";
export class ProductController {
  public async getProductByID(req: Request, res: Response) {
    let query = productDetailQuery(req.query.id);
    const qlResult = await axios.post<IProductDetailsQLAnswer>(
      "https://2-relieve-pain.myshopify.com/admin/api/2019-10/graphql.json",
      query,
      {
        headers: {
          "content-type": "application/graphql",
          "X-Shopify-Access-Token": "6cd1218fa4d12785cb7c665a123f0a9c"
        }
      }
    );
    res.status(200).send(qlResult.data.data.product);
  }

  public async getProductsList(req: Request, res: Response) {
    let query = productListQuery("10");
    const qlResult = await axios.post<IProductQLAnswer>(
      "https://2-relieve-pain.myshopify.com/admin/api/2019-10/graphql.json",
      query,
      {
        headers: {
          "content-type": "application/graphql",
          "X-Shopify-Access-Token": "6cd1218fa4d12785cb7c665a123f0a9c"
        }
      }
    );
    res.status(200).send(qlResult.data.data.products.edges);
  }
}
