import {Box, Button, Divider, Heading, HStack, Text, useColorMode, useColorModeValue, VStack} from "@chakra-ui/react";
import Image from "next/image";

export default function Cart() {
    const {toggleColorMode} = useColorMode()
    const bg = useColorModeValue('gray.100', 'gray.900')
    return <VStack w="full" minH="full" p="40px" bg={bg} spacing={4}>
        <VStack align='flex-start'>
            <Heading>Your cart</Heading>
            <Text>If price is too hard on your eyes, <Button variant='link' colorScheme='black'
                                                             onClick={toggleColorMode}>try changing the theme.</Button></Text>
        </VStack>
        <HStack justify='space-between' w='full' direction={['column-reverse', 'column-reverse', 'row']}>
            <Image src='/imgs/product.png' alt='product' width='96' height='96'/>
            <Box flexGrow={1} mx={4}>
                <Text fontWeight={700}>Penny board</Text>
                <Text>PNYCOMP27541</Text>
            </Box>
            <Text fontWeight={700}>$119.00</Text>
        </HStack>
        <HStack justify='space-between' w='full'>
            <Text>Subtotal</Text>
            <Text fontWeight={700}>$119.00</Text>
        </HStack>
        <HStack justify='space-between' w='full'>
            <Text>Shipping</Text>
            <Text fontWeight={700}>$119.00</Text>
        </HStack>
        <HStack justify='space-between' w='full'>
            <Text>Taxes (estimated)</Text>
            <Text fontWeight={700}>$119.00</Text>
        </HStack>
        <Divider/>
        <HStack justify='space-between' w='full'>
            <Text>Total</Text>
            <Text fontWeight={700} fontSize={30}>$119.00</Text>
        </HStack>
    </VStack>;
}