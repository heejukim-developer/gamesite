
var flag=0;
function bling (){
    if (flag === 0){
        document.querySelector('h1').style.color='#d6806e';
        flag++;
    } else if (flag === 1){
        document.querySelector('h1').style.color='#fbb666';
        flag++;
    }else if (flag === 2){
        document.querySelector('h1').style.color='#f9f871';
        flag++;
    }else{
        document.querySelector('h1').style.color='#f2ecff';
        flag=0;
    }
}
setInterval(bling,1000);



var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//  네모그리기
canvas.width=window.innerWidth -100;
canvas.height =window.innerHeight-10;

// 
// 10,10위치에서 100x100 의 사각형 만들어달라 
// ctx.fillStyle = 'green';
// ctx.fillRect(10,10,100,100); 




var image1 = new Image();
image1.src = 'rabbit2.png';

// 공룡그리기 object자료에 정리해두기
var dino ={
    x:20,
    y:300,
    width :90,
    height: 90,
    draw(){
        ctx.fillStyle = 'green';
        // ctx.fillRect(this.x,this.y,this.width,this.height); 
        ctx.drawImage(image1, this.x, this.y)
    }
}
// 선인장
var image2 = new Image();
image2.src = 'cactus.png';

class Cactus{
    constructor(){
        this.x = 600;
        this.y = 290;
        this.width= 100;
        this.height= 100;
    }
    draw(){
        ctx.fillStyle = 'red';
        // ctx.fillRect(this.x,this.y,this.width,this.height); 
        ctx.drawImage(image2, this.x, this.y)

    }
}
var cactus = new Cactus ();
cactus.draw();

// 배경
// var background = document.querySelector('background');

var image3 = new Image();
image3.src = 'desert2.png';

// class Background {
//     constructor(){
//         this.x = 0;
//         this.y = 0;
//         this.width= 2400;
//         this.height= 500;
//     }
//     draw(){
//         ctx.fillStyle = 'green';
//         // ctx.fillRect(this.x,this.y,this.width,this.height); 
//         ctx.drawImage(image3, this.x, this.y)
//     }
// }
// var background = new Background ();
// background.draw();


var timer = 0;
var cactus여러개 =[];
var 점프timer = 0;
var animation;

// 게임 라이브러리
function 프레임마다실행할거(){
    animation= requestAnimationFrame(프레임마다실행할거);
    timer++;

    // 잔상이 안남게 프레임 지우는 코드 
    ctx.clearRect(0,0, canvas.width, canvas.height);
   
    // 120은 컴퓨터가 1초에 반응하는것 , 1초에 한번 이동해달라는 코드
    if (timer % 300 === 0){
    var cactus = new Cactus ();
    cactus여러개.push(cactus);
    
    }
    // array에 있던거 다 그려주세용
    cactus여러개.forEach((a, i , o)=>{
        // x좌표가 0 미만이면 제거
        if(a.x <0){
        o.splice(i,1)
        }
        a.x --;
        충돌하냐 (dino, a);

        a.draw();
    })
    
    // 공룡이 1초에 60번 움직이는 코드
    // dino.x++;

    // 공룡이 1초에 60번정도 y로 2빼주기 
    if (점프중 == true){
        dino.y -=2 ;
        점프timer++;
    }
     if (점프중 == false){
         if (dino.y <300){
            dino.y+=2;
         }
         
     }
    if (점프timer > 100){
        점프중 = false;
        점프timer=0
        // 0으로 맞춰줘야 다시 점프 가능함
    }
   
    dino.draw()
}
프레임마다실행할거();

// 충돌확인
function 충돌하냐(dino, cactus ){
    var x축차이 = cactus.x - (dino.x + dino.width);
    var y축차이 = cactus.y - (dino.y + dino.height);
    if (x축차이 < 0 && y축차이 <0 ){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    cancelAnimationFrame(animation)
    }
}

var 점프중 = false; 
// 스페이스 누르면 작동하는 코드 
document.addEventListener('keydown', function(e){
    if (e.code ==='Space'){
     점프중 = true;
    }
})

