const container = document.querySelector(".container")
let topRow = document.querySelector(".toprow")
let botttomRow = document.querySelector(".bottomrow")
let card = document.querySelectorAll(".card")

//getting each individual card/btn /////

function individualCardTransformation() {
  for (let i = 0; i < card.length; i++) {
    let solo = card[i]
    // solo.style.backgroundColor = "red";
    // 1 Make it so the first card stays flipped permanently until a second card is clicked
    // 2 Check for matches
    // 3 Flip/reset cards if they are not a mat

    solo.addEventListener("click", function (e) {
      let firstClicked = false
      firstClicked = !firstClicked
      if (firstClicked) {
        if ("1st card" === "2nd card") {
          //
        } else {
          // wait 1 second
          // flip both cards back over
          // Increment number of tries
        }
      }
    })

    solo.addEventListener("click", function (e) {
      let targetCard = e.target
      if (targetCard.classList.contains("basketball")) {
        targetCard.classList.toggle("hidden")
        setTimeout(function () {
          targetCard.classList.toggle("hidden")
        }, 1000)
      } else if (targetCard.classList.contains("football")) {
        targetCard.classList.toggle("hidden2")
        setTimeout(function () {
          targetCard.classList.toggle("hidden2")
        }, 1000)
      } else if (targetCard.classList.contains("cricket")) {
        targetCard.classList.toggle("hidden3")
        setTimeout(function () {
          targetCard.classList.toggle("hidden3")
        }, 1000)
      } else if (targetCard.classList.contains("tennis")) {
        targetCard.classList.toggle("hidden4")
        setTimeout(function () {
          targetCard.classList.toggle("hidden4")
        }, 1000)
      }
    })
  }
}
individualCardTransformation()
