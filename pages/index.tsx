import { Box, Center, Spacer, Stack } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import NavBar from "../component/navbar"
import Disconnected from '../component/disconnected'
import { useWallet } from "@solana/wallet-adapter-react"
import Connected from "../component/connected"
import WalletContextProvider from "../component/WalletContextProvider"

const Home: NextPage = () => {
  const {connected} = useWallet()

  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors</title>
        <meta name="The NFT Collection for Buildoors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="full"
        h="auto"
        position={"relative"}
        boxSizing="border-box"
        overflow-x={"hidden"}
        bgImage={"url(./Assets/home-background.svg)"}
        backgroundPosition="center"
        backgroundSize={"cover"}
        
      >
        <Stack w="full" h="calc(100vh)" justify="center">
            { /* NavBar */ }
          <NavBar/>  

          <Spacer />
          <Center>
            {/* <Disconnected/> */}
						{ connected ? <Connected /> : <Disconnected /> }
          </Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/_buildspace"
                target="_blank"
                rel="noopener noreferrer"
              >
                built with @_buildspace
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  )
}

export default Home