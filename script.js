
const mensaje = document.querySelector(".mensaje");
const textArea=document.querySelector(".text-area");


function btnEncriptar(){
    const textoEncriptado=Encriptar(textArea.value)
    mensaje.value =textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage="none";

}

function btnDesencriptar(){
    const textoEncriptado=Desencriptar(textArea.value)
    mensaje.value =textoEncriptado;
    textArea.value="";
 

}






function Encriptar(stringEncriptada){
        let matrizCodigo=[["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringEncriptada=stringEncriptada.toLowerCase()
        for(let i=0;i<matrizCodigo.length;i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

            }
        }
        return stringEncriptada
    }


function Desencriptar(stringDesencriptada){
        let matrizCodigo=[["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringDesencriptada=stringDesencriptada.toLowerCase()
        for(let i=0;i<matrizCodigo.length;i++){
            if(stringDesencriptada.includes(matrizCodigo[i][1])){
                stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])

            }
        }
        return stringDesencriptada
    }




/* iptado.replace(/o/img, "ober");
var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
var textoEncriptado = textoEncriptado.replace(/u/img, "ufat" */