import {
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    GridItem,
    Heading,
    Input,
    Select,
    SimpleGrid,
    Text, useColorModeValue,
    VStack
} from "@chakra-ui/react";

export default function Detail() {
    const bg = useColorModeValue('gray.100', 'gray.900')

    return <VStack w="full" minH="full" spacing={10} p="40px">
        <VStack align='flex-start' w='full' spacing={2}>
            <Heading>Your Detail</Heading>
            <Text>If you already have an account, click here to log in.</Text>
        </VStack>
        <SimpleGrid columns={2} rowGap={6} columnGap={3} w='full'>
            <GridItem colSpan={[2, 2, 1]}>
                <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input placeholder='John' autoFocus/>
                </FormControl>
            </GridItem>
            <GridItem colSpan={[2, 2, 1]}>
                <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input placeholder='Doe'/>
                </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
                <FormControl>
                    <FormLabel>Address</FormLabel>
                    <Input placeholder='Blvd, Broken Dreams 21'/>
                </FormControl>
            </GridItem>
            <GridItem colSpan={[2, 2, 1]}>
                <FormControl>
                    <FormLabel>City</FormLabel>
                    <Input placeholder='San Francisco'/>
                </FormControl>
            </GridItem>
            <GridItem colSpan={[2, 2, 1]}>
                <FormControl>
                    <FormLabel>Country</FormLabel>
                    <Select>
                        <option value=''>EU</option>
                        <option value=''>VN</option>
                    </Select>
                </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
                <Checkbox defaultChecked>Ship to the billing address</Checkbox>
            </GridItem>
            <GridItem colSpan={2}>
                <Button w='full' variant='primary'>Place Order</Button>
            </GridItem>
        </SimpleGrid>
    </VStack>
        ;
}