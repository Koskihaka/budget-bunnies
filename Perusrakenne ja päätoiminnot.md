# Projektivaihe 2 – Perusrakenne ja päätoiminnot


## 1. Ympäristö
Sovellusta kehitetään ja suoritetaan paikallisesti kehitysympäristössä, joka sisältää sekä frontendin että backendin. Kehitysympäristönä käytetään Visual Studio Codea, jossa projektin kansiorakenne on selkeästi jaettu backend- ja frontend-kansioihin.

Versiohallintaan käytetään Git-työkalua ja projektin lähdekoodi on tallennettu GitHub-repositorioon, mikä tukee yhteistyötä ja mahdollistaa versionseurannan sekä palautumisen aiempiin vaiheisiin.

Sovelluksen käynnistys ja ylläpito tapahtuvat komentoriviltä, tyypillisesti erillisin komennoin frontend- ja backend-palvelimille (esim. npm run dev, node index.js).

Projektia ei ole vielä viety pilvipalveluun tai virtuaalikoneeseen, vaan se toimii täysin paikallisesti.

## 2. Backend


## 3. Frontend


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
