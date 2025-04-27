import { useState, useEffect } from "react"
import {
  Box, Heading, Text, Button, Input, VStack, Spinner, useToast
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function ProfilePage() {
  const [user, setUser] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const toast = useToast()

  const token = localStorage.getItem("token")

  useEffect(() => {
    console.log("Token profiilihakua varten:", token)
    axios.get("https://budget-bunnies-backend-bsc6bvdrdffae7d6.northeurope-01.azurewebsites.net/api/user/me", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        setUser(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Virhe profiilin haussa:", err)
        if (err.response?.status === 401) {
          navigate("/login")
        } else {
          toast({ title: "Profiilin haku epäonnistui", status: "error", duration: 3000 })
          setLoading(false)
        }
      })
  }, [])

  const handleSave = () => {
    axios.put("/api/user/me", user, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        toast({ title: "Tiedot tallennettu", status: "success", duration: 3000 })
        setEditMode(false)
      })
      .catch(err => {
        console.error(err)
        toast({ title: "Virhe tallennuksessa", status: "error", duration: 3000 })
      })
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  if (loading || !user) return <Spinner size="xl" mt="100px" />

  return (
    <Box p={{ base: 4, md: 8 }}>
      <Heading size="lg" mb={4}>Profiili</Heading>

      {editMode ? (
        <VStack align="start" spacing={4}>
          <Input
            value={user.name}
            onChange={e => setUser({ ...user, name: e.target.value })}
            placeholder="Nimi"
          />
          <Input
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
            placeholder="Sähköposti"
          />
          <Button colorScheme="teal" onClick={handleSave}>Tallenna</Button>
        </VStack>
      ) : (
        <>
          <Text><strong>Nimi:</strong> {user.name}</Text>
          <Text><strong>Sähköposti:</strong> {user.email}</Text>

          <Button mt={4} variant="outline" onClick={() => setEditMode(true)}>
            Muokkaa tietoja
          </Button>
        </>
      )}

      <Button mt={6} colorScheme="teal" onClick={handleLogout}>
        Kirjaudu ulos
      </Button>
    </Box>
  )
}
