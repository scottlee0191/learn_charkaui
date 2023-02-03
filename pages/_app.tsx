import '@/styles/globals.css'
import {AppProps} from 'next/app'
import './font.css'
import {theme as base, withDefaultColorScheme, withDefaultVariant} from "@chakra-ui/react";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {ThemeConfig} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
}

const inputStyle = {
    variants: {
        filled: {
            field: {
                _focus: {
                    borderColor: 'brand.500'
                }
            }
        }
    },
    sizes: {
        md: {
            field: {
                borderRadius: 'none'
            }
        }
    }
};
const theme = extendTheme({
        config, colors: {
            brand: {
                50: '#f5fee5',
                100: '#e1fbb2',
                200: '#cdf781',
                300: '#b8ee56',
                400: '#a2e032',
                500: '#8ac919',
                600: '#71ab09',
                700: '#578602',
                800: '#3c5e00',
                900: '#203300',
            }
        },
        components: {
            Button: {
                variants: {
                    primary: (props:any) => ({
                        rounded: 'none',
                        backgroundColor: mode('brand.500', 'brand.200')(props),
                        _focus: {
                            backgroundColor: mode('brand.700', 'brand.400')(props)
                        },
                        _hover: {
                            backgroundColor: mode('brand.600', 'brand.300')(props)
                        },
                        color: mode('white', 'gray.900')(props)
                    })
                }
            },
            Input: inputStyle,
            Select: inputStyle,
            Checkbox: {
                baseStyle: {
                    control: {
                        borderRadius: 'none',
                        _focus: {
                            ring: 2,
                            ringColor: 'brand.500'
                        }
                    }
                }
            }
        },
        fonts: {
            heading: `Montserrat, ${base.fonts?.heading}`,
            body: `Inter, ${base.fonts?.body}`
        },
    }, withDefaultColorScheme({
        colorScheme: 'brand', components: ['Checkbox']
    }), withDefaultVariant({
        variant: 'filled',
        components: ['Input', 'Select']
    })
)

export default function App({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}


