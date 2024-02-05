"use client";

import Image from "next/image";
import { Heading, Box, Text, Center } from "@chakra-ui/react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";

export default function Home() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

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
    </main>
  );
}
