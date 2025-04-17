import { useState, useEffect } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import SavingsForm     from '../components/SavingsForm'
import SharedGoalsList from '../components/SharedGoalsList'
import { fetchSavings, setSavingsGoal /*, fetchSharedGoals */ } from '../api'

export default function SavingsPage() {
  const [sav, setSav]       = useState({ goal: 0, saved: 0 })
  // const [shared, setShared] = useState([])

  useEffect(() => {
    fetchSavings().then(setSav)
    // fetchSharedGoals().then(setShared)
  }, [])

  const onSetGoal = async (goal) => {
    const updated = await setSavingsGoal(goal)
    setSav(updated)
  }

  return (
    <Box p={4}>
      <Heading size="md" mb={4}>Säästö</Heading>
      <SavingsForm goal={sav.goal} onSubmit={onSetGoal} />
      <Box mb={4}>
        <strong>Säästetty:</strong> {sav.saved} € / {sav.goal} €
      </Box>
      {/* jos perhe‑ominaisuus:
      <Heading size="sm" mb={2}>Jaetut tavoitteet</Heading>
      <SharedGoalsList items={shared} />
      */}
    </Box>
  )
}
