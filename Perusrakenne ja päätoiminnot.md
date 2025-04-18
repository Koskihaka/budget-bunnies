# Projektivaihe 2 – Perusrakenne ja päätoiminnot


## 1. Ympäristö

Sovellusta kehitetään ja suoritetaan paikallisesti kehitysympäristössä, joka sisältää sekä frontendin että backendin. Kehitysympäristönä käytetään Visual Studio Codea, jossa projektin kansiorakenne on selkeästi jaettu backend- ja frontend-kansioihin.

Versiohallintaan käytetään Git-työkalua ja projektin lähdekoodi on tallennettu GitHub-repositorioon, mikä tukee yhteistyötä ja mahdollistaa versionseurannan sekä palautumisen aiempiin vaiheisiin.

Sovelluksen käynnistys ja ylläpito tapahtuvat komentoriviltä, tyypillisesti erillisin komennoin frontend- ja backend-palvelimille:  
- Frontend käynnistyy Vite:llä komennolla `npm run dev`  
- Backend Node.js:llä komennolla `node src/index.js` tai `npx nodemon src/index.js`

Projektia ei ole vielä viety pilvipalveluun tai virtuaalikoneeseen, vaan se toimii täysin paikallisesti.

## 2. Backend

**Teknologia**: Sovelluksen backend on toteutettu Node.js-ympäristössä käyttäen Express.js-kehystä, mikä mahdollistaa REST API -rajapintojen luomisen tehokkaasti.

**API-rakenteet**: Backend palvelee frontendia REST-rajapinnan kautta. Käytössä on eri reititykset tuloille (/api/incomes), menoille (/api/expenses), säästöille (/api/savings), tapahtumille (/api/transactions) ja käyttäjähallinnalle (/api/auth).

**Tietoturva ja autentikointi**: Käyttäjien kirjautuminen ja rekisteröityminen on toteutettu, ja järjestelmä tukee JWT (JSON Web Token) -autentikointia suojattujen resurssien käyttämiseen.

**Tietokantayhteys**: Backend on yhdistetty PostgreSQL-tietokantaan, ja tietomallit on rakennettu relaatiopohjaisesti. Yhteys hoidetaan erillisen `db.js`-tiedoston kautta (varmistettu, että käytössä ei ole esim. `config/db.js`, kuten aiemmin mainittiin).

**Tietomallit ja migraatiot**: Tietokannan skeema on määritelty `models`-kansiossa. Tietorakenteet on luotu migraatiotiedostoilla, jotka varmistavat versionhallinnan ja rakenteiden yhdenmukaisuuden (migrations/-kansiossa mm. `create-users.js`, `create-transactions.js` jne.).

**Ohjelmointikieli**: Backend on kirjoitettu JavaScriptillä.

**Virheenkäsittely**: Reitityksissä ja ohjaimissa on käytössä virheenkäsittelylogiikka, joka palauttaa sopivat HTTP-statukset ja viestit virhetilanteissa (esim. 400, 401, 500).

**Tiedostorakenne**:
- **controllers/**: Logiikka kunkin resurssin käsittelyyn (incomes, expenses jne.)
- **routes/**: Reititykset, jotka yhdistävät HTTP-pyynnöt oikeaan controlleriin
- **models/**: Tietokantataulujen määrittely
- **config/**: Yhteydet tietokantaan ym. asetukset
  
## 3. Frontend

Sovelluksen frontend on toteutettu Reactilla. Valinta perustuu sen komponenttipohjaiseen arkkitehtuuriin ja hyvään skaalautuvuuteen modernien käyttöliittymien kehityksessä.

**Käyttöliittymä**: Rakennettu selkeästi jäsennellyillä React-komponenteilla. Käytössä on erillisiä lomake- ja listakomponentteja (esim. `IncomeForm.jsx`, `ExpenseList.jsx`), jotka mahdollistavat tulojen, menojen ja säästöjen hallinnan. `DashboardPage.jsx` kokoaa käyttäjän taloustilanteen yhteen näkymään.

**Navigointi ja reititys**: Käytössä on React Router, jonka avulla hallitaan näkymien välistä siirtymistä (esim. /login, /income, /expenses, /dashboard). Käyttäjän autentikointi frontendissä: Käytössä on `AuthContext`, joka hallinnoi käyttäjän kirjautumistilaa ja suojaa tietyt reitit (`ProtectedRoute.jsx`).

**Viestintä backendiin**: Tiedon haku ja lähetys backendille tehdään `api.js`-tiedostossa määritellyillä funktioilla käyttäen axios-kirjastoa.

**Ulkoasu ja tyyli**: Tyylit on toteutettu CSS-tiedostoilla (`App.css`, `index.css`), ja sovelluksen ulkoasu pyritty pitämään selkeänä ja helppokäyttöisenä. Lisäksi käyttöliittymässä hyödynnetään Chakra UI -kirjastoa komponenttien tyylitykseen ja responsiivisuuteen.

**Tiedostorakenne**:
- **components/**: Yksittäiset uudelleenkäytettävät komponentit (lomakkeet, listat, näkymät)
- **pages/**: Kokonaiset näkymät tai reititetyt sivut
- **context/**: Sovelluksen tilanhallintaan liittyvä logiikka (esim. kirjautuminen)
- **assets/**: Kuvakkeet ja visuaaliset elementit

**Työkalut ja kehitysympäristö**: Frontend-projekti on luotu Vite-työkalulla, joka mahdollistaa nopean kehityskokemuksen. ESLint on käytössä koodin laadun tarkkailuun (`eslint.config.js`).


## 4. Tietokanta

Sovelluksessa käytetään relaatiotietokantaa PostgreSQL. Valinta perustuu seuraaviin perusteluihin:

Tietorakenne on relaatiopohjainen, sillä sovelluksessa hallitaan käyttäjiä, tuloja, menoja ja säästötavoitteita, joilla on selkeät suhteet toisiinsa (esim. user_id viittauksena käyttäjän tietoihin).

PostgreSQL tukee tehokkaita kyselyitä, viite-eheyksiä ja tietoturvaa, jotka ovat olennaisia käyttäjätietojen ja taloustietojen hallinnassa.
Tietokanta on yhteydessä Node.js- ja Express-pohjaiseen backend-palvelimeen, jonka avulla voidaan tehdä autentikoituja REST-kutsuja (esim. GET /api/incomes, POST /api/savings).

PostgreSQL on avoin, laajasti tuettu ja tuotantokäyttöön soveltuva tietokanta, joka skaalautuu ja toimii hyvin projektin vaatimustasolla.

Käytännön tasolla tietokanta luodaan migraatiotiedostojen avulla (esim. create-users, create-transactions), mikä mahdollistaa versionhallinnan tietomallille. Tiedot haetaan ja käsitellään backendissä, ja ne esitetään frontendissä Reactin avulla.

## 5. Perusrakenne ja arkkitehtuuri


## 6. Toiminnot


## 7. Koodin laatu ja dokumentointi


## 8. Testaus ja virheenkäsittely


## 9. Käyttöliittymä ja vuorovaikutus
