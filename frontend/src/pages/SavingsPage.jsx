// frontend/src/pages/SavingsPage.jsx
import { useState, useEffect } from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import SavingsForm from '../components/SavingsForm'
import AddSavingEntryForm from '../components/AddSavingEntryForm'
import { fetchSavings, setSavingsGoal, addSavingEntry, fetchSavingEntries } from '../api'

export default function SavingsPage() {
  const [sav, setSav] = useState({ goal: 0, saved: 0 })
  const [entries, setEntries] = useState([])

  useEffect(() => {
    fetchSavings().then(setSav)
    fetchSavingEntries().then(setEntries)
  }, [])

  const onSetGoal = async (goal) => {
    const updated = await setSavingsGoal({ goal })
    setSav(updated)
  }

  const onAddEntry = async (amount) => {
    const newEntry = await addSavingEntry({
      amount,
      date: new Date().toISOString(), 
      description: ''           
    })    
    setEntries(prev => [...prev, newEntry])
    setSav(prev => ({
      ...prev,
      saved: Number(prev.saved) + Number(newEntry.amount)
    }))
  }

  return (
    <Box p={4}>
      <Heading size="md" mb={4}>Säästö</Heading>

      <SavingsForm goal={sav.goal} onSubmit={onSetGoal} />

      <Box mb={4}>
        <strong>Säästetty:</strong> {sav.saved} € / {sav.goal} €
      </Box>

      <AddSavingEntryForm onSubmit={onAddEntry} />

      <Box mt={6}>
        <Heading size="sm" mb={2}>Säästöerät</Heading>
        {entries.length === 0 ? (
          <Text>Ei vielä lisättyjä säästöjä.</Text>
        ) : (
          <ul>
            {entries.map((e, idx) => (
              <li key={idx}>💶 {Number(e.amount).toFixed(2)} €</li>
            ))}
          </ul>
        )}
      </Box>
    </Box>
  )
}
