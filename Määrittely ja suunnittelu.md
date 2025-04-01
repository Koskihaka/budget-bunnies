# Projektin 1. vaihe: Määrittely ja suunnittelu

Tavoitteena on luoda perheille suunnattu sovellus, joka tekee talouden hallinnasta helppoa ja motivoivaa. Sovellus auttaa rakentamaan taloudellista vakautta, säästämään tulevaisuutta varten ja tukee koko perheen osallistumista rahankäytön suunnitteluun.
Sovelluksen keskeisiä ominaisuuksia ovat tulojen ja menojen seuranta, säästötavoitteiden asettaminen, budjetin luominen sekä selkeät visuaaliset näkymät taloustilanteesta. Lisäksi sovellus tarjoaa mahdollisuuden perheenjäsenten yhteiskäyttöön ja toimii työkaluna myös talouskasvatuksessa lapsille.
Käyttöliittymä suunnitellaan kiireiseen arkeen sopivaksi: sen tulee olla nopea, selkeä ja helposti ymmärrettävä. Näin sovellusta on mahdollista käyttää säännöllisesti myös silloin, kun aikaa on vähän. Sovelluksen tavoitteena on madaltaa kynnystä talouden hallintaan ja tukea perheitä pitkällä aikavälillä.

## Käyttäjäpersoonat
Projektissa on määritelty kolme erilaista käyttäjäpersoonaa, jotka edustavat sovelluksen keskeisiä kohderyhmiä erilaisissa elämäntilanteissa. Yhteistä heille on halu parantaa omaa tai perheensä taloudellista tilannetta ja tarve saada käyttöönsä selkeä, helppokäyttöinen työkalu arjen rahankäytön hallintaan.

**Marjaana**, 40-vuotias kouluterveydenhoitaja, edustaa työssäkäyvää perheellistä käyttäjää, joka haluaa seurata perheen menoja ja tuloja sekä opettaa lapsilleen talousasioita. Hän arvostaa visuaalisesti selkeää käyttöliittymää ja haluaa nähdä kuukausittaisen budjetin yhdellä silmäyksellä.

**Sara**, 21-vuotias myyjä ja yksinhuoltaja, on juuri aloittanut työelämän. Hänellä ei ole vielä pitkää kokemusta taloudenhallinnasta, mutta hän haluaa oppia suunnittelemaan arjen menot paremmin ja turvata lapsensa tulevaisuuden. Hän kaipaa yksinkertaista, helposti lähestyttävää sovellusta, jota voi käyttää nopeasti työn ja arjen keskellä.

**Mikko**, 35-vuotias työtön kahden lapsen isä, elää taloudellisesti tiukkaa arkea. Hän pyrkii hallitsemaan velkojaan ja löytämään keinoja säästää, vaikka resurssit ovat rajalliset. Mikolle on tärkeää, että sovellus motivoi ja tukee hänen pyrkimystään rakentaa taloudellisesti vakaampi tulevaisuus perheelleen.

Nämä käyttäjäpersoonat auttavat hahmottamaan sovelluksen todelliset käyttötarpeet ja varmistamaan, että lopputulos palvelee aidosti niitä ihmisiä, joille sovellus on suunnattu.
Alla on esitetty visuaaliset käyttäjäpersoonakortit, joissa kuvataan tarkemmin kunkin käyttäjän tausta, tavoitteet ja käyttötavat.

<img src="https://github.com/user-attachments/assets/b58b4683-123b-498f-8c8e-377f41653836" width="500"/> <img src="https://github.com/user-attachments/assets/def433e4-f914-4cdb-a4b7-db4961194cae" width="500"/> <img src="https://github.com/user-attachments/assets/09cabab1-255b-47e7-be92-37194e3cb9e1" width="500"/>

## Käyttötapaukset ja käyttötilanteet

Sovelluksen käyttötapaukset pohjautuvat käyttäjäpersoonien arkeen ja tarpeisiin. Kaikille käyttäjille yhteistä on tarve hallita arjen rahankäyttöä ja hahmottaa oma taloudellinen tilanne. Alla on kuvattu keskeiset käyttötapaukset vaiheittain.

**Käyttötapaus 1:** Päivittäisen rahankäytön seuraaminen kalenterinäkymässä
Tavoite: Käyttäjä seuraa arjen kulutustaan päiväkohtaisesti ja saa visuaalista palautetta säästämisestä tai rahan käytöstä.

