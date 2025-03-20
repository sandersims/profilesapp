/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIncomeData = /* GraphQL */ `
  mutation CreateIncomeData(
    $input: CreateIncomeDataInput!
    $condition: ModelIncomeDataConditionInput
  ) {
    createIncomeData(input: $input, condition: $condition) {
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
export const updateIncomeData = /* GraphQL */ `
  mutation UpdateIncomeData(
    $input: UpdateIncomeDataInput!
    $condition: ModelIncomeDataConditionInput
  ) {
    updateIncomeData(input: $input, condition: $condition) {
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
export const deleteIncomeData = /* GraphQL */ `
  mutation DeleteIncomeData(
    $input: DeleteIncomeDataInput!
    $condition: ModelIncomeDataConditionInput
  ) {
    deleteIncomeData(input: $input, condition: $condition) {
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
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
      id
      email
      profileOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
      id
      email
      profileOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
      id
      email
      profileOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
