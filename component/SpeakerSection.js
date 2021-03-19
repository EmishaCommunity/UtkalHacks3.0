import React from "react"
import { Box, Text, Stack, Flex, SimpleGrid } from "@chakra-ui/react"
import SpeakerCard from "./Card/SpeakerCard"
import Section from "./Section"

const speakersData = [
  {
    id: "1",
    name: "Vilva Athiban P B",
    title: "Senior JavaScript Developer",
    company: "@Omio",
    profilepic: "https://vilvaathiban.com/intro.jpg",
    linkedin: "https://linkedin.com/in/vilvaathiban",
    github: "https://github.com/vilvaathibanpb",
    twitter: "https://twitter.com/vilvaathibanpb",
    website: "https://vilvaathiban.com"
  },
  {
    id: "2",
    name: "Michael Riddering",
    title: "Building FigmaAcademy",
    company: "@ShiftNudge",
    profilepic: "https://pbs.twimg.com/profile_images/1345910398722125827/rt_vhp2A_400x400.png",
    linkedin: "https://linkedin.com/in/michaelriddering",
    dribbble: "https://dribbble.com/riddering",
    twitter: "https://twiiter.com/ridderingand",
    website: "https://michaelriddering.com"
  },
  {
    id: "3",
    name: "Darshan Gajara",
    title: "Design Lead",
    company: "@GraphCMS",
    profilepic: "https://pbs.twimg.com/profile_images/1117472858836434944/FbWce7CZ_400x400.jpg",
    dribbble: "https://dribbble.com/WeirdoWizard",
    twitter: "https://twitter.com/WeirdoWizard",
    website: "https://darshangajara.com"
  },
  {
    id: "4",
    name: "Scott Spence",
    title: "web developer",
    company: "@karmarama",
    profilepic: "https://res.cloudinary.com/emishalabs/image/upload/v1616179877/UtkalHacks%203.0/ScottSpence_ayssuh.png",
    github: "https://github.com/spences10",
    twitter: "https://twitter.com/spences10",
    website: "https://scottspence.com/"
  },
  {
    id: "5",
    name: "Johan Eliasson",
    title: "Founder",
    company: "@NHost",
    profilepic: "https://pbs.twimg.com/profile_images/1237013895375728640/F-aV_86L_400x400.jpg",
    linkedin: "https://linkedin.com/in/johan--eliasson",
    github: "https://github.com/elitasson",
    twitter: "https://twitter.com/elitasson"
  },
  {
    id: "6",
    name: "Tadit Dash",
    title: "Software Engineer | Author",
    company: "Prev. Software Engineer @Mindfire Solutions",
    profilepic: "https://res.cloudinary.com/emishalabs/image/upload/v1616178958/UtkalHacks%203.0/Tadit_jnv2dy.jpg",
    linkedin: "https://www.linkedin.com/in/taditdash/",
    github: "https://github.com/taditdash",
    twitter: "https://twitter.com/taditdash",
    website: "http://taditdash.co.in/"
  },
  {
    id: "7",
    name: "Anshuman Verma",
    title: "Software Engineer",
    company: "@clarisights",
    profilepic: "https://res.cloudinary.com/emishalabs/image/upload/v1616180653/UtkalHacks%203.0/Anshuman_hewff8.jpg",
    linkedin: "https://www.linkedin.com/in/anshumanv12/",
    github: "https://github.com/anshumanv",
    twitter: "https://twitter.com/anshumaniac",
    website: "https://anshumanv.dev/"
  },
  {
    id: "8",
    name: "Sayli Patil",
    title: "Tech Lead",
    company: "The Dapp List",
    profilepic: "https://res.cloudinary.com/emishalabs/image/upload/v1616181034/UtkalHacks%203.0/sayli_kb160f.jpg",
    linkedin: "https://www.linkedin.com/in/ptsayli/",
    twitter: "https://twitter.com/ptsayli"
  },

]

const SpeakerSection = () => {
  return (
    <Box>
      <Section center heading="Speakers & Judges" />
      <SimpleGrid columns={[1, 2, 3, 4, 5]} justifyContent="space-between" gap="20px" my="20px">
        {speakersData.map((data) => (
          <SpeakerCard
            key={data.id}
            name={data.name}
            title={data.title}
            company={data.company}
            profilePic={data.profilepic}
            linkedin={data.linkedin}
            dribbble={data.dribbble}
            github={data.github}
            twitter={data.twitter}
            website={data.website}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default SpeakerSection
