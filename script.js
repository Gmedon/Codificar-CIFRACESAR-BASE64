let campoTexto = document.querySelectorAll(".text")
let passos = document.querySelector(".numero-passos")
let opcao = document.querySelector("#escolha")
let selecionar = opcao.options
let numeroscifra = []
let numerossomadoscifra = []
let exibircifra = []
let alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
"T", "U", "V", "W", "X", "Y", "Z", " "]
function cod() {
        if(selecionar[1].selected == true) {
                let texto = campoTexto[0].value
                texto1 = texto.toLowerCase()
                let qpassos = passos.value
                let qpassos1 = parseInt(qpassos)
                for(let i = 0; i < texto1.length; i++) {
                        numeroscifra.push(texto1.charCodeAt(i))
                }
                console.log(numeroscifra)
                for(let j in numeroscifra) {
                        numerossomadoscifra.push(((numeroscifra[j] - 97) + qpassos1)%26)
                }
                console.log(numerossomadoscifra)
                for(let z in numerossomadoscifra){
                        if(numerossomadoscifra[z] < 0){
                                numerossomadoscifra[z] = 26;
                        }
                }
                for(let f = 0; f < numerossomadoscifra.length; f++) {
                        exibircifra.push(alfabeto[numerossomadoscifra[f]])
                }
                campoTexto[1].setAttribute("value", exibircifra.join(""))
                exibircifra.splice(0, exibircifra.length)
                numerossomadoscifra.splice(0, numerossomadoscifra.length)
                numeroscifra.splice(0, numeroscifra.length)
                setTimeout("console.log(exibircifra)", 3000)

        }else if(selecionar[0].selected == true) {
                let texto = campoTexto[0].value
                let resultado = btoa(texto);
                campoTexto[1].setAttribute("value", resultado)
        }
}
function deco() {
        if(selecionar[1].selected == true) {
                let texto = campoTexto[0].value
                texto1 = texto.toLowerCase()
                let qpassos = passos.value
                let qpassos1 = parseInt(qpassos)
                for(let i = 0; i < texto1.length; i++) {
                        numeroscifra.push(texto1.charCodeAt(i))
                }
                for(let j in numeroscifra) {
                        numerossomadoscifra.push(((numeroscifra[j] - 97) + 26 - qpassos1)%26)
                }
                for(let z in numerossomadoscifra){
                        if(numerossomadoscifra[z] < 0){
                                numerossomadoscifra[z] = 26;
                        }
                }
                for(let f = 0; f < numerossomadoscifra.length; f++) {
                        exibircifra.push(alfabeto[numerossomadoscifra[f]])
                }
                campoTexto[1].setAttribute("value", exibircifra.join(""))
        }else if(selecionar[0].selected == true) {
                let texto = campoTexto[0].value
                let resultado = atob(texto);
                campoTexto[1].setAttribute("value", resultado)
        }
}
function limpar() {
        seila()
}
function seila() {
        campoTexto[1].setAttribute("value", "")
}