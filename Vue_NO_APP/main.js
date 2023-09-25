var llave = Math.round(Math.random())

const app = new Vue({
    el: '#app',
    data: {
      titulo: 'KEY GAME',
      src: "imagenes/closed1.png",
      src2: "imagenes/closed2.png",
      puntosM: 'Puntos de la maquina: ',
      puntosJ: 'Puntos del jugador: ',
      contadorJugador: 0,
      contadorMaquina: 0,
      pulsado: false,
      mano: "defecto",
      isShow: false,
      animated_iz: false,
      animated_der: false,
    },
    methods: {
      izquierda: function(event){
        if(this.pulsado === false){
          this.pulsado = true
          if(llave == 0){
            this.src = "imagenes/key.png"
            this.contadorJugador++
            setTimeout(()=>{
              this.src2 = "imagenes/right.png"
            },1000);
          }else if(llave == 1){
            this.src = "imagenes/left.png"
            this.contadorMaquina++
            setTimeout(()=>{
              this.src2 = "imagenes/key.png"
            },1000);
          }
          setTimeout(()=>{
            this.src = "imagenes/closed1.png"
            this.src2 = "imagenes/closed2.png"
            this.pulsado = false
            if(this.isShow == true){
              this.isShow = false
            }
          },2000);
          llave = Math.round(Math.random())
        }
      },
      derecha: function(event){
        if(this.pulsado === false){
          this.pulsado = true
          if(llave == 0) {
            this.src2 = "imagenes/right.png"
            this.contadorJugador++
            setTimeout(()=>{
              this.src = "imagenes/key.png"
            },1000);
          }else if(llave == 1){
            this.src2 = "imagenes/key.png"
            this.contadorMaquina++
            setTimeout(()=>{
              this.src = "imagenes/left.png"
            },1000);
          }
          setTimeout(()=>{
            this.src = "imagenes/closed1.png"
            this.src2 = "imagenes/closed2.png"
            this.pulsado = false
            if(this.isShow == true){
              this.isShow = false
            }
          },2000);
          llave = Math.round(Math.random())
        }
      },
      reset: function(event){
        this.contadorJugador = 0
        this.contadorMaquina = 0
      },
      clue: function(){
        this.isShow = !this.isShow
        if(this.isShow == true){
          if(llave == 0){
            this.mano="izquierda"
            const self = this
            self.animated_iz = true
            setTimeout(() => {
              self.animated_iz = false
            }, 1000)
          }
          else if(llave == 1){
            this.mano="derecha"
            const self = this
            self.animated_der = true
            setTimeout(() => {
              self.animated_der = false
            }, 1000)
          }
        }
      }
    }
  })