Vaiheet:
- Käyttäjä avaa sovelluksen ja näkee etusivulla kalenterinäkymän.
- Käyttäjä klikkaa haluamaansa päivää ja syöttää käytetyn rahasumman.
- Päivämäärään ilmestyy merkintä käytetystä summasta.
- Päivät, jolloin ei ole käytetty rahaa, näkyvät vihreällä ikonilla ja kannustavat säästämiseen.
- Kalenterinäkymän alla oleva säästötavoitteen palkki päivittyy automaattisesti, jos kulutuksella on vaikutusta tavoitteeseen.

Jälkitilanne:
- Käyttäjä näkee nopeasti, minä päivinä rahaa on käytetty ja minä päivinä ei.
- Käyttäjä voi hahmottaa arjen kulutustottumuksiaan ja motivoitua säästämiseen.
- Säästötavoitteen visuaalinen eteneminen tuo palautetta käyttäytymisestä.

**Käyttötapaus 2: Tulojen ja menojen lisääminen perhekohtaisesti**
Tavoite: Käyttäjä lisää sovellukseen omat tai perheenjäsenen tulot ja menot, jotta sovellus voi näyttää ajantasaisen kokonaistilanteen ja tukea talouden hallintaa.

Vaiheet – Tulojen lisääminen
- Käyttäjä siirtyy Tulot-välilehdelle.  
- Käyttäjä tarkistaa olemassa olevat tuloerät (esim. palkka, etuudet).  
- Käyttäjä painaa "Lisää tulo" -painiketta oman tiliotsikkonsa alla (Tulot 1 tai Tulot 2).
- Käyttäjä syöttää uuden tulon nimen ja summan.
- Sovellus päivittää automaattisesti yksittäisen käyttäjän tuloyhteenvedon sekä kaikkien käyttäjien "Kaikki tulot yhteensä" -summan.
- Käyttäjä voi myös lisätä yhteisen tulon alempana olevasta kohdasta.

Vaiheet – Menojen lisääminen
- Käyttäjä siirtyy Menot-välilehdelle.
- Käyttäjä tarkastelee olemassa olevia menoeriä (esim. vuokra, sähkö, ruoka).
- Käyttäjä painaa "Lisää meno" -painiketta.
- Käyttäjä syöttää uuden menoerän nimen ja summan.
- Sovellus päivittää "Kaikki menot yhteensä" -summan automaattisesti.
- Käyttäjä voi halutessaan jakaa menot toisen henkilön kanssa valitsemalla "Jaa".

Jälkitilanne:
- Sovellus näyttää kokonaissummat sekä tuloille että menoille ja mahdollistaa vertailun.
- Käyttäjät voivat helposti seurata, kuinka paljon rahaa on tullut ja kuinka paljon sitä on kulunut.

**Käyttötapaus 3:** Budjetin laatiminen ja seuraaminen
Tavoite: Käyttäjä laatii kuukausibudjetin eri menoerille ja seuraa, miten hyvin toteutunut kulutus pysyy asetetuissa rajoissa.

Vaiheet:
- Käyttäjä siirtyy "Budjetointi"-näkymään.
- Käyttäjä valitsee budjetoitavan ajanjakson (esimerkiksi kuukausi).
- Käyttäjä määrittää budjettirajat eri menoerille, kuten ruoka, asuminen ja vapaa-aika.
- Käyttäjä tallentaa budjetin.
- Sovellus seuraa automaattisesti, miten toteutunut kulutus etenee suhteessa budjettiin.
- Käyttäjä saa visuaalista palautetta, kuten prosenttikehitystä tai värikoodattuja ilmaisimia.

Jälkitilanne:
- Käyttäjä näkee, kuinka hyvin hän on pysynyt budjetissaan eri osa-alueilla.
- Ylitykset ja alitukset tulevat selkeästi esiin visuaalisessa esityksessä.
- Budjetointi tukee suunnitelmallista rahankäyttöä ja taloudellisten tavoitteiden saavuttamista.

**Käyttötapaus 4:** Säästötavoitteen asettaminen ja seuraaminen
Tavoite: Käyttäjä asettaa henkilökohtaisen tai perhekohtaisen säästötavoitteen ja seuraa sen etenemistä sovelluksessa.

Vaiheet:
- Käyttäjä siirtyy "Säästö"-välilehdelle.
- Käyttäjä näkee nykyisen henkilökohtaisen säästötavoitteensa sekä kuinka paljon hän on jo säästänyt.
- Käyttäjä painaa "Muuta"-painiketta tavoitteen tai säästömäärän alla.
- Käyttäjä syöttää uuden tavoitesumman tai päivittää jo säästöön kertynyttä summaa.
- Sovellus tallentaa tiedot ja päivittää näkymän vastaamaan uutta tilannetta (esim. tavoite 200 €, säästössä 150 €).
- Käyttäjä voi halutessaan syöttää ja seurata lasten säästötavoitteita erikseen ("Lapsi 1 tavoite", "Lapsi 2 tavoite").
- Käyttäjä voi myös valita "Jaa tavoite toisen henkilön kanssa", jolloin tavoitteesta tulee yhteinen ja sitä voidaan seurata yhdessä.

