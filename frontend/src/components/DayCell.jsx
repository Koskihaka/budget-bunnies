import { Box, Text, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'

export default function DayCell({ date, amount, onClick }) {
  const hasSpent = amount > 0
  const bg = hasSpent ? 'white' : useColorModeValue('green.50', 'green.900')
  const borderHover = hasSpent ? 'blue.500' : 'green.400'

  return (
    <Box
      onClick={() => onClick(date)}
      bg={bg}
      border="1px solid transparent"
      _hover={{ borderColor: borderHover, cursor: 'pointer' }}
      p={2}
      textAlign="center"
    >
      <Text fontSize="sm">{date.getDate()}</Text>
      {hasSpent ? (
        <Text fontSize="xs">{amount} €</Text>
      ) : (
        <Icon as={FaCheckCircle} color="green.500" boxSize={4} />
      )}
    </Box>
  )
}
