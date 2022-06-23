function lampadaAttribute() {
  let lampadaLigada = document.querySelector(".lamp")
  return lampadaLigada
}
function buttonsDisabledAttribute(){
 let buttons = document.querySelectorAll("button")
 return buttons
}
class Lampada{
  constructor(ligada, buttons){
    this.ligada = ligada
    this.buttons = buttons
    console.log(this.ligada)
    console.log(this.buttons)
  }
  quebrarLampada(){
    return this.ligada.setAttribute('src', './quebrada.jpg')
  }
  ligarLampadaDesligada(){
    return this.ligada.setAttribute('src', './ligada.jpg')
  }
  disabled(){     
      // let button1 = this.buttons[0]
      // let button2 = this.buttons[1]

    if(this.ligada){
      for(let i of this.buttons){
        i.setAttribute('disabled', '')
      }
      // button1.setAttribute('disabled', '')
      // button2.setAttribute('disabled', '')
    }
  }
  desligarLampadaLigada(){
      return this.ligada.setAttribute('src', './desligada.jpg')
  }
}