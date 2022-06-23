let lampadaLigada = lampadaAttribute()

function lampadaQuebrada(){
  const allButtons = buttonsDisabledAttribute()
  let lampada = new Lampada(lampadaLigada, allButtons)
  lampada.quebrarLampada()
  lampada.disabled()
}
function ligarLampadaOnButtonClick(){
  let lampada = new Lampada(lampadaLigada)
  lampada.ligarLampadaDesligada()
}
function desligarLampadaOnButtonClick(){
  let lampada = new Lampada(lampadaLigada)
  lampada.desligarLampadaLigada()
}  
