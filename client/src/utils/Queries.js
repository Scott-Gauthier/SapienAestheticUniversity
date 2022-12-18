import { gql } from '@apollo/client';

export const QUERY_ALL_CONTENT = gql`
 query getAllContent {
    AllContent {
      _id
      title
      description
      cost
      image
      video
      # creator
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($content: [ID]!) {
    checkout(content: $content) {
      session
    }
  }
`;

export const GET_USER = gql`
query getUser {
  getUser {
      _id
      username
      email
      studentcontent
      }
    }
`;