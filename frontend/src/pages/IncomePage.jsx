// frontend/src/pages/IncomePage.jsx
import { useState, useEffect } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import IncomeForm from '../components/IncomeForm'
import IncomeList from '../components/IncomeList'
import { fetchIncomes, createIncome } from '../api'

export default function IncomePage() {
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetchIncomes().then(data => {
      setItems(data)
      setTotal(data.reduce((sum, tx) => sum + Number(tx.amount), 0))
    })
  }, [])

  const onAdd = async (values) => {
    const newItem = await createIncome(values)
    setItems(prev => [...prev, newItem])
    setTotal(prev => prev + Number(newItem.amount))
  }

  return (
    <Box p={4}>
      <Heading size="md" mb={4}>Tulot</Heading>
      <IncomeForm onSubmit={onAdd} />
      <IncomeList items={items} />
      <Box mt={4}>Yhteensä: {total} €</Box>
    </Box>
  )
}
