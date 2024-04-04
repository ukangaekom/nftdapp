import { AppProps } from "next/app"
import { ChakraProvider, } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import WalletContextProvider from "../component/WalletContextProvider"



// define colors to use in the dapp pages

const colors = {
    background: "#05014a",
    accent: "#833BBE",
    bodyText:"rgba(255, 255, 255, 0.75)"
}


// define the theme and add the color objects

const theme = extendTheme({ colors })

function MyApp({Component, pageProps}:AppProps) {

    return (
        <ChakraProvider theme={theme}>
            <WalletContextProvider>
                <Component {...pageProps} />
            </WalletContextProvider>
        </ChakraProvider>
    )
    
}


export default MyApp