import { Request, Response } from "express";
import axios from "axios";
import {
  IProductQLAnswer,
  IProductDetailsQLAnswer,
  ICollectionQlAnswer
} from "../../models/graphql-response.model";
import {
  productListQuery,
  productDetailQuery,
  collectionsQuery,
  collectionProductsQuery
} from "./product-queries";
import { vars } from "../../utils/consts";

export class ProductController {
  public async getProductByID(req: Request, res: Response) {
    let query = productDetailQuery(req.query.id);
    const qlResult = await axios.post<IProductDetailsQLAnswer>(
      vars.baseUrl,
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
    const qlResult = await axios.post<IProductQLAnswer>(vars.baseUrl, query, {
      headers: {
        "content-type": "application/graphql",
        "X-Shopify-Access-Token": "6cd1218fa4d12785cb7c665a123f0a9c"
      }
    });
    res.status(200).send(qlResult.data.data.products.edges);
  }

  public async getCollectionProducts(req: Request, res: Response) {
    let query = collectionProductsQuery(req.params.id);
    const qlResult = await axios.post<IProductQLAnswer>(vars.baseUrl, query, {
      headers: {
        "content-type": "application/graphql",
        "X-Shopify-Access-Token": "6cd1218fa4d12785cb7c665a123f0a9c"
      }
    });
    res.status(200).send(qlResult.data.data.products.edges);
  }

  public async getCollectionsList(req: Request, res: Response) {
    let query = collectionsQuery(req.query.qts);

    const qlResult = await axios.post<ICollectionQlAnswer>(
      vars.baseUrl,
      query,
      {
        headers: {
          "content-type": "application/graphql",
          "X-Shopify-Access-Token": "6cd1218fa4d12785cb7c665a123f0a9c"
        }
      }
    );
    res.status(200).send(qlResult.data.data.collections.edges);
  }
}
