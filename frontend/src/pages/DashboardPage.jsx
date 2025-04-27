import { useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Heading,
  Button,
  useColorModeValue,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
  Progress,
  Text
} from '@chakra-ui/react'
import { format } from 'date-fns'
import { fi } from 'date-fns/locale'
import CalendarView from '../components/CalendarView'
import axios from 'axios'
import { fetchSavings } from '../api'
import { addMonths, subMonths } from 'date-fns';

export default function DashboardPage() {
  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth() + 1)
  const [txMap, setTxMap] = useState({})
  const [selectedDate, setSelectedDate] = useState(null)
  const [amount, setAmount] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const cardBg = useColorModeValue('white', 'gray.700')

  const [savings, setSavings] = useState({ goal: 0, saved: 0 })

  useEffect(() => {
    fetchSavings().then(setSavings)
  }, [])

  const fetchData = () => {
    axios
      .get(`/api/transactions?year=${year}&month=${month}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .then(res => {
        const map = {}
        res.data.forEach(tx => {
          const key = format(new Date(tx.date), 'yyyy-MM-dd')
          map[key] = (map[key] || 0) + parseFloat(tx.amount)
        })
        setTxMap(map)
      })
      .catch(err => {
        console.error('Virhe haettaessa tapahtumia:', err)
      })
  }

  useEffect(() => {
    fetchData()
  }, [year, month])

  const handleSave = async () => {
    if (!selectedDate) {
      toast({ title: 'Päivämäärä puuttuu', status: 'error', duration: 3000 })
      return
    }

    const parsedAmount = Number(amount)
    if (isNaN(parsedAmount)) {
      toast({ title: 'Summa ei ole kelvollinen', status: 'error', duration: 3000 })
      return
    }

    const formattedDate = format(selectedDate, 'yyyy-MM-dd')

    try {
      await axios.post(
        '/api/transactions',
        { date: formattedDate, amount: parsedAmount },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      )
      toast({ title: 'Tallennettu', status: 'success', duration: 3000 })
      onClose()
      fetchData()
    } catch (err) {
      console.error('Virhe tallennuksessa:', err)
      toast({ title: 'Tallennus epäonnistui', status: 'error', duration: 3000 })
    }
  }

  return( 
  <Flex direction="column" minH="100vh">
  <Box flex="1" px={{ base: 4, md: 8 }} py={6}>
      <Flex justify="space-between" align="center" mb={4}>
  <Button onClick={() => {
    const prev = subMonths(new Date(year, month - 1), 1);
    setYear(prev.getFullYear());
    setMonth(prev.getMonth() + 1);
  }}>
    Edellinen kuukausi
  </Button>

  <Heading size="lg">
    {format(new Date(year, month - 1), 'LLLL yyyy', { locale: fi })}
    </Heading> 

  <Button onClick={() => {
    const next = addMonths(new Date(year, month - 1), 1);
    setYear(next.getFullYear());
    setMonth(next.getMonth() + 1);
  }}>
    Seuraava kuukausi
  </Button>
</Flex>

    <Box bg={cardBg} p={{ base: 4, md: 6 }} rounded="lg" boxShadow="md" mb={8}>
      <CalendarView
        year={year}
        month={month}
        data={txMap}
        onDayClick={day => {
          setSelectedDate(day)
          setAmount('')
          onOpen()
        }}
      />
    </Box>

        <Box mt={6} p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="sm" mb={2}>Säästötavoite</Heading>
          <Text mb={1}>
            Säästetty {Number(savings.saved).toFixed(2)} € / {Number(savings.goal).toFixed(2)} €
          </Text>
          <Progress
            value={savings.goal > 0 ? (savings.saved / savings.goal) * 100 : 0}
            size="sm"
            colorScheme="blue"
          />
        </Box>

        {/* Modal kulujen kirjaamiseen */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Päivämäärä: {selectedDate && format(selectedDate, 'd.M.yyyy')}
            </ModalHeader>
            <ModalBody>
              <Input
                placeholder="Syötä kulutettu summa (€)"
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
            </ModalBody>
            <ModalFooter gap={3}>
              <Button
                onClick={() => {
                  setAmount('0')
                  setTimeout(handleSave, 0)
                }}
                variant="outline"
              >
                Ei käytetty rahaa
              </Button>
              <Button colorScheme="teal" onClick={handleSave}>
                Tallenna
              </Button>
              <Button onClick={onClose} variant="ghost">
                Peruuta
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  )
}