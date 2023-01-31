// BONUS 

// prendo il p con l'id kilometers 

const HTMLKm = document.getElementById('kilometers')

HTMLKm.innerHTML = numberKm

// faccio la stessa cosa per gli altri spazi del biglietto 

const HTMLName = document.getElementById('name')

HTMLName.innerHTML = firstName

const HTMLSurname = document.getElementById('surname')

HTMLSurname.innerHTML = lastName

const HTMLDiscount = document.getElementById ('discount')
if (passengerAge < 18){
    HTMLDiscount.innerHTML = '20%'
} else if (passengerAge > 64){
    HTMLDiscount.innerHTML = '40%'
}
else {
    HTMLDiscount.innerHTML = '-'
}


const HTMLPrice = document.getElementById('price')

HTMLPrice.innerHTML = decimalTotalKm