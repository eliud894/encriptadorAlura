const matrizEncriptado = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

const matrizDesencriptado = {
  'enter': 'e',
  'imes': 'i',
  'ai': 'a',
  'ober': 'o',
  'ufat': 'u'
};

function encrypt(text) {
  let encryptedText = '';
  for (let char of text) {
      encryptedText += matrizEncriptado[char] || char;
  }
  return encryptedText;
}

function decrypt(text) {
  let decryptedText = text;
  for (let key in matrizDesencriptado) {
      decryptedText = decryptedText.split(key).join(matrizDesencriptado[key]);
  }
  return decryptedText;
}

function cifradoAlura(action) {
  var texto = document.getElementById('texto').value;
  var resultado = action === 'encrypt' ? encrypt(texto) : decrypt(texto);
  document.getElementById('textoResultado').value = resultado;
  checkInput();
  if (resultado !== '') {
    document.getElementById('muneco').style.display = 'none';
  }
}

function checkInput() {
  var myTextarea = document.getElementById('textoResultado');
  var copyButton = document.getElementById('copyButton');
  if (myTextarea.value === "") {
    copyButton.style.display = "none";
  } else {
    copyButton.style.display = "inline";
  }
}

async function copyFunction() {
  var myTextarea = document.getElementById('textoResultado');
  try {
    await navigator.clipboard.writeText(myTextarea.value);
    alert("Texto copiado: " + myTextarea.value);
  } catch (err) {
    alert('Error al copiar el texto: ', err);
  }
}