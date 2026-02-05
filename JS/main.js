
window.onload = function () {
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
     if (date.value != "" && name.value != "null" && gender.value != "null" && lastName != "null") {

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
}
