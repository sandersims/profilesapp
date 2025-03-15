import { React, useState, useEffect } from "react";
import {
  Button,
  Heading,
  Flex,
  View,
  Grid,
  Divider,
} from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";
import config from './aws-exports.js';
import Papa from 'papaparse';
/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://o2eeswvizzgfvms42acybo5nmi.appsync-api.eu-north-1.amazonaws.com/graphql',
      region: 'eu-north-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-ifq64*********************'
    }
  }
});

Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

function CsvUploader() {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async function (results) {
        const records = results.data;

        for (const record of records) {
          const input = {
            institution: record["institution"],
            structuralUnit: record["structuralUnit"],
            position: record["position"],
            firstName: record["firstName"],
            lastName: record["lastName"],
            workload: record["workload"],
            basicSalary: parseFloat(record["salary"]),
          };

          try {
            await API.graphql(graphqlOperation(createOfficialMutation, { input }));
            console.log("Uploaded:", input);
          } catch (err) {
            console.error("Upload failed for:", input, err);
          }
        }

        alert("CSV upload complete!");
      }
    });
  }}

export default function App() {
  const [userprofiles, setUserProfiles] = useState([]);
  const { signOut } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  async function fetchUserProfile() {
    const { data: profiles } = await client.models.UserProfile.list();
    setUserProfiles(profiles);
  }

  return (
    <Flex
      className="App"
      justifyContent="center"
      alignItems="center"
      direction="column"
      width="70%"
      margin="0 auto"
    >
      <Heading level={1}>My Profile</Heading>

      <Divider />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Upload Officials CSV</h2>
        <input type="file" accept=".csv" onChange={handleFileUpload} />
      </div>

      <Grid
        margin="3rem 0"
        autoFlow="column"
        justifyContent="center"
        gap="2rem"
        alignContent="center"
      >
        {userprofiles.map((userprofile) => (
          <Flex
            key={userprofile.id || userprofile.email}
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="2rem"
            border="1px solid #ccc"
            padding="2rem"
            borderRadius="5%"
            className="box"
          >
            <View>
              <Heading level="3">{userprofile.email}</Heading>
            </View>
          </Flex>
        ))}
      </Grid>
      <Button onClick={signOut}>Sign Out</Button>
    </Flex>
    
  );
}