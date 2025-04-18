import { HStack, Button, Flex, Spacer, useColorModeValue } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const navBg = useColorModeValue('rgba(255,255,255,0.8)', 'rgba(26,32,44,0.8)')

  return (
    <Flex
      as="nav"
      bg={navBg}
      backdropFilter="saturate(180%) blur(10px)"
      px={{ base: 4, md: 8 }}
      py={4}
      position="sticky"
      top="0"
      zIndex="10"
      align="center"
    >
      <HStack spacing={{ base: 4, md: 8 }}>
        {[
          { to: '/', label: 'Etusivu' },
          { to: '/tulot', label: 'Tulot' },
          { to: '/menot', label: 'Menot' },
          { to: '/saasto', label: 'Säästö' },
          { to: '/profiili', label: 'Profiili' },
        ].map(({ to, label }) => (
          <Button
            key={to}
            as={NavLink}
            to={to}
            variant="ghost"
            size="md"
            _activeLink={{
              color: 'teal.600',
              borderBottom: '3px solid',
              borderColor: 'teal.600',
            }}
          >
            {label}
          </Button>
        ))}
      </HStack>
      <Spacer />
    </Flex>
  )
}
