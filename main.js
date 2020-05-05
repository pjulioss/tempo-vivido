let birthday = prompt("Data de nascimento (DD/MM/YYYY")

let departureDate = moment(birthday, 'DD/MM/YYYY')

let today = moment()

let dateDiff = today - departureDate

let choseOption = prompt("Como gostaria de exibir o tempo de passado?\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if (choseOption == 1) {
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert("Desde seu nascimento se passaram: " + secondsOfDeparture + " segundos")
} else if (choseOption == 2) {
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Desde seu nascimento se passaram: " + minutesOfDeparture + " minutos")
} else if (choseOption == 3) {
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Desde seu nascimento se passaram: " + hoursOfDeparture + " horas")
} else if (choseOption == 4) {
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Desde seu nascimento se passaram: " + daysOfDeparture + " dias")
} else {
    alert("Escolha um formato valido!")
}