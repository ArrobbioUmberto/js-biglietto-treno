


// 1. numero di chilometri che vuole percorrere 
// 2. età del passeggero 
// 3. calcolare il prezzo del biglietto 
//    tenendo in considerazione che: 
    // costa 0.21 euro al km 
    // se minorennes sconto del 20%
    // se over 65 sconto del 40 %
    // output del prwzzo finale va messo con max due decimali per indicare i centesimi del prezzo 


let numberKm = parseFloat( prompt('Quanti chilometri devi percorrere?'))
console.log('questi sono i km che vuole percorrere', numberKm)
let passengerAge = parseInt (prompt('Quanti anni hai ?'))
console.log('questa è l\'età del nostro passeggero', passengerAge)

const ticketPrice = 0.21

let totalKm = numberKm * ticketPrice

if (passengerAge < 18){
    totalKm = (numberKm * ticketPrice) * 0.8
} else if (passengerAge > 64){
    totalKm = (numberKm * ticketPrice) * 0.6
}
else {
    totalKm = numberKm * ticketPrice
}
console.log('questo è il prezzo del biglietto', totalKm)