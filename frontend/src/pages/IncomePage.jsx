// frontend/src/pages/IncomePage.jsx
import { useState, useEffect } from 'react'
import { Box, Heading, useToast } from '@chakra-ui/react'
import IncomeForm from '../components/IncomeForm'
import IncomeList from '../components/IncomeList'
import { fetchIncomes, createIncome, deleteIncome } from '../api'

export default function IncomePage() {
  const now = new Date()
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)
  const [year] = useState(now.getFullYear())
  const [month] = useState(now.getMonth() + 1)
  const toast = useToast()

  // Hae tulot tietylle kuukaudelle ja vuodelle
  useEffect(() => {
    fetchIncomes(year, month)
      .then(data => {
        setItems(data)
        setTotal(data.reduce((sum, tx) => sum + Number(tx.amount), 0))
      })
      .catch(err => {
        console.error('Virhe tulojen haussa:', err)
        toast({ title: 'Virhe tulojen haussa', status: 'error', duration: 3000 })
      })
  }, [year, month])

  const onAdd = async (values) => {
    const newItem = await createIncome(values)
    setItems(prev => [...prev, newItem])
    setTotal(prev => prev + Number(newItem.amount))
  }

  const handleDelete = async (item) => {
    try {
      await deleteIncome(item.id);
      setItems(prev => prev.filter(i => i.id !== item.id));
      setTotal(prev => prev - Number(item.amount));
    } catch (err) {
      console.error("Poistaminen epäonnistui:", err);
    }
  };  

  return (
    <Box p={4}>
      <Heading size="md" mb={4}>Tulot</Heading>
      <IncomeForm onSubmit={onAdd} />
      <IncomeList items={items} onDelete={handleDelete} />
      <Box mt={4}>Yhteensä: {total.toFixed(2)} €</Box>
    </Box>
  )
}
