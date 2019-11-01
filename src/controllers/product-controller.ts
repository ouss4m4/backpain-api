import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import { IProductQLAnswer } from "../../src/models/graphql-response.model";
export class ProductController {
  public async getProductsList(req: Request, res: Response) {
    let reqBody = `{
      products(first: 20) {
        edges {
          node {
            title
            description
            descriptionHtml
            featuredImage {
              originalSrc
              altText
            }
          }
        }
      }
    }
        
`;
    const qlResult = await axios.post<IProductQLAnswer>(
      "https://2-relieve-pain.myshopify.com/admin/api/2019-10/graphql.json",
      reqBody,
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
