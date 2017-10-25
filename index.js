var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var raf
var height = canvas.height
var width = canvas.width
var ballList=[]

function ball(sx, sy, vx, width, height, color) {
  this.x = sx
  this.y = sy
  this.vx = vx
  this.vy = 0
  this.g = 0.99
  this.radius = 25
  this.back = Math.random()*1.5
  this.color = color
  this.width = width
  this.height = height
  this.raiseVy = function () {
    this.vy *= this.g 
    this.vy += 0.50
  }
  this.draw = function() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fillStyle = this.color
    ctx.fill()
  }
  this.checkArea = function () {
    if (this.y + this.vy + this.radius > this.height || this.y + this.vy - this.radius < 0) {
      this.vy = -this.vy * this.back
    }
    if (this.x + this.vx + this.radius > this.width || this.x + this.vx - this.radius < 0) {
      this.vx = -this.vx 
    }
  } 
  this.move = function () {
    this.x += this.vx
    this.y += this.vy
    this.raiseVy()
    this.checkArea()
  }
}

function draw() {
  ctx.clearRect(0, 0, width, height)
  var newball = new ball(width/2, 50, Math.random()*20-10, width, height, 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')')
  newball.draw()
  ballList.push(newball)
  for(let item of ballList) {
    item.move()
    item.draw()
  }
  if (ballList.length > 400) {
    ballList.shift()
  }
  raf = window.requestAnimationFrame(draw);
}

raf = window.requestAnimationFrame(draw);