function catsCarousel() {
  let arrowRight = document.getElementsByClassName("arrow-right");
  let arrowLeft = document.getElementsByClassName("arrow-left");
  let catImgs = document.getElementsByClassName("cat-img");

  function moveToRight(e) {
    let catImg = e.target.offsetParent.children[1].children[0];
    let catWidth = catImg.width;
    let catContainerLength = e.target.offsetParent.children[1].children.length;
    let catMarginLeft = catImg.style.marginLeft;
    let newMarginLeft = Number(
      catMarginLeft.replace("-", "").replace("px", "")
    );

    const maxMarginValue = catWidth * catContainerLength;

    catWidth = newMarginLeft + catWidth;

    if (catWidth != maxMarginValue) {
      catImg.style.marginLeft = `${-catWidth}px`;
    }
  }

  function moveToLeft(e) {
    let catImg = e.target.offsetParent.children[1].children[0];
    let catWidth = catImg.width;
    let catMarginLeft = catImg.style.marginLeft;
    let newMarginLeft = Number(catMarginLeft.replace("px", ""));

    const maxMarginValue = catWidth;

    catWidth = newMarginLeft + catWidth;

    if (catWidth != maxMarginValue) {
      catImg.style.marginLeft = `${catWidth}px`;
    }
  }

  Array.from(arrowRight).forEach((ele) => {
    ele.addEventListener("click", moveToRight);
  });

  Array.from(arrowLeft).forEach((ele) => {
    ele.addEventListener("click", moveToLeft);
  });
}

catsCarousel();
