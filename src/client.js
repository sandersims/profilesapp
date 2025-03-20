// src/client.js
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { generateClient } from "aws-amplify/api";

Amplify.configure(awsconfig);
export const client = generateClient();
