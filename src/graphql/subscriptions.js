/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIncomeData = /* GraphQL */ `
  subscription OnCreateIncomeData(
    $filter: ModelSubscriptionIncomeDataFilterInput
    $profileOwner: String
  ) {
    onCreateIncomeData(filter: $filter, profileOwner: $profileOwner) {
      createdAt
      firstName
      id
      institution
      lastName
      position
      profileOwner
      salary
      structuralUnit
      updatedAt
      workload
      __typename
    }
  }
`;
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $profileOwner: String
  ) {
    onCreateUserProfile(filter: $filter, profileOwner: $profileOwner) {
      createdAt
      email
      id
      profileOwner
      updatedAt
      __typename
    }
  }
`;
export const onDeleteIncomeData = /* GraphQL */ `
  subscription OnDeleteIncomeData(
    $filter: ModelSubscriptionIncomeDataFilterInput
    $profileOwner: String
  ) {
    onDeleteIncomeData(filter: $filter, profileOwner: $profileOwner) {
      createdAt
      firstName
      id
      institution
      lastName
      position
      profileOwner
      salary
      structuralUnit
      updatedAt
      workload
      __typename
    }
  }
`;
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $profileOwner: String
  ) {
    onDeleteUserProfile(filter: $filter, profileOwner: $profileOwner) {
      createdAt
      email
      id
      profileOwner
      updatedAt
      __typename
    }
  }
`;
export const onUpdateIncomeData = /* GraphQL */ `
  subscription OnUpdateIncomeData(
    $filter: ModelSubscriptionIncomeDataFilterInput
    $profileOwner: String
  ) {
    onUpdateIncomeData(filter: $filter, profileOwner: $profileOwner) {
      createdAt
      firstName
      id
      institution
      lastName
      position
      profileOwner
      salary
      structuralUnit
      updatedAt
      workload
      __typename
    }
  }
`;
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $profileOwner: String
  ) {
    onUpdateUserProfile(filter: $filter, profileOwner: $profileOwner) {
      createdAt
      email
      id
      profileOwner
      updatedAt
      __typename
    }
  }
`;
