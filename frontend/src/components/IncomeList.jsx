import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { format } from "date-fns";
import { FaTrash } from "react-icons/fa";

export default function IncomeList({ items, onDelete }) {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Päivämäärä</Th>
          <Th>Nimi</Th>
          <Th>Summa (€)</Th>
          <Th>Poista</Th>
        </Tr>
      </Thead>
      <Tbody>
        {items.map((item) => (
          <Tr key={item.id}>
            <Td>{format(new Date(item.date), "d.M.yyyy")}</Td>
            <Td>{item.name}</Td>
            <Td>{item.amount}</Td>
            <Td>
              <IconButton
                icon={<FaTrash />}
                colorScheme="red"
                size="sm"
                onClick={() => onDelete(item)}
                aria-label="Poista"
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

