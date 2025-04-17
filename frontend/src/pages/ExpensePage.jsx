// frontend/src/pages/ExpensePage.jsx
import { useState, useEffect } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'
import { fetchExpenses, createExpense } from '../api'

export default function ExpensePage() {
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const today = new Date()
    fetchExpenses(today.getFullYear(), today.getMonth() + 1)
      .then(data => {
        setItems(data)
        setTotal(data.reduce((sum, tx) => sum + Number(tx.amount), 0))
      })
  }, [])

  const onAdd = async (values) => {
    const newItem = await createExpense(values)
    setItems(prev => [...prev, newItem])
    setTotal(prev => prev + Number(newItem.amount))
  }

  return (
    <Box p={4}>
      <Heading size="md" mb={4}>Menot</Heading>
      <ExpenseForm onSubmit={onAdd} />
      <ExpenseList items={items} />
      <Box mt={4}>Yhteensä: {total} €</Box>
    </Box>
  )
}
