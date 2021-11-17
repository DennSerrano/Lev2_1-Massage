let txt = document.getElementById("txt")
let txtAusgabe = document.getElementById("inputAusgabe")
let textNone = document.getElementById("textNone")

function senden() {
    switch (txt.value) {
        case "":
            textNone.innerHTML = "Hier muss Text rein !"
        default:
            txtAusgabe.innerHTML = txt.value
    }
}

// function senden() {
//     txtAusgabe.innerHTML = txt.value
// }