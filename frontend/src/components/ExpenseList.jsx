import {
  Table, Thead, Tbody, Tr, Th, Td, IconButton, Box
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { format } from 'date-fns'

export default function ExpenseList({ items, onDelete }) {
  if (!items.length) {
    return <Box>Ei menoja</Box>
  }
  return (
    <Table size="sm">
      <Thead>
        <Tr>
          <Th>Päivämäärä</Th><Th>Summa</Th><Th>Kategoria</Th><Th>Kuvaus</Th><Th>Poista</Th>
        </Tr>
      </Thead>
      <Tbody>
        {items.map(tx => (
          <Tr key={tx.id}>
            <Td>{format(new Date(tx.date), 'd.M.yyyy')}</Td>
            <Td>{Number(tx.amount).toFixed(2)}</Td>
            <Td>{tx.category}</Td>
            <Td>{tx.description || '-'}</Td>
            <Td>
              <IconButton
                size="sm"
                icon={<DeleteIcon />}
                colorScheme="red"
                onClick={() => onDelete(tx.id)}
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
