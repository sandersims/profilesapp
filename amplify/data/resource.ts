import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { postConfirmation } from "../auth/post-confirmation/resource";

const schema = a
  .schema({
    UserProfile: a
      .model({
        email: a.string(),
        profileOwner: a.string(),
      })
      .authorization((allow) => [
        allow.ownerDefinedIn("profileOwner"),
      ]),

      IncomeData: a
        .model({
          institution: a.string(),
          structuralUnit: a.string(),
          position: a.string(),
          firstName: a.string(),
          lastName: a.string(),
          workload: a.float(),
          salary: a.integer(),
        })
        .authorization((allow) => [
          allow.ownerDefinedIn("profileOwner"),
        ]),
  })
  .authorization((allow) => [allow.resource(postConfirmation)]);
export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});