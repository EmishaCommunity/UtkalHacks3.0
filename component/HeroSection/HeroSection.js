import React from "react"
import {
  Box,
  Text,
  Stack,
  Heading,
} from "@chakra-ui/react"
import { FaPen } from 'react-icons/fa';
import Button from "../Button"

const HeroSection = () => {
  return (
    <Box
      bgImage="url('https://res.cloudinary.com/emishalabs/image/upload/q_80/v1612203030/UtkalHacks%203.0/camputer-image_zmpt7b.webp')"
      bgSize={["cover", "cover", "cover", "cover"]}
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Stack pt={["150px", "400px", "650px", "650px"]} align="center" zIndex="1">
        <Heading
          fontFamily="rubik"
          fontWeight="black"
          fontSize={["4xl", "5xl", "70px", "70px", "70px"]}
          textAlign="center"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          color="#ffffff"
        >
          UtkalHacks 3.0
          </Heading>
        <Text
          fontFamily="rubik"
          fontWeight="medium"
          fontSize={["xl", "2xl", "3xl", "3xl", "3xl"]}
          color="#ffffff"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        >
          20th Feb - 7th March
        </Text>

        <Button
          withIcon
          mb={["-25px", "-25px", "-25px", "-25px", "-25px"]}
          label=" Apply with Devfolio"
          rightIcon={<FaPen />}
        />
      </Stack>
    </Box >

  )
}

export default HeroSection