/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIncomeData = /* GraphQL */ `
  query GetIncomeData($id: ID!) {
    getIncomeData(id: $id) {
      id
      firstName
      lastName
      position
      institution
      structuralUnit
      salary
      workload
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listIncomeData = /* GraphQL */ `
  query ListIncomeData(
    $filter: ModelIncomeDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIncomeData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        position
        institution
        structuralUnit
        salary
        workload
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      id
      email
      profileOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        profileOwner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
