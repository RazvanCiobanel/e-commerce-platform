import { gql } from "@apollo/client";

const GET_NAMES_QUERY = gql`
  query categories {
    categories {
      name
    }
  }
`;

const GET_PRODUCT_QUERY = gql`
  query product($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
`;

const GET_CURRENCY_QUERY = gql`
  query currencies {
    currencies {
      label
      symbol
    }
  }
`;

const GET_CATEGORY_QUERY = gql`
  query category($input: CategoryInput) {
    category(input: $input) {
      name
      products {
        id
        name
        inStock
        gallery
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;

export {
  GET_PRODUCT_QUERY,
  GET_CURRENCY_QUERY,
  GET_CATEGORY_QUERY,
  GET_NAMES_QUERY,
};
