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

Sovellus on jaettu frontend- ja backend-osuuksiin, jotka keskustelevat keskenään RESTful API:n kautta. Arkkitehtuuri noudattaa modernia, komponenttipohjaista lähestymistapaa, joka tukee sovelluksen skaalautuvuutta ja ylläpidettävyyttä.

### Yleiskuvaus

**Frontend** on rakennettu Reactin ympärille. Komponenttipohjainen rakenne mahdollistaa koodin uudelleenkäytön, helpottaa ylläpitoa ja tukee uusien ominaisuuksien hallittua lisäämistä. Navigointi eri näkymien välillä toteutetaan React Routerilla, ja käyttöliittymän tyylitys sekä responsiivisuus on hoidettu Chakra UI -kirjaston avulla. Frontendin ja backendin välinen viestintä hoidetaan axios-kirjastolla.

**Backend** on toteutettu Node.js:n ja Express.js:n avulla. Se vastaa käyttäjien autentikoinnista (JWT), tietojen käsittelystä ja tallennuksesta PostgreSQL-tietokantaan. Backend toimii REST API -rajapinnan kautta ja palauttaa tarvittavan datan frontendille. Tietomallit on suunniteltu relaatiopohjaisiksi, ja niiden hallinta hoidetaan SQL-migraatioiden avulla.

### Rakenne ja moduulit

#### Frontend

- **Komponentit**: näkymät, lomakkeet, listat yms.
- **Tyylitys**: Chakra UI
- **Navigointi**: React Router
- **Tiedonhaku**: axios

#### Backend

- **Kansiot**: `routes/`, `controllers/`, `models/`, `config/`
- **Controllerit**: käsittelevät pyynnöt ja vastaavat oikeaan logiikkaan
- **Reitit**: yhdistävät HTTP-pyynnöt oikeisiin controllereihin
- **Tietokanta**: PostgreSQL, yhteydet määritetty `db.js`-tiedostossa
- **Migraatiot**: varmistavat rakenteiden yhdenmukaisuuden ja versionhallinnan


### Arkkitehtuurin keskeiset periaatteet

- **Modulaarisuus**: Selkeä jako frontendin ja backendin osiin sekä näiden sisäinen modulaarinen rakenne mahdollistaa sovelluksen hallitun kasvun.
- **Tietokanta**: Relaatiopohjainen PostgreSQL mahdollistaa tehokkaan ja turvallisen tietojen tallennuksen.
- **Autentikointi**: JWT-tunnisteilla suojataan suojatut reitit ja käyttäjän istunto.
- **Virheenkäsittely**: Virhetilanteet käsitellään HTTP-statuksilla (esim. 400, 401, 500) ja selkeillä virheilmoituksilla. Tämä parantaa käyttäjäkokemusta ja helpottaa sovelluksen debuggausta.


### Skaalautuvuus

- **Frontendin skaalautuvuus**: Komponenttipohjainen rakenne tukee sovelluksen kasvua ja helpottaa uusien näkymien ja ominaisuuksien lisäämistä.
- **Backendin skaalautuvuus**: Uusia reittejä ja toimintoja voidaan lisätä helposti `controller`- ja `routes`-kansioihin. Rakenteen selkeys tukee ylläpitoa ja jatkokehitystä.


## 6. Toiminnot

Sovellus tarjoaa seuraavat keskeiset toiminnot käyttäjän henkilökohtaisen talouden hallintaan:

### Käyttäjänhallinta

