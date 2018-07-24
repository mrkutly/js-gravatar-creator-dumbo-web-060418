class Identicon {
  constructor(string) {
    this.array = md5.array(string)
    this.rgb = `rgb(${this.array[15]}, ${this.array[14]}, ${this.array[13]});`
  }

  render() {
    let a = 0
    for(let i = 0; i < 5; i++) {
      for(let j = 0; j < 3; j++) {
        let spanEl = document.getElementById(`${i}-${j}`)
        let mirror = document.getElementById(`${i}-${4 - j}`)

        this.colorBlock(spanEl, mirror, this.array[a])
        a++
      }
    }
  }

  colorBlock(spanEl, mirror, num) {
    if(num % 2 === 0){
      spanEl.style = `background: ${this.rgb}`
      mirror.style = `background: ${this.rgb}`
    }
  }
}
