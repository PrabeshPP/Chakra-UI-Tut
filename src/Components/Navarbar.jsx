import { Flex,Box, Heading,Text, Button, Spacer, HStack } from '@chakra-ui/react'
import React from 'react'

const Navarbar = () => {
  return (
    <Flex as={"nav"} p={"10px"} alignItems={"center"}>
        <Heading as={"h1"}>Prabesh Tasks</Heading>
        <Spacer/>
        <HStack spacing={"20px"}>
        <Box bg={"gray.200"} p="10px">M</Box>
        <Text>demo@gmail.com</Text>
        <Button colorScheme={"purple"}>Logout</Button>
        </HStack>
    </Flex>
  )
}

export default Navarbar