let loadingScreen = document.createElement("div");

loadingScreen.style.position = "fixed";
loadingScreen.style.top = "0";
loadingScreen.style.left = "0";
loadingScreen.style.width = "100vw";
loadingScreen.style.height = "100vh";
loadingScreen.style.backgroundColor = "black";

loadingScreen.style.display = "flex";
loadingScreen.style.justifyContent = "center";
loadingScreen.style.alignItems = "center";
loadingScreen.style.color = "white";
loadingScreen.style.fontSize = "50px"
loadingScreen.style.fontFamily = "sans-serif";
loadingScreen.style.zIndex = "9999";
loadingScreen.innerText = "зАгРузка тВоей СмеРти"


document.body.appendChild(loadingScreen);
window.onload = function () {
  loadingScreen.remove()
  let goto = document.getElementById('goto')
  let text = document.getElementById('text')
  let yes = document.getElementById('Yes')
  let h1text = document.getElementById('h1text')
  let targetText = "Ты уверен малой назад пути нет🙃"
  let onClickedYes = false
  let sentButton = document.getElementById('sent')
  let adkinator = document.getElementById('adkinat')
  let gender = document.getElementsByName('gender')
  let date = document.getElementById('date')
  let name = document.getElementById('name')
  let lastName = document.getElementById('lastname')
  let andText = document.getElementById('and')
  let sthrafGameText = document.getElementById('schtrafgame')
  let buttonToSthrafGame = document.getElementById('button')
  let allImages = document.getElementById('allImages')
  let button1 = document.getElementById('button1')
  let button2 = document.getElementById('button2')
  let sthrafText = document.getElementById('sthrafText')
  let video = document.getElementById('video')
  let audio = document.getElementById('audio')
  let death = document.getElementById('death')
  let Arslan = document.getElementById('Arslan')
  let button11 = document.getElementById('button11')
  let button22 = document.getElementById('button22')
  let select = document.getElementById('select')
  let scream = document.getElementById('scream')
  let images2 = document.getElementById('images2')
  let mainText = document.getElementById('mainText')
  let finalText = document.getElementById('finalText')
  let finalButton = document.getElementById('finalButton')
  let finalForm = document.getElementById('finalForm')

  targetArray =[...targetText]
  if (goto||text) {
    goto.addEventListener("click", function() {
      text.innerHTML = "тАКиМ Как тЫ Вхож ЗапРЕщен"
    })
  }
  if (yes || h1text) {
    yes.addEventListener("click", function () {

      if (!onClickedYes) {
        onClickedYes = true;
        h1text.innerHTML = "";

        for (let i = 0; i < targetArray.length; i++) {
          setTimeout(function () {
            h1text.innerHTML += targetArray[i];
          }, i * 200);
        }

      } else {

        window.location.href = 'yourInformation.html'

      }


    });
  }
  if (sentButton && adkinator && gender && date && name && lastName) {
   sentButton.addEventListener('click', function() {
     if (date.value != "" && name.value != "" && gender.value != "" && lastName != "") {

     adkinator.hidden = false;
     adkinator.classList.add("adkinator");
     setTimeout(function () {
       window.location = "adkinatoorrrr.html"
     }, 6000);
   }
   });
 }

 if (andText && sthrafGameText && buttonToSthrafGame) {

   setTimeout(function () {
     andText.classList.add("makeVisible")
     setTimeout(function() {
       sthrafGameText.classList.add("makeVisible")
       setTimeout(function(){
         buttonToSthrafGame.classList.add("makeVisible")
       }, 3000)
     },3000)
   }, 3000);
 }
if(allImages && button1 && button2 && sthrafText) {
  let images = Array.from(allImages.children)
  let i = 0
  let sthrafReplics = ["Ты один раз проснулся и оказался на кладбище куда ты пойдешь???", "Ты прошел чуть вперед, куда ты пойдешь???", "Когда ты прошел дальше ты увидел существо возле тебя и оно уже готово на тебя напасть, куда ты пойдешь???","Когда ты убежал от существа ты увидел маленькую девочку которая выглядет жутко, куда ты пойдешь?" ,"Когда ты ушел от девочки ты увидел центр кладбище, куда ты пойдешь?", "Когда ты прошел чуть чуть ты увидел здание, куда ты пойдешь?", "Ты увидел внутри сундук куда ты пойдешь?", "Боюсь уже поздно🫠"]
  images.reverse()
  for (let v = 0; v < images.length; v++) {
    images[v].classList.add("invisible")
    images[v].classList.remove("visible")
  }

  images[0].classList.add("Visible")
  images[0].classList.remove("invisible")

  button1.addEventListener('click', function(){
    if (button1.innerHTML != "Да") {
      i += 1
      if (i < images.length){
        images[i].classList.remove("invisible")
        images[i].classList.add("Visible")

        images[i - 1].classList.remove("Visible")
        sthrafText.innerHTML = sthrafReplics[i]
        images[i - 1].classList.add("invisible")
        if (images[i].id == "video") {
          images[i].currentTime = 0
          images[i].play()
          images[i].addEventListener("ended",function() {
            sthrafText.classList.add("toCenter")
            setTimeout(function () {
              sthrafText.innerHTML = ""
              let youLose = "Ха ха ты проиграл🤣🤣🤣, ну в общем ты и по жизни неудачник🙃🙃🙃, Хочешь отыгратся???"
              let youLoseArray = [...youLose]
              for (let i = 0; i < youLoseArray.length; i++) {
                setTimeout(function () {
                  audio.play()
                  sthrafText.innerHTML += youLoseArray[i]
                }, i * 300);
              }
              button1.innerHTML = "Да"
              button2.innerHTML = "Нет"
            }, 6000);
          })
          }
      }
    }else {
      window.location.href = "sthrafGame2.html"
    }

  })
  button2.addEventListener('click', function(){
    if (button2.innerHTML != "Нет") {
      i += 1
      if (i < images.length) {
        images[i].classList.remove("invisible")
        images[i].classList.add("Visible")
        sthrafText.innerHTML = sthrafReplics[i]
        images[i - 1].classList.remove("Visible")
        images[i - 1].classList.add("invisible")
        if (images[i].id == "video") {
          images[i].currentTime = 0
          images[i].play()
          images[i].addEventListener("ended",function() {
            sthrafText.classList.add("toCenter")
            setTimeout(function () {
              sthrafText.innerHTML = ""
              let youLose = "Ха ха ты проиграл🤣🤣🤣, ну в общем ты и по жизни неудачник🙃🙃🙃, Хочешь отыгратся???"
              let youLoseArray = [...youLose]
              for (let i = 0; i < youLoseArray.length; i++) {
                setTimeout(function () {
                  audio.play()
                  sthrafText.innerHTML += youLoseArray[i]
                }, i * 200);
              }
              button1.innerHTML = "Да"
              button2.innerHTML = "Нет"
            }, 6000);
          })
          }
      }
    } else {
      window.location.href = "index.html"
    }
  })

}

if (death && Arslan && button11 && button22 && select && mainText) {
let isCooldownCompleted = false
let i2 = 0;
let x = 0;
let a = true;  // движение вперед
let b = false; // движение назад
let c = true
let button1Replics = ["тИХиЙ доМ", "сВой череп", "чЕловЕка", "тВое лицо Перед сМертью", "оНа неизбежна", "Свой гЛаз", "раЗорваного ЧеЛовека", "паУтиНу", "мАриОнетка", "иМя неУдАчника", "Никто", ""]
let button2Replics = ["Билл Шифр", "чЕреп своегО дРуга Макса", "тРуп", "мЕня", "оНа заБерет тебя", "чУжой Глаз", "себя на данный момент", "КроВь", "Ты кОгдА уМРЕшььь", "иМя дУрака", "Ничто", ""]

let imagesIn2 = Array.from(images2.children).reverse()
console.log(imagesIn2);
for (let i = 0; i < imagesIn2.length; i++) {
  imagesIn2[i].classList.add("invisible")
  imagesIn2[i].classList.remove("visible")
}

imagesIn2[0].classList.add("visible")
imagesIn2[0].classList.remove("invisible")

function move() {
  if (a && c) {
    x += 0.5;
    death.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(move);

    if (onTounch(death, Arslan)) {
      x -= 0.4;
      Arslan.classList.add("invertColor")
      scream.play()
    } else {
      Arslan.classList.remove("invertColor")
      scream.pause()
    }
  }
}

function onTounch(a,b) {
  const rect1 = a.getBoundingClientRect();
  const rect2 = b.getBoundingClientRect();
  return !(
    rect1.top > rect2.bottom ||
    rect1.bottom < rect2.top ||
    rect1.left > rect2.right ||
    rect1.right < rect2.left
  );
}

function moveBack() {
  if (!a && b && x > 0) {
    x -= 2; // скорость назад
    death.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(moveBack);
  }
}

move(); // старт движения вперед

button11.addEventListener("click", function () {
  if (c) {
    a = false; // останавливаем вперед
    b = true;  // включаем назад
    moveBack();
    select.play()
    i2 += 1
    button11.innerHTML = button1Replics[i2]
    button22.innerHTML = button2Replics[i2]
  }
  if(i2 < imagesIn2.length){
    imagesIn2[i2].classList.add("visible")
    imagesIn2[i2].classList.remove("invisible")
    imagesIn2[i2 - 1].classList.add("invisible")
    imagesIn2[i2 - 1].classList.remove("visible")
    console.log(imagesIn2[i2]);
  } else {
    c = false
    mainText.innerHTML = ""
    for (let i = 0; i < imagesIn2.length; i++) {
      imagesIn2[i].classList.add("invisible")
    }
    Arslan.classList.add("toUp")
    setTimeout(function () {
      window.location.href = "https://google.com"
    }, 3000);
  }


  // через 1 секунду останавливаем назад и снова включаем вперед
  setTimeout(function() {
    b = false;
    a = true;
    move(); // 🔥 снова запускаем рекурсию вперед
  }, 1000); // 1 секунда
});

button22.addEventListener("click", function () {
  if (c) {
    a = false; // останавливаем вперед
    b = true;  // включаем назад
    moveBack();
    select.play()
    i2 += 1
    button11.innerHTML = button1Replics[i2]
    button22.innerHTML = button2Replics[i2]
  }
  button11.innerHTML = button1Replics[i2]
  button22.innerHTML = button2Replics[i2]
  if(i2 < imagesIn2.length){
    imagesIn2[i2].classList.add("visible")
    imagesIn2[i2].classList.remove("invisible")
    imagesIn2[i2 - 1].classList.add("invisible")
    imagesIn2[i2 - 1].classList.remove("visible")
    console.log(imagesIn2[i2]);
  } else {
    c = false
    mainText.innerHTML = ""
    for (let i = 0; i < imagesIn2.length; i++) {
      imagesIn2[i].classList.add("invisible")
    }
    Arslan.classList.add("toUp")
    setTimeout(function () {
      window.location.href = "https://google.com"
    }, 3000);
  }


  // через 1 секунду останавливаем назад и снова включаем вперед
  if (c) {
    setTimeout(function() {
      b = false;
      a = true;
      move(); // 🔥 снова запускаем рекурсию вперед
    }, 2000); // 1 секунда
  }
});
}

if (finalForm && finalText && finalButton) {
  let a = true

  finalButton.addEventListener("click", function () {
    if (a) {
      a = false
      finalForm.classList.add("opacityMake");
    } else {
      finalButton.setAttribute('href', "files/adkinator666.apk")
      finalButton.setAttribute('download', "files/adkinator666.apk")
    }
  })
}

}
