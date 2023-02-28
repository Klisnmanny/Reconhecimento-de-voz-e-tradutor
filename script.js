function iniciarReconhecimento() {
    if ('webkitSpeechRecognition' in window) {
      var recognition = new webkitSpeechRecognition()
      recognition.lang = 'en-US'
      recognition.start()
      recognition.onresult = function(event) {
        var transcricao = event.results[0][0].transcript
        var transcricaoFinal = transcricao.charAt(0).toUpperCase() + transcricao.slice(1)
        document.getElementById('transcricao').textContent = transcricaoFinal
      }
    } else {
      document.getElementById('transcricao').textContent = 'API de reconhecimento de voz não suportada.'
    }
  }
function traduzir() {
    var textoOriginal = document.getElementById("transcricao").textContent
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=" + encodeURI(textoOriginal)
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var textoTraduzido = data[0][0][0]
        document.getElementById("traduzido").textContent = textoTraduzido
      })
      .catch(error => {
        console.error(error)
      })
  }



  