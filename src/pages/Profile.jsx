import { TabList, TabPanels, Tabs,Tab } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt={"40px"} p="20px" colorScheme={"teal"}>
      <TabList>
          <Tab _selected={{color:'white',bg:"purple"}}>Account Info</Tab>
          <Tab _selected={{color:'white',bg:"purple"}}>Task History</Tab>
      </TabList>
      <TabPanels>

      </TabPanels>
    </Tabs>
  )
}
