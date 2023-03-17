import { Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Navarbar from "../Components/Navarbar"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6,1fr)">
      <GridItem as={"aside"}
        colSpan={{base:6,lg:2,xl:1}}
        bg={"purple.400"}
        minH={"100vh"}>
        <span>Sidebar</span>
      </GridItem>
      <GridItem
        as={"main"}
        colSpan="5"
        p={"40px"}>
        <Navarbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
