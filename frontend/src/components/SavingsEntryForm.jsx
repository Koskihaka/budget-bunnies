// frontend/src/components/SavingsEntryForm.jsx
import { useState } from 'react'
import { Box, Input, Button, FormControl, FormLabel } from '@chakra-ui/react'

export default function SavingsEntryForm({ onSubmit }) {
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  const handle = async () => {
    await onSubmit({ amount: Number(amount), date, description })
    setAmount(''); setDate(''); setDescription('')
  }

  return (
    <Box mb={4}>
      <FormControl mb={2}>
        <FormLabel>Summa</FormLabel>
        <Input value={amount} onChange={e => setAmount(e.target.value)} type="number" />
      </FormControl>
      <FormControl mb={2}>
        <FormLabel>Päivämäärä</FormLabel>
        <Input value={date} onChange={e => setDate(e.target.value)} type="date" />
      </FormControl>
      <FormControl mb={2}>
        <FormLabel>Kuvaus</FormLabel>
        <Input value={description} onChange={e => setDescription(e.target.value)} />
      </FormControl>
      <Button colorScheme="green" onClick={handle}>Lisää säästöön</Button>
    </Box>
  )
}
