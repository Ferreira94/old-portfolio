import { Box, Flex, Progress, Text } from "@chakra-ui/react";

interface ProgressProps {
  value: number;
  label: string;
  text: string;
}

export default function SkillsProgress({ value, text, label }: ProgressProps) {
  return (
    <Box my="3">
      <Flex justify="space-between">
        <Text>{text}</Text>
        <Text color="white.950">{label}</Text>
      </Flex>
      <Progress value={value} size="xs" colorScheme="blue" />
    </Box>
  );
}
