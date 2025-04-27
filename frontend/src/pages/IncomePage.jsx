// frontend/src/pages/IncomePage.jsx

import { useState, useEffect } from 'react';
import { Box, Heading, useToast } from '@chakra-ui/react';
import IncomeForm from '../components/IncomeForm';
import IncomeList from '../components/IncomeList';
import { fetchIncomes as fetchIncomesFromApi, createIncome, deleteIncome } from '../api';

export default function IncomePage() {
  const now = new Date();
  const [items, setItems] = useState([]);
  const [year] = useState(now.getFullYear());
  const [month] = useState(now.getMonth() + 1);
  const toast = useToast();

  // Haetaan tulot kuukaudelle
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchIncomesFromApi(year, month);
        setItems(data); // Tallennetaan kaikki tulot riveittäin
      } catch (err) {
        console.error('Virhe tulojen haussa:', err);
        toast({ title: 'Virhe tulojen haussa', status: 'error', duration: 3000 });
      }
    };

    fetchData();
  }, [year, month]);

  const handleAdd = async (values) => {
    try {
      const newItem = await createIncome(values);
      setItems(prev => [...prev, newItem]); // Lisätään uusi rivi listoihin
    } catch (err) {
      console.error('Virhe lisättäessä tuloa:', err);
      toast({ title: 'Virhe lisättäessä tuloa', status: 'error', duration: 3000 });
    }
  };

  const handleDelete = async (item) => {
    try {
      await deleteIncome(item.id);
      setItems(prev => prev.filter(i => i.id !== item.id)); // Poistetaan oikea rivi
    } catch (err) {
      console.error('Poistaminen epäonnistui:', err);
      toast({ title: 'Virhe poistettaessa tuloa', status: 'error', duration: 3000 });
    }
  };

  const total = items.reduce((sum, item) => sum + Number(item.amount), 0);

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