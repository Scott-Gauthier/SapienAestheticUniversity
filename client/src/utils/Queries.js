import { gql } from '@apollo/client';

export const QUERY_ALL_CONTENT = gql`
  {
    content {
      _id
      title
      description
      cost
      creator
      image
      quantity
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      _id
      username
      email
      savedContent { 
        contentId
        title
        description
        cost 
        creator
        image
        }
      }
    }
`;