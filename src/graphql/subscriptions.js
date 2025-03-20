/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIncomeData = /* GraphQL */ `
  subscription OnCreateIncomeData(
    $filter: ModelSubscriptionIncomeDataFilterInput
  ) {
    onCreateIncomeData(filter: $filter) {
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
export const onUpdateIncomeData = /* GraphQL */ `
  subscription OnUpdateIncomeData(
    $filter: ModelSubscriptionIncomeDataFilterInput
  ) {
    onUpdateIncomeData(filter: $filter) {
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
export const onDeleteIncomeData = /* GraphQL */ `
  subscription OnDeleteIncomeData(
    $filter: ModelSubscriptionIncomeDataFilterInput
  ) {
    onDeleteIncomeData(filter: $filter) {
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
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onCreateUserProfile(filter: $filter) {
      id
      email
      profileOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onUpdateUserProfile(filter: $filter) {
      id
      email
      profileOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onDeleteUserProfile(filter: $filter) {
      id
      email
      profileOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
