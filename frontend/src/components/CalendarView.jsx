import { Grid, Box, Text, Icon, useColorModeValue } from '@chakra-ui/react'
import { startOfMonth, endOfMonth, eachDayOfInterval, format } from 'date-fns'
import { FaCheckCircle } from 'react-icons/fa'

export default function CalendarView({
  year,
  month,
  data = {},        
  onDayClick = () => {},
}) {
  const first = startOfMonth(new Date(year, month - 1))
  const last = endOfMonth(new Date(year, month - 1))
  const days = eachDayOfInterval({ start: first, end: last })
  const bg = useColorModeValue('green.50', 'green.900')
  const textColor = useColorModeValue('green.800', 'green.200')

  return (
    <Grid templateColumns="repeat(7,1fr)" gap={2}>
      {days.map(day => {
        const key = format(day, 'yyyy-MM-dd')
        const amount = data[key]

        const isNoSpendingDay = amount === 0
        const hasSpent = amount > 0

        return (
          <Box
            key={key}
            bg={isNoSpendingDay ? bg : 'transparent'}
            borderWidth="1px"
            borderColor={hasSpent ? 'green.200' : 'transparent'}
            p={2}
            rounded="sm"
            onClick={() => onDayClick(day)}
            cursor="pointer"
            textAlign="center"
          >
            <Text fontSize="sm" color={textColor}>
              {format(day, 'd')}
            </Text>

            {hasSpent && (
              <Text fontSize="xs" color="green.600">
                €{amount.toFixed(2)}
              </Text>
            )}

            {isNoSpendingDay && (
              <Icon as={FaCheckCircle} color="green.500" boxSize={4} mt={1} />
            )}
          </Box>
        )
      })}
    </Grid>
  )
}
