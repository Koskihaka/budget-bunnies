import { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { loginUser, registerUser } from '../api'
import { useAuth } from '../context/AuthContext'

export default function LoginPage({ register }) {
  const bg   = useColorModeValue('whiteAlpha.900', 'gray.700')
  const card = useColorModeValue('white', 'gray.800')
  const navigate = useNavigate()
  const { setToken } = useAuth()

  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]     = useState('')

  const handleSubmit = async () => {
    setError('')
    try {
      const fn = register ? registerUser : loginUser
      const body = register
        ? { name, email, password }
        : { email, password }
      const data = await fn(body)
      if (data.token) {
        setToken(data.token)
        navigate('/')
      } else {
        setError(data.message || 'Tuntematon virhe')
      }
    } catch {
      setError('Verkkovirhe, yritä uudelleen')
    }
  }

  return (
    <Flex
      minH="100vh"
      bgGradient="linear(to-br, teal.50, blue.50)"
      align="center"
      justify="center"
      p={4}
    >
      <Box
        bg={card}
        rounded="lg"
        shadow="lg"
        maxW="md"
        w="100%"
        p={8}
      >
        <Stack spacing={4} textAlign="center">
          <Heading size="lg" color="teal.600">
            {register ? 'Luo uusi tili' : 'Kirjaudu sisään'}
          </Heading>
          {register && (
            <FormControl id="name" isInvalid={!!error}>
              <FormLabel>Nimi</FormLabel>
              <Input
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </FormControl>
          )}
          <FormControl id="email" isInvalid={!!error}>
            <FormLabel>Sähköposti</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isInvalid={!!error}>
            <FormLabel>Salasana</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
          </FormControl>
          <Button
            colorScheme="teal"
            size="lg"
            onClick={handleSubmit}
          >
            {register ? 'Rekisteröidy' : 'Kirjaudu'}
          </Button>
          <Text fontSize="sm" color="gray.600">
            {register
              ? (
                <>
                  Onko sinulla jo tili?{' '}
                  <Link color="teal.500" as={RouterLink} to="/login">
                    Kirjaudu
                  </Link>
                </>
              )
              : (
                <>
                  Ei tunnusta?{' '}
                  <Link color="teal.500" as={RouterLink} to="/register">
                    Luo tili
                  </Link>
                </>
              )
            }
          </Text>
        </Stack>
      </Box>
    </Flex>
  )
}
