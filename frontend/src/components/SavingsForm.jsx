// frontend/src/components/SavingsForm.jsx
import { useState } from 'react'
import { Box, Input, Button, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'

export default function SavingsForm({ goal, onSubmit }) {
  const [value, setValue]   = useState(goal || '')
  const [error, setError]   = useState('')

  const handle = () => {
    if (!value || isNaN(value) || Number(value) < 0) {
      setError('Anna kelvollinen tavoite')
      return
    }
    setError('')
    onSubmit(Number(value))
  }

  return (
    <Box mb={4}>
      <FormControl isInvalid={!!error}>
        <FormLabel>Säästötavoite (€)</FormLabel>
        <Input
          type="number"
          value={value}
          onChange={e=>setValue(e.target.value)}
        />
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
      <Button mt={2} colorScheme="green" onClick={handle}>
        Aseta tavoite
      </Button>
    </Box>
  )
}