Jälkitilanne:
Sovellus näyttää selkeästi, paljonko tavoitesummasta on saavutettu.
Käyttäjä motivoituu jatkamaan säästämistä ja näkee konkreettisesti edistymisensä.

## Käyttöliittymän prototyyppi

Sovelluksesta on laadittu Figmaan käyttöliittymäprototyyppi, joka havainnollistaa sovelluksen päätoimintoja ja visuaalista ilmettä. Prototyyppi perustuu esteettiseen, minimalistiseen ja helppokäyttöiseen suunnitteluun, jossa käyttäjän toiminnan selkeys ja käytettävyyden johdonmukaisuus ovat keskiössä. Huom! Prototyypistä puuttuu vielä tässä vaiheessa budjetointi mahdollisuus. Tässä on linkki figmaan: https://www.figma.com/design/xVtUNE2t3d4yJzqR7cTfa5/Budjetti?node-id=2-53&t=XeySvpbg9FQyt5p0-0

Navigaatio on sijoitettu yläreunaan, ja sen kautta käyttäjä pääsee siirtymään eri näkymien välillä. Navigaatiopalkki on näkyvissä kaikilla sivuilla, mikä lisää sovelluksen johdonmukaisuutta. Palkissa on myös käyttäjäikoni, josta pääsee tarkastelemaan omia tietoja ja asetuksia. Painikkeissa on käytetty selkeää värikoodausta: hover-tilassa painike tummenee 20 % ja aktiivisessa tilassa 40 %. Tämä tarjoaa käyttäjälle visuaalista palautetta ja vahvistaa hallinnan tunnetta.

Etusivulla on kalenterinäkymä, johon käyttäjä voi lisätä päiväkohtaisia kuluja. Päivät, jolloin ei ole käytetty rahaa, korostuvat vihreällä ikonilla kannustaen säästämiseen. Päivämäärän hover-efekti tuo esiin kyseisen päivän vihreällä reunuksella, joka parantaa käytettävyyttä. Säästötavoitteiden eteneminen näkyy visuaalisena palkkina etusivulla, mikä auttaa käyttäjää hahmottamaan oman taloudellisen kehityksensä reaaliajassa.

Etusivu:

<img src="https://github.com/user-attachments/assets/5a6f8e9e-bb3a-47a0-80e2-712c007ec79f" width="200"/>

Tulojen hallinta on toteutettu erillisessä välilehdessä, jossa käyttäjä voi lisätä tuloja ja tarkastella niitä. Osio täyttää monia käytettävyyden heuristiikkoja, kuten tilan näkyvyys, tosielämän vastaavuus ja virheiden estäminen. Lomakkeet ilmoittavat virheistä selkeästi, ja esimerkiksi negatiivisen summan lisääminen estetään näkyvällä varoituksella.

Tulot välilehti:

<img src="https://github.com/user-attachments/assets/8ef88c60-1f42-49c6-a826-21e521db7ad8" width="200"/>

Muissa välilehdissä, kuten Menot ja Säästö, on noudatettu samoja suunnitteluperiaatteita. Käyttöliittymä säilyy läpi sovelluksen visuaalisesti rauhallisena ja informatiivisena. Vähemmän käytetyt osiot on piilotettu valikon taakse, mikä tukee minimalistista käyttöliittymäsuunnittelua.

Menot ja säästö välilehdet:

<img src="https://github.com/user-attachments/assets/27413648-2e50-45af-b9e5-cba5803aee70" width="200"/>   <img src="https://github.com/user-attachments/assets/0b73cf44-6682-4591-a3e3-e184adc297da" width="200"/>

Virhetilanteet on otettu huomioon siten, että sovellus antaa välittömän palautteen ja auttaa käyttäjää korjaamaan tilanteen. Tämä lisää sovelluksen luotettavuutta ja käytettävyyttä erityisesti tilanteissa, joissa käyttäjä tekee inhimillisiä virheitä.

Esimerkit virhetilanteista:

<img src="https://github.com/user-attachments/assets/eccc8e60-8ec1-4226-9461-d38ac503683b" width="200"/> <img src="https://github.com/user-attachments/assets/9a8c5da0-9e57-494d-980c-cc64282b1898" width="200"/>

## Tietoarkkitehtuuri ja tekninen suunnittelu

