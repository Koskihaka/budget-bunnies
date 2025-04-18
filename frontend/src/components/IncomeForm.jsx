import { useState } from 'react'
import {
  Box, Input, Button, FormControl, FormLabel, FormErrorMessage
} from '@chakra-ui/react'

export default function IncomeForm({ onSubmit }) {
  const [amount, setAmount]   = useState('')
  const [name, setName]       = useState('') 
  const [date, setDate]       = useState('')
  const [description, setDesc] = useState('')
  const [error, setError]     = useState('')

  const handle = async () => {
    if (!amount || !name || !date) {
      setError('Täytä kaikki pakolliset kentät')
      return
    }
    setError('')
    await onSubmit({
      amount: Number(amount),
      name,
      date,
      description
    })
    setAmount('')
    setName('')
    setDate('')
    setDesc('')
  }

  return (
    <Box mb={4}>
      <FormControl isInvalid={!!error} mb={2}>
        <FormLabel>Summa (€)</FormLabel>
        <Input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </FormControl>

      <FormControl isInvalid={!!error} mb={2}>
        <FormLabel>Tulon nimi</FormLabel>
        <Input
          placeholder="Esim. Palkka, Sivuansio..."
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormControl>

      <FormControl isInvalid={!!error} mb={2}>
        <FormLabel>Päivämäärä</FormLabel>
        <Input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </FormControl>

      {error && <FormErrorMessage mb={2}>{error}</FormErrorMessage>}

      <Button colorScheme="green" onClick={handle}>Lisää tulo</Button>
    </Box>
  )
}