// frontend/src/components/ExpenseList.jsx
import {
    Table, Thead, Tbody, Tr, Th, Td, Box
  } from '@chakra-ui/react'
  
  export default function ExpenseList({ items }) {
    if (!items.length) {
      return <Box>Ei menoja</Box>
    }
    return (
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Päivä</Th><Th>Summa</Th><Th>Kategoria</Th><Th>Kuvaus</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map(tx => (
            <Tr key={tx.id || tx.date}>
              <Td>{tx.date}</Td>
              <Td>{tx.amount} €</Td>
              <Td>{tx.category}</Td>
              <Td>{tx.description || '-'}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    )
  }
  