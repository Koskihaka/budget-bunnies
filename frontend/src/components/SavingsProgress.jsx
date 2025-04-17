import { Box, Progress, Text, Flex } from '@chakra-ui/react'

export default function SavingsProgress({ saved, goal }) {
  const percent = Math.min((saved / goal) * 100, 100)
  return (
    <Box>
      <Text mb={1}>Säästö tavoite</Text>
      <Flex align="center" mb={2}>
        <Text mr={2}>{saved} €</Text>
        <Progress flex="1" value={percent} />
        <Text ml={2}>{goal} €</Text>
      </Flex>
    </Box>
  )
}
