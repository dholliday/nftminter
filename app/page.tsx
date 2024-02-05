import Image from "next/image";
import styles from "./page.module.css";
import {
  CircularProgress,
  CircularProgressLabel,
  Heading,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Heading>NFT Minter</Heading>
    </main>
  );
}
