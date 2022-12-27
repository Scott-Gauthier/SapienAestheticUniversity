import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const SAVE_CONTENT = gql`
  mutation saveContent($id: String!) {
    saveContent(id: $id) {
      username
      email
      studentcontent {
        _id
        title
        description
        cost
        image
        video
      }
    }
  }
`;

export const REMOVE_CONTENT = gql`
   mutation removeContent($contentId: String!) {
     removeContent(contentId: $contentId) {
      username
      email
      studentcontent {
          title
          description
          cost
          image
          video
          creator
       }
     }
   }
`;

