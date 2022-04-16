import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Text,
} from "@chakra-ui/react";

interface ProgressCircularProps {
  value: number;
  label: string;
  text: string;
}

export default function ProgressCircular({
  value,
  text,
  label,
}: ProgressCircularProps) {
  return (
    <Box>
      <CircularProgress
        value={value}
        color="primary.100"
        thickness="6"
        size="65"
      >
        <CircularProgressLabel>{label}</CircularProgressLabel>
      </CircularProgress>
      <Text color="white.950">{text}</Text>
    </Box>
  );
}
