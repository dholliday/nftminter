"use client";

import { HStack, Spacer, Text } from "@chakra-ui/react";
import { FC } from "react";
import dynamic from "next/dynamic";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  {}
);

const NavBar: FC = () => {
  return (
    <HStack width="full" padding={8} bg="#2496b1">
      <Spacer />
      <WalletMultiButtonDynamic />
    </HStack>
  );
};

export default NavBar;
