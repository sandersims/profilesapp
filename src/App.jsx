import { useState, useEffect } from "react";
import {
  Heading,
  Flex,
  View,
  Grid,
  Divider,
} from "@aws-amplify/ui-react";
import { listIncomeData, listUserProfiles } from "./graphql/queries";
import { client } from "./client"; // ✅ your generated client
import DataTable from "./DataTable";

export default function App() {
  const [userprofiles, setUserProfiles] = useState([]);
  const [officials, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserProfile();
    fetchIncomeData();
  }, []);

  async function fetchUserProfile() {
    try {
      const result = await client.graphql({ query: listUserProfiles });
      const profiles = result.data?.listUserProfiles?.items || [];
      console.log("Fetched UserProfiles:", profiles);
      setUserProfiles(profiles);
    } catch (error) {
      console.error("Error fetching UserProfiles:", error);
    }
  }

  async function fetchIncomeData() {
    try {
      const result = await client.graphql({ query: listIncomeData });
      const data = result.data?.listIncomeData?.items || [];
      console.log("Fetched IncomeData:", data);
      setIncomeData(data);
    } catch (error) {
      console.error("Error fetching IncomeData:", error);
    } finally {
      setLoading(false);
    }
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
      <DataTable data={officials} />

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
    </Flex>
  );
}
