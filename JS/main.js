
window.onload = function () {
  let goto = document.getElementById('goto')
  let text = document.getElementById('text')
  let yes = document.getElementById('Yes')
  let h1text = document.getElementById('h1text')
  let targetText = "Ты уверен малой назад пути нет🙃"
  let onClickedYes = false
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

        window.location.href = 'https://google.com'

      }

    });
  }
}
