import { gql } from '@apollo/client';

export const GET_AUTHENTICATED_USER= gql`
  query GetAuthenticatedUser {
    authUser {
     _id
     username
     name
     profilePic
    }
  }
`;
export const GET_USER_AND_TRANSACTIONS=gql`
  query GetUserAndTransactions($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      name
      profilePic
      transactions {
        _id
        amount
        category
        description
        date
        paymentType
        location
      }
    }
  }
`;
