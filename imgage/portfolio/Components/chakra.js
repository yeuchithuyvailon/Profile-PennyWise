import { 
    ChakraProvider, 
    cookiesStorageManagerSSR, 
    localStorageManager 
} from '@chakra-ui/react'
import theme from '../lib/theme'

export default function Chakra ({ cookies , children})  { 
    const colorModeManager = 
    typeof cookies === 'string'
    ? cookiesStorageManagerSSR(cookies)
    :localStorageManager




    return ( 
        <ChakraProvider theme={theme} colorModeManager={colorModeManager} >
            {children}
        </ChakraProvider> 
    )
}

export async function getServerSideProps ({ req })  { 
    return { 
        props:  { 
            cookies: req.headers.cookies ?? '' 
        }
    }
}




