import { useState, useEffect } from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns'
import { fi } from 'date-fns/locale'
import {
  Box, Flex, Heading, HStack, Spacer, Button, useColorModeValue
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import CalendarView from '../components/CalendarView'
import SavingsProgress from '../components/SavingsProgress'
import { fetchTransactions } from '../api'

export default function DashboardPage() {
  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth() + 1)
  const [txMap, setTxMap] = useState({})

  // Haetaan transaktiot ja muotoillaan mapiksi
  useEffect(() => {
    fetchTransactions(year, month).then(list => {
      const map = {}
      list.forEach(tx => {
        const key = format(new Date(tx.date), 'yyyy-MM-dd')
        map[key] = (map[key] || 0) + parseFloat(tx.amount)
      })
      setTxMap(map)
    })
  }, [year, month])

  const navBg = useColorModeValue('rgba(255,255,255,0.8)', 'rgba(26,32,44,0.8)')
  const cardBg = useColorModeValue('white', 'gray.700')

  return (
    <Flex direction="column" minH="100vh">
      {/* Navigaatio */}
      <Flex
        as="nav"
        bg={navBg}
        backdropFilter="saturate(180%) blur(10px)"
        px={{ base: 4, md: 8 }}
        py={4}
        position="sticky"
        top="0"
        zIndex="10"
        align="center"
      >
        <HStack spacing={{ base: 4, md: 8 }}>
          {[
            { to: '/', label: 'Etusivu' },
            { to: '/tulot', label: 'Tulot' },
            { to: '/menot', label: 'Menot' },
            { to: '/saasto', label: 'Säästö' },
          ].map(({ to, label }) => (
            <Button
              key={to}
              as={NavLink}
              to={to}
              variant="ghost"
              size="md"
              _activeLink={{
                color: 'teal.600',
                borderBottom: '3px solid',
                borderColor: 'teal.600',
              }}
            >
              {label}
            </Button>
          ))}
        </HStack>
        <Spacer />
      </Flex>

      {/* Sisältö */}
      <Box flex="1" px={{ base: 4, md: 8 }} py={6}>
        <Heading mb={6} size="lg">
          {format(now, 'LLLL yyyy', { locale: fi })}
        </Heading>

        <Box bg={cardBg} p={{ base: 4, md: 6 }} rounded="lg" boxShadow="md" mb={8}>
          {/* Data-propisi nyt txMap */}
          <CalendarView
            year={year}
            month={month}
            data={txMap}
            onDayClick={day => console.log('Klikattu päivä:', day)}
          />
        </Box>

        <Box bg={cardBg} p={{ base: 4, md: 6 }} rounded="lg" boxShadow="md">
          <Heading size="md" mb={4}>
            Säästötavoite
          </Heading>
          <SavingsProgress /* goal ja saved */ />
        </Box>
      </Box>
    </Flex>
  )
}
