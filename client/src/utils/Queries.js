import { gql, useQuery } from '@apollo/client';

export const QUERY_ALL_CONTENT = gql`
 query getAllContent {
    AllContent {
      id
      title
      description
      cost
      image
      video
      creator
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