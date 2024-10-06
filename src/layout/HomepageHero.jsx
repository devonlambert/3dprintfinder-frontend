import { Button, Container, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'

export const HomepageHero = () => (
    <>
        <Image
            alt="Placeholder Image"
            src="https://pro.chakra-ui.com/components/marketing/blog/post1.png"
            objectFit="cover"
            objectPosition="center -140px"
            maxH={{ base: 'sm', md: 'lg' }}
            width="full"
        />
    </>
)