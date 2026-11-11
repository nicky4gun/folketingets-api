# Folketingets API

Opgave: En enkel CRUD API til at hente og administrere information om folketingets ministre og partiformænd.

## Installation & Opsætning
1. Klon repositoryet: `git clone <repository-url>`
2. Installer afhængigheder: `npm install`
3. Opret en mongoDB database ('folketinget') og kør `node data/folketingsData.js` (insætter startdata i databasen, for at have noget at arbejde med)
4. Start serveren: `npm start`
5. Serveren kører nu på `http://localhost:3000`

## Tests
Denne application er testet med Postman. 

- Der er oprettet en Postman collection, som kan importeres i Postman for at teste API'en. Collectionen indeholder alle endpoints med eksempler på forespørgsler.

- For hvert endpoint er der enkelte automatiske tests (i Postman), der f.eks. tjekker om det er den rigtige returnede statuskode.