// frontend/src/components/SharedGoalsList.jsx
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'

export default function SharedGoalsList({ items }) {
  if (!items.length) {
    return <Box>Ei jaettuja tavoitteita</Box>
  }
  return (
    <Table size="sm">
      <Thead>
        <Tr><Th>Käyttäjä</Th><Th>Tavoite</Th><Th>Säästetty</Th></Tr>
      </Thead>
      <Tbody>
        {items.map(i => (
          <Tr key={i.fromUserId}>
            <Td>{i.fromUserName || i.fromUserEmail}</Td>
            <Td>{i.goal} €</Td>
            <Td>{i.saved} €</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
