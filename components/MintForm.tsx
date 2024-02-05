import { Box, Center, Text, Button } from "@chakra-ui/react";

export default function MintForm() {
  return (
    <Box>
      <Center>
        <Text>Hi! Your wallet has been connected.</Text>
      </Center>
      <Box>
        <Button colorScheme="orange">Create new Token Account</Button>
      </Box>
    </Box>
  );
}
