// Eksempeldata for dagens rett basert på ukedag
const dagensRetter = {
    1: { navn: "Spaghetti Bolognese", beskrivelse: "En klassisk italiensk rett.", pris: "40,-", bilde: "bilder/varmrett1.jpg" },
    2: { navn: "Fiskeboller i hvit saus", beskrivelse: "En sunn og deilig rett.", pris: "35,-", bilde: "bilder/varmrett2.jpg" },
    3: { navn: "Kylling tikka masala", beskrivelse: "Indisk inspirert kyllingrett.", pris: "50,-", bilde: "bilder/varmrett3.jpg" },
    4: { navn: "Vegetar lasagne", beskrivelse: "Hjemmelaget vegetarisk lasagne.", pris: "45,-", bilde: "bilder/varmrett4.jpg" },
    5: { navn: "Pizza", beskrivelse: "Alle elsker pizza!", pris: "30,-", bilde: "bilder/varmrett5.jpg" }
};

// Funksjon for å vise dagens rett basert på ukedag
function visDagensRett() {
    const idag = new Date().getDay(); // Henter dagens ukedag som et tall (0 for søndag, 1 for mandag, osv.)
    const rett = dagensRetter[idag] || dagensRetter[1]; // Velger retten basert på dagen, og bruker mandagsrett som fallback for helger

    // Oppdaterer HTML-innholdet i dagens rett-seksjonen
    document.getElementById("dagens-rett").innerHTML = `
        <h2>Dagens Rett</h2>
        <img src="${rett.bilde}" alt="${rett.navn}"> <!-- Bilde av dagens rett -->
        <p><strong>${rett.navn}</strong> - ${rett.beskrivelse}. Pris: ${rett.pris}</p> <!-- Navn, beskrivelse og pris for retten -->
    `;
}

// Kaller funksjonen når siden lastes
window.onload = visDagensRett; // Når siden lastes inn, kjører funksjonen for å vise dagens rett
