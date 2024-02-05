"use client";

import { Heading, Box, Text, Center } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import MintForm from "@/components/MintForm";

export default function Home() {
  const { connected } = useWallet();

  return (
    <main>
      <Box as="section" bg="#2496b1" color="white" pb="4em" pt="1em">
        <Center>
          <Heading fontSize="6em">NFT Minter</Heading>
        </Center>
        <Center>
          <Text pt="1em" fontSize="2em">
            Oh nice...another minter?
          </Text>
        </Center>
      </Box>
      <Box pt="2em">{connected ? <MintForm /> : ""}</Box>
    </main>
  );
}
