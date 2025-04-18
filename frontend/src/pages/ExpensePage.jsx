// frontend/src/pages/ExpensePage.jsx
import { useState, useEffect } from 'react'
import { Box, Heading, useToast } from '@chakra-ui/react'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'
import { fetchExpenses, createExpense, deleteExpense } from '../api'

export default function ExpensePage() {
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)
  const toast = useToast()

  useEffect(() => {
    const today = new Date()
    fetchExpenses(today.getFullYear(), today.getMonth() + 1)
      .then(data => {
        setItems(data)
        setTotal(data.reduce((sum, tx) => sum + Number(tx.amount), 0))
      })
      .catch(err => {
        console.error('Virhe menojen haussa:', err)
        toast({ title: 'Menojen haku epäonnistui', status: 'error', duration: 3000 })
      })
  }, [])

  const onAdd = async (values) => {
    const newItem = await createExpense(values)
    setItems(prev => [...prev, newItem])
    setTotal(prev => prev + Number(newItem.amount))
  }

  const onDelete = async (id) => {
    try {
      const deleted = items.find(tx => tx.id === id)
      await deleteExpense(id)
      setItems(prev => prev.filter(tx => tx.id !== id))
      setTotal(prev => prev - Number(deleted.amount))
    } catch (err) {
      console.error('Poistaminen epäonnistui:', err)
      toast({ title: 'Poisto epäonnistui', status: 'error', duration: 3000 })
    }
  }

  return (
    <Box p={4}>
      <Heading size="md" mb={4}>Menot</Heading>
      <ExpenseForm onSubmit={onAdd} />
      <ExpenseList items={items} onDelete={onDelete} />
      <Box mt={4}>Yhteensä: {total.toFixed(2)} €</Box>
    </Box>
  )
}
