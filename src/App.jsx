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
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";
{/*import CsvUploader from './CsvUploader';*/}
import awsconfig from './aws-exports';
import DataTable from './DataTable';
import { API, graphqlOperation } from 'aws-amplify';
import { listIncomeData } from './graphql/queries';
/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

Amplify.configure({ ...awsconfig, ...outputs });

const client = generateClient();

const listIncomeDataQuery = /* GraphQL */ `
  query ListIncomeData {
    listIncomeData {
      items {
        id
        institution
        structuralUnit
        position
        firstName
        lastName
        workload
        basicSalary
      }
    }
  }
`;

export default function App() {
  const [userprofiles, setUserProfiles] = useState([]);
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [officials, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserProfile();
    const fetchOfficials = async () => {
      try {
        const result = await API.graphql(graphqlOperation(listIncomeDataQuery));
        const items = result.data.listIncomeData.items;
        setIncomeData(items);
      } catch (error) {
        console.error('Error fetching officials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOfficials();
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
      {/*<CsvUploader />*/}
      <DataTable data={officials} />;

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