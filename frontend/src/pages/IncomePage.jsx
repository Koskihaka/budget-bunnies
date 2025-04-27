// frontend/src/pages/IncomePage.jsx

import { useState, useEffect } from 'react'
import { Box, Heading, useToast } from '@chakra-ui/react'
import IncomeForm from '../components/IncomeForm'
import IncomeList from '../components/IncomeList'
import { fetchIncomes, createIncome, deleteIncome } from '../api'

export default function IncomePage() {
  const now = new Date();
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [year] = useState(now.getFullYear());
  const [month] = useState(now.getMonth() + 1);
  const toast = useToast();

  const fetchIncomes = async (year, month) => {
    try {
      const data = await fetchIncomes(year, month);
      setItems(data); 
      const sum = data.reduce((total, item) => total + Number(item.amount), 0);
      setTotal(sum);  
    } catch (err) {
      console.error('Virhe tulojen haussa:', err);
      toast({ title: 'Virhe tulojen haussa', status: 'error', duration: 3000 });
    }
  };

  useEffect(() => {
    fetchIncomes(year, month);
  }, [year, month]);

  const handleAdd = async (values) => {
    try {
      const newItem = await createIncome(values);
      setItems(prev => [...prev, newItem]);
      setTotal(prev => prev + Number(newItem.amount));
    } catch (err) {
      console.error('Virhe lisättäessä tuloa:', err);
      toast({ title: 'Virhe tuloa lisättäessä', status: 'error', duration: 3000 });
    }
  };

  const handleDelete = async (item) => {
    try {
      await deleteIncome(item.id);
      setItems(prev => prev.filter(i => i.id !== item.id));
      setTotal(prev => prev - Number(item.amount));
    } catch (err) {
      console.error('Virhe poistettaessa tuloa:', err);
      toast({ title: 'Virhe tuloa poistettaessa', status: 'error', duration: 3000 });
    }
  };

  return (
    <Box p={4}>
      <Heading size="md" mb={4}>Tulot</Heading>
      <IncomeForm onSubmit={handleAdd} />
      <IncomeList items={items} onDelete={handleDelete} />
      <Box mt={4}>
        <strong>Yhteensä:</strong> {total.toFixed(2)} €
      </Box>
    </Box>
  );
}
