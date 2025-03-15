/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIncomeData = /* GraphQL */ `
  mutation CreateIncomeData(
    $condition: ModelIncomeDataConditionInput
    $input: CreateIncomeDataInput!
  ) {
    createIncomeData(condition: $condition, input: $input) {
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
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $condition: ModelUserProfileConditionInput
    $input: CreateUserProfileInput!
  ) {
    createUserProfile(condition: $condition, input: $input) {
      createdAt
      email
      id
      profileOwner
      updatedAt
      __typename
    }
  }
`;
export const deleteIncomeData = /* GraphQL */ `
  mutation DeleteIncomeData(
    $condition: ModelIncomeDataConditionInput
    $input: DeleteIncomeDataInput!
  ) {
    deleteIncomeData(condition: $condition, input: $input) {
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
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $condition: ModelUserProfileConditionInput
    $input: DeleteUserProfileInput!
  ) {
    deleteUserProfile(condition: $condition, input: $input) {
      createdAt
      email
      id
      profileOwner
      updatedAt
      __typename
    }
  }
`;
export const updateIncomeData = /* GraphQL */ `
  mutation UpdateIncomeData(
    $condition: ModelIncomeDataConditionInput
    $input: UpdateIncomeDataInput!
  ) {
    updateIncomeData(condition: $condition, input: $input) {
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
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $condition: ModelUserProfileConditionInput
    $input: UpdateUserProfileInput!
  ) {
    updateUserProfile(condition: $condition, input: $input) {
      createdAt
      email
      id
      profileOwner
      updatedAt
      __typename
    }
  }
`;
