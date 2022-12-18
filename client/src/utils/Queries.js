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

// export const QUERY_USER = gql`
// query getUser {
//   AllUser {
//       _id
//       username
//       email
//       }
//     }
// `;