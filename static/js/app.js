(function () {
  count = 0;

  //Select DOM elements
  const addCount = document.querySelector(".add-count");
  const subCount = document.querySelector(".sub-count");
  const sub = document.getElementById("sub");
  const countBadge = document.querySelector(".badge");
  const emptyDiv = document.querySelector(".empty");
  const navCartContent = document.querySelector(".cart-content");
  const productCount = document.querySelector(".product-count");

  productCount.innerHTML = parseInt(count);

  //increment count
  addCount.addEventListener("click", function () {
    count++;
    productCount.innerHTML = count;
    countBadge.style.display = "inline-block";
    countBadge.innerHTML = count;
    emptyDiv.style.display = "none";
    navCartContent.style.display = "block";
  });

  //Decrement count
  subCount.addEventListener("click", function () {
    //Ensure decrement does not return negative value
    if (count <= 0) {
      return (count = 0);
    }
    count--;
    productCount.innerHTML = count;
    countBadge.style.display = "inline-block";
    countBadge.innerHTML = count;
    emptyDiv.style.display = "block";
    navCartContent.style.display = "none";
  });

  function showLightBox() {
    const modalBox = document.querySelector("#modal"); //Popup div conatiner
    const modalImg = document.getElementById("modalImg"); //the main image to switch content on popu
    const closeModal = document.querySelector(".pop-close"); //Close pop up modal box
    const popModalImg = document.getElementsByClassName("pop-modal");
    const popImgCont = document.getElementsByClassName("img-pop");
    const imgSub = document.getElementsByClassName("img-subs");
    const lightImg = document.getElementById("lightImg");
    const lightModal = document.getElementsByClassName("light-modal");
    const backImgIcon = document.getElementById("prevIcon");
    const nextImgIcon = document.getElementById("nextIcon");

    //Next ligth box image
    c = 0;
    nextImgIcon.addEventListener("click", function nexOne() {
      for (let i = 0; i < popModalImg.length - c; i++) {
        modalImg.src = popModalImg[c].src;
        c++;
        if (popModalImg[c].src === modalImg) {
          popModalImg[c].style.border = "2px solid red";
        } else {
          popModalImg[c].style.border = "none";
        }
      }

      // console.log(c);
    });

    backImgIcon.addEventListener("click", function () {
      console.log(c);
      for (let i = 0; i < c - 1; i++) {
        // modalImg.src = popModalImg[count].src;
        // count++;
        console.log(c);
        // if (popModalImg.length >= c + 1) {
        modalImg.src = popModalImg[i].src;
        c--;
        console.log(i);
        // }
      }
    });

    //For the onlick subimages
    for (let i = 0; i < lightModal.length; i++) {
      lightModal[i].addEventListener("click", function () {
        lightImg.src = lightModal[i].src;
        modalBox.style.display = "block";
        if (lightImg.src === lightModal[i].src) {
          lightModal[i].style.addClassList = " .active";
        }
      });
    }

    //Image selection for the light box
    for (let a = 0; a < popModalImg.length; a++) {
      popModalImg[a].addEventListener("click", function () {
        modalImg.src = popModalImg[a].src;

        if (popModalImg[a].src == modalImg.src) {
          // popModalImg[a].className += " active";
          popModalImg[a].style.border = "2px solid hsl(26, 100%, 55%)";
        } else {
          popModalImg[a].style.border = "none";
          // popModalImg[a].classList.add("inactive");
        }
      });
    }

    //Add cart button
    const cartBtn = document.querySelector(".btn");
    // let priceSlash = document.querySelector(".text-strike").innerHTML;
    const amount = document.querySelector(".amount").innerHTML;

    cartBtn.addEventListener("click", function () {
      result = parseFloat(amount) * 2;
      // document.querySelector(".text-strike").innerHTML = "$" + result + ".00";
      console.log(result);
      // console.log(priceSlash);
    });
    //Close the lightbox
    closeModal.addEventListener("click", function () {
      modalBox.style.display = "none";
    });
  }

  showLightBox();
  // showLightBox(lightModalClick);
})();
