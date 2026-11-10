const { MongoClient }  = require("mongodb");

const mongoUrl = "mongodb://127.0.0.1:27017";

const ministre = [
    ["Mette Frederiksen", "Statsminister", "S", "minister","2022-12-15"],
    ["Pia Olsen Dyhr", "Økonomi- og indenrigsminister", "SF", "minister","2022-12-15"],
    ["Lars Løkke Rasmussen", "Udenrigsminister", "M", "minister","2022-12-15"],
    ["Martin Lidegaard", "Erhvervs- og konkurrencekraftsminister", "RV", "minister","2022-12-15"],
    ["Peter Hummelgaard", "Finansminister", "S", "minister","2022-12-15"],
    ["Nicolai Wammen", "Justitsminister", "S", "minister","2022-12-15"],
    ["Christina Egelund", "Forsknings-, uddannelses- og digitaliseringsminister", "M", "minister","2022-12-15"],
    ["Samira Nawa", "Klima-, energi- og forsyningsminister", "RV", "minister","2022-12-15"],
    ["Karina Lorentzen Dehnhardt", "By-, land- og transportminister", "SF", "minister","2022-12-15"],
    ["Morten Bødskov", "Udlændinge- og integrationsminister", "S", "minister","2022-12-15"],
    ["Magnus Heunicke", "Undervisningsminister", "S", "minister","2022-12-15"],
    ["Ane Halsboe-Jørgensen", "Beskæftigelsesminister og minister for ligestilling", "S", "minister","2022-12-15"],
    ["Jeppe Bruus", "Forsvarsminister", "S", "minister","2022-12-15"],
    ["Jakob Engel-Schmidt", "Skatte- og vækstminister", "M", "minister","2022-12-15"],
    ["Ida Auken", "Sundhedsminister og kirkeminister", "S", "minister","2022-12-15"],
    ["Christian Rabjerg Madsen", "Minister for natur og dyrevelfærd]", "S", "minister","2022-12-15"],
    ["Zenia Stampe", "Kulturminister", "RV", "minister","2022-12-15"],
    ["Lisbeth Bech-Nielsen", "Minister for samfundssikkerhed og beredskab", "SF", "minister","2022-12-15"],
    ["Jacob Mark", "Børne-, ældre- og boligminister", "SF", "minister","2022-12-15"],
    ["Monika Rubin", "Socialminister og minister for nordisk samarbejde", "M", "minister","2022-12-15"],
    ["Maria Reumert Gjerding", "Miljøminister", "SF", "minister","2022-12-15"]
];

async function main() {
    const client = new MongoClient(mongoUrl);

    try {
        await client.connect();

        const db = client.db("folketinget");
        const collection = db.collection("personer");

        const dokumenter = ministre.map(([navn, ministerpost, parti, position, startDato]) => ({
            navn,
            ministerpost,
            parti,
            position,
            startDato,

        }));

        // Erstat den gamle liste med den aktuelle
        await collection.deleteMany({});
        await collection.insertMany(dokumenter);

        console.log(`${dokumenter.length} aktive ministre gemt i MongoDB`);

    } catch (error) {
        console.error("Fejl:", error.message);
    } finally {
        await client.close();
    }
}

main();