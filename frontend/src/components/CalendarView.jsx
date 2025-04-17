// frontend/src/components/CalendarView.jsx
import { Grid, Box, Text, useColorModeValue } from '@chakra-ui/react'
import { startOfMonth, endOfMonth, eachDayOfInterval, format } from 'date-fns'

export default function CalendarView({
  year,
  month,
  data = {},        // oletuksena tyhjä olio
  onDayClick = () => {},
}) {
  const first = startOfMonth(new Date(year, month - 1))
  const last = endOfMonth(new Date(year, month - 1))
  const days = eachDayOfInterval({ start: first, end: last })
  const bg = useColorModeValue('green.50', 'green.900')
  const textColor = useColorModeValue('green.800', 'green.200')

  return (
    <Grid
      templateColumns="repeat(7,1fr)"
      gap={2}
    >
      {days.map(day => {
        const key = format(day, 'yyyy-MM-dd')
        const amount = data[key] || 0
        return (
          <Box
            key={key}
            bg={amount === 0 ? bg : 'transparent'}
            borderWidth="1px"
            borderColor={amount === 0 ? 'transparent' : 'green.200'}
            p={2}
            rounded="sm"
            onClick={() => onDayClick(day)}
            cursor="pointer"
          >
            <Text fontSize="sm" color={textColor}>
              {format(day, 'd')}
            </Text>
            {amount > 0 && (
              <Text fontSize="xs" color="green.600">
                €{amount.toFixed(2)}
              </Text>
            )}
          </Box>
        )
      })}
    </Grid>
  )
}
