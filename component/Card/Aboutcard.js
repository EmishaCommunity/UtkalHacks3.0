import React from "react"
import { Image, Box, wRAP } from "@chakra-ui/react"
import NextImage from "next/image";

const AboutCard = ({ children, header, body, coverImage, ...props }) => {


    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="2px" bg="#E3F891">

            <Image w="100%" borderRadius="2px" src={coverImage} />

            <Box py="24px" px="20px" >
                <Box
                    as="h1"
                    fontFamily="Rubik"
                    fontStyle="normal"
                    fontWeight="bold"
                    lineHeight="auto"
                    fontSize={["xl", "xl", "2xl", "2xl"]}
                    color="#252222"
                >
                    {header}
                </Box>

                <Box
                    as="p"
                    fontFamily="Rubik"
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize={["md", "md", "lg", "lg"]}
                    color="#454954"
                >
                    {body}
                </Box>
            </Box>
        </Box>
    )
}

export default AboutCard