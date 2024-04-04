import { FC } from "react"
import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const Connected: FC = () => {
  return (
    <VStack spacing={20}>
      <Container>
        <VStack spacing={8}>
          <Heading
            color="white"
            as="h1"
            size="2xl"
            noOfLines={1}
            textAlign="center"
          >
            Welcome Buildoor.
          </Heading>

          <Text color="bodyText" fontSize="xl" textAlign="center">
            Each buildoor is randomly generated and can be staked to receive
            <Text as="b"> $BLD</Text> Use your <Text as="b"> $BLD</Text> to
            upgrade your buildoor and receive perks within the community!
          </Text>
        </VStack>
      </Container>

      <HStack spacing={2} display="flex" flexFlow="row wrap" height="auto">
        <Image src="./Assets/avatar1.png" alt="avatar1" width="200px"/>
        <Image src="./Assets/avatar2.png" alt="avatar2" width="200px"/>
        <Image src="./Assets/avatar3.png" alt="avatar3" width="200px"/>
        <Image src="./Assets/avatar4.png" alt="avatar4" width="200px"/>
        <Image src="./Assets/avatar5.png" alt="avatar5" width="200px"/>
      </HStack>

      <Button bgColor="accent" color="white" maxW="380px">
        <HStack>
          <Text>mint buildoor</Text>
          <ArrowForwardIcon />
        </HStack>
      </Button>
    </VStack>
  )
}

export default Connected