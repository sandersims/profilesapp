import { a, type ClientSchema } from "@aws-amplify/backend";

const schema = a.schema({
  UserProfile: a.model({
    email: a.string(),
    profileOwner: a.string(),
  }),
  IncomeData: a.model({
    institution: a.string(),
    structuralUnit: a.string(),
    position: a.string(),
    firstName: a.string(),
    lastName: a.string(),
    workload: a.float(),
    salary: a.integer(),
    profileOwner: a.string(),
  }),
});

export type Schema = ClientSchema<typeof schema>;
export const clientSchema = schema;
