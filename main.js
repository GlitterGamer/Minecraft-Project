var canvas = new fabric.Canvas("myCanvas")
block_image_width = 30
block_image_height = 30
playerX= 10
playerY= 10
playerObject= ""
function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject= Img
        playerObject.scaleToWidth(150)
        playerObject.scaleToHeight(150)
        playerObject.set({
            top: playerY,
            left: playerX
        })
        canvas.add(playerObject)
    }) 
}

function newImage(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        blockImageObject= Img
        blockImageObject.scaleToWidth(block_image_width)
        blockImageObject.scaleToHeight(block_image_height)
        blockImageObject.set({
            top: playerX,
            left: playerY
        })
        canvas.add(blockImageObject)
    }) 
}

window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keyPressed = e.keyCode
    console.log(keyPressed)
    if (e.shiftKey && keyPressed=='80'){
        console.log("p and shift key pressed together")
        block_image_width = block_image_width + 10
        block_image_height = block_image_height + 10
        document.getElementById("currentWidth").innerHTML= block_image_width
        document.getElementById("currentHeight").innerHTML= block_image_height
    }

    if (e.shiftKey && keyPressed=='77'){
        console.log("m and shift key pressed together")
        block_image_width = block_image_width - 10
        block_image_height = block_image_height - 10
        document.getElementById("currentWidth").innerHTML= block_image_width
        document.getElementById("currentHeight").innerHTML= block_image_height
    }

    if(keyPressed == '38'){
        up()
    }

    if(keyPressed == '37'){
        left()
    }

    if(keyPressed == '40'){
        down()
    }

    if(keyPressed == '39'){
        right()
    }

    if(keyPressed == '87'){
        newImage("wall.jpg")
        console.log("w")
    }  
    
    if(keyPressed == '89')
    newImage("yellow_wall.png")
    console.log("y")
    
    if(keyPressed == '67')
    newImage("cloud.jpg")
    console.log("c")

    if(keyPressed == '68')
    newImage("dark_green.png")
    console.log("d")

    if(keyPressed == '71')
    newImage("ground.png")
    console.log("g")

    if(keyPressed == '76')
    newImage("light_green.png")
    console.log("l")

    if(keyPressed == '82')
    newImage("roof.jpg")
    console.log("r")

    if(keyPressed == '84')
    newImage("trunk.jpg")
    console.log("t")

    if(keyPressed == '85')
    newImage("unique.png")
    console.log("u")
}

function up(){
    if (playerY>0) {
        playerY = playerY - block_image_height
        canvas.remove(playerObject)
        playerUpdate()
    }
}

function down(){
    if (playerY<600) {
        playerY = playerY + block_image_height
        canvas.remove(playerObject)
        playerUpdate()
    }
}

function left(){
    if (playerX>0) {
        playerX = playerX - block_image_width
        canvas.remove(playerObject)
        playerUpdate()
    }
}

function right(){
    if (playerX<1000) {
        playerX= playerX + block_image_width
        canvas.remove(playerObject)
        playerUpdate()
    }
}

