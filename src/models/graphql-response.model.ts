export interface IProductQLAnswer {
  data: {
    products: {
      edges: ISingleProductInfo[];
    };
  };
}

export interface IProductDetailsQLAnswer {
  data: {
    product: IProductDetails;
  };
}
export interface ISingleProductInfo {
  node: {
    id: string;
    title: string;
    description: string;
    descriptionHtml: string;
    featuredImage: {
      originalSrc: string;
      altText: string;
    };
  };
}

export interface IProductDetails {
  title: string;
  totalVariants: string;
  variants: {
    edges: {
      node: {
        displayName: string;
        title: string;
        price: string;
      };
    }[];
  };
  options: {
    id: string;
  }[];
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  productType: string;
  handle: string;
  description: string;
  featuredImage: {
    id: string;
    originalSrc: string;
  };
  images: {
    edges: {
      node: {
        originalSrc: string;
        altText: string;
      };
    }[];
  };
}

export interface ICollectionQlAnswer {
  data: {
    collections: {
      edges: ICollection[];
    };
  };
}

interface ICollection {
  node: {
    id: string;
    title: string;
  };
}
