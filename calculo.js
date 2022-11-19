const tokenCodificar = (tk) => {
    tk = tk.split("").map(e => e.charCodeAt(0))
    let suma = 0
    tk.forEach(e => {
        suma = suma + e
    });
    suma = parseInt(Math.sqrt(suma))
    console.log(suma)
    return suma
};

const encriptar = (token, frase) => {
    let fraseEncriptada = frase.split("").reverse().map(e => e.charCodeAt(0)).map(e => { if (e != 32) { return e + tokenCodificar(token) } else { return e } }).join(" ")
    document.getElementById("fraseEncriptada").innerHTML += `<div class="box">${fraseEncriptada}</div>`
}

const desencriptar = (token, frase) => {
    let fraseDesencriptada = "";
    let fraseDesencriptadaASCII = frase.split(" ").reverse().map(e => { if (e != 32) { return e - tokenCodificar(token) } else { return e } })

    for (let i = 0; i < fraseDesencriptadaASCII.length; i++) {
        fraseDesencriptada += String.fromCharCode(fraseDesencriptadaASCII[i]);
    }

    document.getElementById("fraseDesencriptada").innerHTML = ``
    document.getElementById("fraseDesencriptada").innerHTML += `<div class="box">${fraseDesencriptada}</div>`
}

