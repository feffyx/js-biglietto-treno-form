// Variabili
let distance, age;

// Calcola il prezzo del biglietto
function calculateTicketPrice(distance, age) {
    let price = distance * 0.21;

    // Sconti
    if (age < 18) {
        price -= price * 0.2;
    } else if (age >= 65) {
        price -= price * 0.4;
    }

    // Restituisce il prezzo
    return price.toFixed(2);
}

// Costruzione Form
function formHasBeenCompleted(event) {
    event.preventDefault();

    // Informazioni
    let name = document.getElementById('name').value;
    distance = parseFloat(document.getElementById('distance').value);
    age = parseInt(document.getElementById('age').value);

    // Calcola il prezzo
    let price = calculateTicketPrice(distance, age);

    // HTML
    document.getElementById("nameDisplay").innerText = `Name: ${name}`;
    document.getElementById("distanceDisplay").innerText = `Distance: ${distance}`;
    document.getElementById("ageDisplay").innerText = `Age: ${age}`;
    document.getElementById("priceDisplay").innerText = `Price: ${price}€`;

    // Print on Console
    let informations = `
    --- Informazioni Utente ---
    Distance: ${distance}
    Age: ${age}
    Name: ${name}
    Price : ${price}
    `;
    console.log(informations);
}
