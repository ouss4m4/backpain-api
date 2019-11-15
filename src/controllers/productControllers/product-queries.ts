export const productListQuery = (qts: string): string => {
  return `{
        products(first: ${qts}) {
            edges {
                node {
                    id
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
    }`;
};

export const collectionsQuery = (qts: string): string => {
  return ` {
    collections(first: ${qts}){
      edges{
        node{
          id
          title
        }
      }
    }
  }`;
};
export const productDetailQuery = function(id: string): string {
  return `{
    product(id: "${id}") {
      title
      totalVariants
      variants(first: 3){
        edges{
          node{
            displayName
            title
            price
          }
        }
      }
      options {
        id
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      productType
      tracksInventory
      
      handle
      description
      featuredImage {
        id
        originalSrc
      }
      images(first: 10) {
        edges {
          node {
            originalSrc
            altText
          }
        }
      }
      feedback {
        summary
        details {
          messages {
            message
          }
        }
      }
    }
  }`;
};

export const collectionProductsQuery = (id: string) => {
  return `
  {
    collection(id: "${id}"){
      products(first: 20){
        edges{
          node{
            title
          }
        }
      }
    }
  }
  `;
};
