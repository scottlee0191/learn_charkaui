import {Container, Flex, VStack} from "@chakra-ui/react";
import Detail from "@/pages/components/Detail";
import Cart from "@/pages/components/Cart";

export default function Home() {
  return (
    <Container maxW="container.xl" p={0}>
        <Flex py={[0, 10, 20]} h="auto" minH='100vh' direction={['column-reverse',  'row']}>
            <Detail/>
            <Cart/>
        </Flex>
    </Container>
  )
}
