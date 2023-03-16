import {Container, Heading ,Text,Box} from "@chakra-ui/react"

export default function Dashboard() {
  const boxStyles={
      p:"10px",
      bg:"purple.400",
      color:"white",
      m:"100px",
      textAlign:"center",
      ':hover':{
        color:"black",
        bg:"blue.200"
      }
  }

  return (
    <Container as="section" maxWidth={"4xl"} py="20px">
      <Heading>I am Prabesh Bista.</Heading>
      <Text color={"red.500"} fontWeight={"bold"}>Ea sit elit tempor mollit ex esse dolor amet.</Text>
      <Box cursor={"pointer"}  sx={boxStyles}>
        <Text>This is a Box!</Text>
      </Box>
    </Container>
  )
}