- **Rekisteröityminen ja kirjautuminen**  
  Käyttäjä voi luoda tilin ja kirjautua sisään. Autentikointi hoidetaan JWT-tokenin avulla.

  ![image](https://github.com/user-attachments/assets/0278e307-f30f-475b-af10-3edc17715f7d)

  
- **Suojatut reitit**  
  Käyttäjä pääsee dashboardiin vain kirjautumisen jälkeen. Token tarkistetaan jokaisessa pyynnössä:  
  ```js
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  ```

- **Profiilin tarkastelu ja muokkaus**  
  Käyttäjä voi tarkastella ja päivittää nimeään ja sähköpostiosoitettaan `ProfilePage.jsx`-näkymässä:  
  ```js
  <Input value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
  ```

![image](https://github.com/user-attachments/assets/3f35e318-9454-4b5f-ad2e-a0120e34f07e)


### Päivittäinen rahankäytön seuranta kalenterin avulla

- **Kalenterinäkymä**  
  Jokainen kuukauden päivä näkyy `CalendarView`-komponentissa. Käyttäjä voi klikata päivää ja kirjata siihen kulutuksen:  
  ```js
  onDayClick={day => {
    setSelectedDate(day)
    onOpen()
  }}
  ```

  ![image](https://github.com/user-attachments/assets/19786751-9879-495d-aede-d704f37126c9)
  

- **Kulutuksen kirjaaminen ja säästöpäivä**  
  Käyttäjä syöttää päiväsumman tai valitsee "Ei käytetty rahaa" -napin, joka tallentaa nollakulutuksen:  
  ```js
  <Button onClick={() => { setAmount('0'); setTimeout(handleSave, 0) }}>
    Ei käytetty rahaa
  </Button>
  ```

- **Tallennus backendille**  
  Päivämäärä ja summa lähetetään tietokantaan Axios-pyynnöllä:  
  ```js
  await axios.post('/api/transactions', { date: formattedDate, amount: parsedAmount })
  ```

### Tulojen ja menojen hallinta

- **Lisäys omilla lomakkeilla**  
  Käyttäjä voi lisätä tuloja ja menoja erillisillä näkymillä (`/tulot`, `/menot`), joissa on omat lomakkeensa tiedon syöttöön.

  ![image](https://github.com/user-attachments/assets/70447709-e7c2-44a4-80db-ebdad539dad6)

  ![image](https://github.com/user-attachments/assets/1ff6a45d-add0-40d4-9580-bb20e595bf02)



- **Tapahtuman tiedot**  
  Kukin tapahtuma sisältää summan, kuvauksen ja päivämäärän:
  ```json
  {
    "amount": 2500,
    "category": "Palkka",
    "date": "2025-04-01",
    "description": "Kuukausipalkka"
  }
  ```

- **Tallennus tietokantaan**  
  Tiedot tallennetaan PostgreSQL-tietokantaan käyttäjäkohtaisesti (`user_id`).

- **Yhteenveto dashboardissa**  
  Kalenterinäkymässä näkyy päivittäiset kulutukset ja vihreät merkinnät osoittavat säästöpäiviä.


### Säästötavoitteet

- Käyttäjä voi asettaa säästötavoitteen.
- Dashboardilla näkyvä progressiivinen palkki kertoo reaaliajassa, kuinka paljon tavoitteesta on saavutettu.

  ![image](https://github.com/user-attachments/assets/dff16bca-7635-44f8-b96a-01a1d3f5d749)



### Visualisointi ja yleiskuva

- Kalenterinäkymä tarjoaa nopean kokonaiskuvan kulutuspäivistä ja säästöpäivistä.
- Värikoodaus auttaa tulkitsemaan tilannetta visuaalisesti – esim. vihreä väri tarkoittaa, että rahaa ei ole käytetty kyseisenä päivänä.




### Toteuttamatta jääneet ominaisuudet

Sovelluksen toteutuksessa tapahtui muutoksia alkuperäiseen suunnitelmaan nähden. Seuraavat toiminnallisuudet jäivät pois tai toteutettiin suppeampina:

- **Budjetointi**: Budjetointiominaisuus, joka oli alun perin suunniteltu, jäi pois tästä versiosta.
- **Perhetoiminnot**:  
  - Tietojen jakaminen toiselle käyttäjälle (esim. puoliso tai huoltaja)  
  - Lapsen säästötavoitteen lisääminen
  - Ulkoasu
      - Käyttöliittymän visuaalinen ilme jäi yksinkertaisemmaksi kuin alkuperäisessä suunnitelmassa hahmoteltiin.
  - Rajalliset integraatiot
      - Toiminnallisuudet eivät vielä keskustele täysin keskenään. Esimerkiksi:
      - Kalenteriin syötetty käytetty rahasumma ei siirry automaattisesti menot-näkymään.


## 7. Koodin laatu ja dokumentointi

### Koodin jäsenneltävyys ja luettavuus

Projektissa on pyritty selkeään ja loogiseen rakenteeseen, jossa frontend ja backend on eroteltu omiin kansioihinsa.

Sovelluksen koodi on jaettu modulaarisesti:

**Frontendissä:**
- Komponentit sijaitsevat kansiossa `components/` (esim. `CalendarView.jsx`, `SavingsProgress.jsx`)
- Sivu- ja näkymäkohtaiset komponentit ovat `pages/`-kansiossa (esim. `DashboardPage.jsx`, `ProfilePage.jsx`)
- Tilanhallintaan liittyvä logiikka sijaitsee `context/`-kansiossa

**Backendissä:**
- `routes/`, `controllers/`, `models/` ja `config/`-kansiot eriyttävät selkeästi reitityksen, käsittelylogiikan ja tietokantatoiminnot

Nimeämiskäytännöt ovat kuvaavia ja englanninkielisiä, mikä helpottaa ylläpitoa ja yhteistyötä.

### Koodin validointi ja tarkistus

Frontend-projekti on luotu Vite-työkalulla, ja laadunvarmistukseen käytetään ESLint-työkalua.

Projektissa on määritelty omat tarkistussäännöt tiedostossa `eslint.config.js`, joka auttaa pitämään:
- yhtenäisen koodityylin
- ylimääräiset muuttujat tai virheelliset importit kurissa
- automaattisesti varoittaa mahdollisista virheistä jo koodausvaiheessa

### Kommentointi ja sisäinen dokumentointi

Koodin ymmärrettävyyttä tukevat lyhyet kommentit, erityisesti backendissä.

Controller-funktioiden alkuun on lisätty selityksiä toiminnasta.

### Ulkoinen dokumentaatio

Projektin juurikansiossa on `README.md`, `Määrittely ja suunnittelu.md` ja `Perusrakenne ja päätoiminnot.md` jotka sisältää:
- Lyhyen kuvauksen sovelluksesta
- Kehitysympäristön käynnistysohjeet
- Kuvauksen frontendin ja backendin välisestä yhteydestä
- Mahdollisesti tuleva API-dokumentaatio (esim. käytettävät reitit `/api/auth`, `/api/transactions`, jne.)
- Ajankäytön seurannan

### Versionhallinta

Projektissa käytetään Git-versiohallintaa, ja kaikki koodi on tallennettu GitHub-repositorioon.

- Tiedostohistoriaa voidaan tarkastella selkeästi ja kehityksen edistymistä seurataan commit-viestien avulla
- Kehitystiimi käyttää ominaisuushaaroja (feature branches) ja hallinnoi yhdistämiset päähaaraan (`main`) hallitusti

## 8. Testaus ja virheenkäsittely

### Manuaalinen testaus

Sovelluksen keskeiset toiminnot on testattu manuaalisesti käyttöliittymän kautta:

- Käyttäjän rekisteröinti, kirjautuminen ja uloskirjautuminen  
- Tulojen, menojen ja säästöpäivien lisääminen ja tarkastelu  
- Kalenteripäivien klikkaaminen ja tapahtuman lisääminen eri summilla (myös 0 €)  
- Profiilisivun muokkaaminen  
- Säästötavoitteen etenemisen tarkastelu dashboardissa  

Virhetilanteita testattiin mm. seuraavilla tavoilla:

- Kirjautuminen virheellisellä salasanalla → virheilmoitus  
- Kirjautuminen ilman tokenia → uudelleenohjaus /login-sivulle  
- Kalenteriin tallennus ilman summaa → virheilmoitus  
- Syötettiin negatiivisia tai virheellisiä summia → estettiin tallennus  

### Virheenkäsittely frontendissä

Frontendissä API-kutsut on ympäröity `try-catch`-lohkoilla. Käyttäjälle näytetään selkeitä virheilmoituksia toast-viesteinä Chakra UI:n `useToast`-keksin avulla.  

Esimerkiksi `DashboardPage.jsx`-tiedostossa tallennusnappi antaa palautetta onnistumisesta tai virheestä.  

### Virheenkäsittely backendissä

Backendissä käytetään selkeitä HTTP-statuskoodeja ja virheilmoituksia JSON-muodossa. Esimerkiksi:

- **400 Bad Request**: kun vaadittu tieto puuttuu  
- **401 Unauthorized**: puuttuva tai virheellinen JWT-token  
- **404 Not Found**: kun resurssia ei löydy  
- **500 Internal Server Error**: yleinen virhetilanne  

### Mahdollinen yksikkötestaus

Tässä vaiheessa sovellukseen ei ole vielä kirjoitettu automaattisia yksikkötestejä (esim. Jest, Vitest tai Supertest), vaan painopiste on ollut toiminnallisuuden varmistamisessa manuaalisin testein.  

Jatkokehityksessä voitaisiin kirjoittaa yksikkötestejä erityisesti:

- backendin API-reiteille (esim. `POST /api/transactions`)  
- tulo- ja menolomakkeiden validoinnille frontendissä  


## 9. Käyttöliittymä ja vuorovaikutus

### Käyttöliittymän rakenne

Sovellus koostuu useista näkymistä, joihin käyttäjä navigoi yläpalkin avulla. Navigointi on toteutettu React Router -kirjastolla, ja suojatut näkymät on suojattu kirjautumistilanteen mukaan `ProtectedRoutes`-komponentilla.

### Sovelluksen päänäkymät:

- `/login` – Kirjautumissivu  
- `/register` – Rekisteröitymissivu (sama komponentti eri tilassa)  
- `/` – Dashboard eli etusivu kirjautuneelle käyttäjälle  
- `/tulot` – Tulot-näkymä  
- `/menot` – Menot-näkymä  
- `/saasto` – Säästötavoitteen näkymä  
- `/profiili` – Käyttäjän omat tiedot ja uloskirjautuminen  

Navigointi toteutetaan `Navbar`-komponentilla, jossa käytetään `NavLink`-elementtejä.

### Käyttäjäpolku ja vuorovaikutus

Uusi käyttäjä aloittaa rekisteröitymällä. Tämän jälkeen hän kirjautuu sisään ja saa käyttöönsä koko sovelluksen toiminnallisuudet.

Kirjautumisen jälkeen käyttäjä ohjataan automaattisesti Dashboard-näkymään.

Tietojen lisäys tapahtuu lomakkeilla ja modaalien kautta. Esimerkiksi kalenterin päivää klikkaamalla avautuu `modal`-komponentti, jossa käyttäjä voi syöttää summan tai merkitä, ettei rahaa käytetty.

### Visuaalinen tyyli ja käytetyt UI-kirjastot

Käyttöliittymä on rakennettu käyttäen **Chakra UI** -kirjastoa, joka tarjoaa valmiita komponentteja ja teemoituksen:

- Väriteemana käytetään vaaleita ja tummia tiloja `useColorModeValue`-hookin avulla  
- Kalenterinäkymässä vihreä tausta kertoo säästöpäivästä  
- Käytetty summa näytetään kalenteripäivän yhteydessä  

### Käyttökokemuksen parantaminen

Käyttökokemusta (UX) parannetaan monin tavoin:

- Automaattinen focus lomakekenttiin modalin avautuessa  
- Oletusarvot ja nollaus: esimerkiksi kalenterinäkymässä lomake nollautuu automaattisesti  
- Toast-ilmoitukset antavat käyttäjälle palautetta kaikista toimista (onnistuminen/virhe)  
- Modaalit vähentävät turhia näkymänvaihtoja ja pitävät käyttökokemuksen sulavana  
- Esteettömyys huomioitu Chakra UI:n oletusarvoilla (esim. painikkeiden kontrastit, näppäimistökäyttö)  

### Esimerkkinäkymät (liitettävissä dokumenttiin):

- Kalenterinäkymä, jossa päivät näkyvät ja tapahtumat kirjataan  
- Profiilin muokkausmodal  
- Tulojen ja menojen lomakkeet  
- Toast-viesti tallennuksesta  

