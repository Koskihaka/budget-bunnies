// frontend/src/components/ExpenseForm.jsx
import { useState } from 'react'
import {
  Box, Input, Button, FormControl, FormLabel, FormErrorMessage
} from '@chakra-ui/react'

export default function ExpenseForm({ onSubmit }) {
  const [amount, setAmount]       = useState('')
  const [category, setCategory]   = useState('')
  const [date, setDate]           = useState('')
  const [description, setDesc]    = useState('')
  const [error, setError]         = useState('')

  const handle = async () => {
    if (!amount || !category || !date) {
      setError('Täytä kaikki pakolliset kentät')
      return
    }
    setError('')
    await onSubmit({ amount: Number(amount), category, date, description })
    setAmount(''); setCategory(''); setDate(''); setDesc('')
  }

  return (
    <Box mb={4}>
      <FormControl isInvalid={!!error} mb={2}>
        <FormLabel>Summa (€)</FormLabel>
        <Input
          type="number"
          value={amount}
          onChange={e=>setAmount(e.target.value)}
        />
      </FormControl>
      <FormControl isInvalid={!!error} mb={2}>
        <FormLabel>Kategoria</FormLabel>
        <Input
          value={category}
          onChange={e=>setCategory(e.target.value)}
        />
      </FormControl>
      <FormControl isInvalid={!!error} mb={2}>
        <FormLabel>Päivämäärä</FormLabel>
        <Input
          type="date"
          value={date}
          onChange={e=>setDate(e.target.value)}
        />
      </FormControl>
      <FormControl mb={2}>
        <FormLabel>Kuvaus (valinnainen)</FormLabel>
        <Input
          value={description}
          onChange={e=>setDesc(e.target.value)}
        />
      </FormControl>
      {error && <FormErrorMessage mb={2}>{error}</FormErrorMessage>}
      <Button colorScheme="red" onClick={handle}>Lisää meno</Button>
    </Box>
  )
}