Tässä vaiheessa tavoittelemme sovelluksen toteutuksessa arvosanan 5 vaatimuksia. Tavoitteena on rakentaa pilvipohjainen web-sovellus, jossa on selkeä tietoarkkitehtuuri, moderni käyttöliittymä ja toimiva taustajärjestelmä. Mikäli aika tai resurssit eivät riitä täyteen toteutukseen, teknistä ratkaisua voidaan keventää esimerkiksi tiedon tallennuksen ja ympäristön osalta.

Sovelluksen tietoarkkitehtuuri perustuu kolmeen pääosaan: tulot, menot ja säästötavoitteet. Kaikki tiedot liittyvät yksittäiseen käyttäjään ja ajankohtaan. Tiedot tallennetaan relaatiopohjaiseen tietokantaan, jossa on erilliset taulut käyttäjätiedoille, tapahtumille ja tavoitteille. Arkkitehtuuri tukee myös yhteiskäyttöominaisuutta, jossa esimerkiksi perheenjäsenet voivat jakaa säästötavoitteita tai nähdä yhteisiä menoja.

Käyttöliittymä toteutetaan Reactilla, ja se rakennetaan uudelleenkäytettävistä komponenteista (esim. kalenteri, syöttölomakkeet, etenemispalkki). Frontend keskustelee taustajärjestelmän kanssa REST API -kutsujen kautta. Sovellus suunnitellaan responsiiviseksi, joten se toimii sekä tietokoneella että mobiililaitteilla.

Taustajärjestelmä toteutetaan Node.js:n ja Expressin avulla. Backend tarjoaa käyttöliittymälle rajapinnan tietojen tallentamiseen ja hakemiseen. Käyttäjän syötteet validoidaan ja virhetilanteet käsitellään selkeästi. Tietoturva huomioidaan perusperiaattein, esimerkiksi käyttöoikeuksien rajaamisella ja syötteiden tarkistamisella.

Tietokantana hyödynnetään PostgreSQL:ää, joka tarjoaa relaatiopohjaisen ja monipuolisen tietorakenteen sekä tehokkaan kyselyiden hallinnan. Toteutuksessa voidaan käyttää esimerkiksi Azure Database for PostgreSQL -palvelua, joka on yhteensopiva sovelluksen arkkitehtuurin kanssa ja integroituu hyvin Azuren muihin komponentteihin.

Sovellus julkaistaan pilvipalveluun. Ensisijaisesti hyödynnämme Microsoft Azurea, joka on ollut käytössä myös kurssin aikana. Azure tarjoaa soveltuvat palvelut sekä frontendin julkaisuun (esimerkiksi Azure Static Web Apps) että backendin ajamiseen (esimerkiksi Azure App Service tai Azure Functions).

## Projektinhallinta ja käyttäjätestaus

Projektia toteutetaan pareittain. Työ jaetaan vaiheittain niin, että molemmat tekijät osallistuvat suunnitteluun ja dokumentointiin, mutta varsinaisessa toteutuksessa tehtäviä jaetaan osaamisen ja kiinnostuksen mukaan. Työnjakoa ja edistymistä seurataan säännöllisesti, ja jokaisesta työvaiheesta pidetään kirjaa GitHub-repositoriossa sekä erillisessä tuntikirjanpidossa.

Projektissa hyödynnetään versionhallintaa (Git) sekä GitHubin projektinhallintatyökaluja.

**Käyttäjätestaus toteutetaan kahdessa vaiheessa:**

**Prototyyppivaiheessa (Figma):** Käyttöliittymän toimivuutta ja selkeyttä arvioidaan omatoimisesti tiimin jäsenten toimesta. Arvioinnissa keskitytään erityisesti siihen, kuinka looginen ja helppokäyttöinen prototyyppi on eri käyttäjäpersoonien näkökulmasta. 

**Toiminnallisen sovelluksen testausvaiheessa:** Valmis sovellus annetaan testattavaksi ulkopuolisille käyttäjille, mahdollisesti omille ystävillemme, jotka eivät ole olleet mukana kehitystyössä. He suorittavat tyypillisiä käyttötapauksia, kuten budjetin asettamisen, kulujen lisäämisen ja säästötavoitteiden seuraamisen. Tarkoituksena on varmistaa, että sovellus toimii suunnitellusti ja että se on helppo ja miellyttävä käyttää myös uusille käyttäjille.

Testauksessa kiinnitetään erityisesti huomiota:

- Käyttöliittymän intuitiivisuuteen  
- Toimintojen löytymiseen ja ymmärrettävyyteen  
- Käyttökokemukseen eri laitteilla  
- Virhetilanteiden käsittelyyn

Testauksen perusteella voidaan tehdä tarvittavia parannuksia ennen lopullista esittelyvaihetta. Molemmat tiimin jäsenet osallistuvat testaukseen ja palautteen käsittelyyn.
