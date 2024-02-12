const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "What if ano secret",
    "Thankful ako na ano nakilala kita.",
    "Sa tuwing umaga like taenaa whyyy ikaw na agad pumapasok sa isip ko?",
    "Tas minsan ewan ko ba sa sarili ko natotorpe kasi diko masabi na gusto kita.",
    "Kapag tayo ay nag uusap napapangiti mo ako like hayss iba na ata tama ko sayo.",
    "Pero ayun nahulog na ako sayo Daniyah.",
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})