import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

const GET_USERS = gql`
  {
    users {
      id
      userName
      email
    }
  }
`;
export default function useUsers(): any {
  const { data, loading, error } = useQuery(GET_USERS);
  return { data, loading, error };
}
