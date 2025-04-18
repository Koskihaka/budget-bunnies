// frontend/src/components/AddSavingEntryForm.jsx
import { useState } from 'react'
import {
  Box, Input, Button, FormControl, FormLabel, FormErrorMessage
} from '@chakra-ui/react'

export default function AddSavingEntryForm({ onSubmit }) {
  const [amount, setAmount] = useState('')
  const [error, setError] = useState('')

  const handle = () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setError('Anna kelvollinen summa')
      return
    }
    setError('')
    onSubmit(Number(amount))
    setAmount('')
  }

  return (
    <Box mb={4}>
      <FormControl isInvalid={!!error} mb={2}>
        <FormLabel>Lisää säästöön (€)</FormLabel>
        <Input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
      <Button onClick={handle} colorScheme="teal">
        Lisää säästö
      </Button>
    </Box>
  )
}
