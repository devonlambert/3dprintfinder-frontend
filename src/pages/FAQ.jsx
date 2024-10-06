import { Box, Heading, Text, Container, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

const faqData = [
  {
    question: "What is 3D printing?",
    answer: "3D printing is a process of making three dimensional solid objects from a digital file. It's an additive process, where an object is created by laying down successive layers of material."
  },
  {
    question: "How do I upload my 3D model?",
    answer: "You can upload your 3D model by logging into your account, navigating to the 'New Print' section, and following the upload instructions. We accept .STL, .OBJ, and .3MF file formats."
  },
  {
    question: "What materials can I print with?",
    answer: "We offer a variety of materials including PLA, ABS, PETG, Nylon, and more. The available materials depend on the specific printer and service you choose."
  },
  {
    question: "How long does printing take?",
    answer: "Print time varies depending on the size and complexity of your model, as well as the chosen material. Typically, it can range from a few hours to several days for larger prints."
  }
];

export const FAQ = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" size="2xl" mb={6}>Frequently Asked Questions</Heading>
      <Accordion allowMultiple>
        {faqData.map((item, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="bold">{item.question}</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {item.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}