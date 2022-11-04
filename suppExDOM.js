window.onload = init;

function init() {
  // 2
  let myHeading = document.getElementById("firstH1");
  // console.log(myHeading);
  myHeading.innerHTML = "Anthony Ho";

  // 3
  let firstPara = document.getElementById("h21");
  firstPara.style.backgroundColor = "royalblue";
  firstPara.style.color = "white";

  // 4
  let secondPara = document.getElementById("par2");
  secondPara.style.display = "none";

  // 5
  let myButton = document.getElementById("subBtn");
  myButton.innerHTML = "Read more!!";

  // 6

  myButton.onclick = showPara;

  function showPara() {
    let paraVisible = false;
    if (paraVisible === false) {
      secondPara.style.display = "block";
    } else {
      secondPara.style.display = "none";
    }
  }
} //end of onload function
//EXTRA CHALLENGE
//CREATE TOGGLE FUNCTIONALITY FOR READ MORE/READ LESS BUTTON
//Create your own function for document.getElementById called getId(x)
