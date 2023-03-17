import { Container, Heading, Text, Box, SimpleGrid } from "@chakra-ui/react"

export default function Dashboard() {
  const boxStyles = {
    p: "10px",
    bg: "purple.400",
    color: "white",
    m: "100px",
    textAlign: "center",
    ':hover': {
      color: "black",
      bg: "blue.200"
    }
  }

  return (
    <SimpleGrid columns={4} spacing={10} minChildWidth={"250px"}>

      <Box bg={"white"} h="200px" border="1px solid">
        <Text color={{base:'pink'}}>
          Hello
        </Text>
      </Box>
      <Box bg={"white"} h="200px" border="1px solid">Hii</Box>
      <Box bg={"white"} h="200px" border="1px solid">Hii</Box>
      <Box bg={"white"} h="200px" border="1px solid">Hii</Box>
      <Box bg={"white"} h="200px" border="1px solid">Hii</Box>
      <Box bg={"white"} h="200px" border="1px solid">Hii</Box>
      <Box bg={"white"} h="200px" border="1px solid">Hii</Box>
      <Box bg={"white"} h="200px" border="1px solid">Hii</Box>
      <Box bg={"white"} h="200px" border="1px solid">Hii</Box>
      <Box bg={"white"} h="200px" border="1px solid">Hii</Box>
      <Box bg={"white"} h="200px" border="1px solid">Hii</Box>
      <Box bg={"white"} h="200px" border="1px solid">Hii</Box>
    </SimpleGrid>
  )
}
