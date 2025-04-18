const { getUserById } = require('../models/users')

const getProfile = async (req, res) => {
  console.log("Profiilipyynnön käyttäjä:", req.user)

  try {
    const user = await getUserById(req.user.id, {
      attributes: ['id', 'name', 'email']
    })
    if (!user) return res.status(404).json({ error: 'Käyttäjää ei löydy' })

    res.json(user)
  } catch (err) {
    console.error("Virhe profiilin haussa:", err)
    res.status(500).json({ error: 'Virhe haettaessa käyttäjätietoja' })
  }
}

const updateProfile = async (req, res) => {
  const { name, email } = req.body
  try {
    const user = await User.findByPk(req.user.id)
    if (!user) return res.status(404).json({ error: 'Käyttäjää ei löydy' })

    user.name = name || user.name
    user.email = email || user.email
    await user.save()

    res.json({ message: 'Tiedot päivitetty' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Virhe päivitettäessä tietoja' })
  }
}

module.exports = { getProfile, updateProfile }
