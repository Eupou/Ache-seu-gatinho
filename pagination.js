function pagination() {
  const cards = document.getElementsByClassName("cat-info");
  const numContainer = document.getElementsByClassName("num-container");
  const CARDS_PER_PAGE = 8;
  const arrowLeft = document.getElementById("arrow-left-small");
  const arrowRight = document.getElementById("arrow-right-small");

  let currentPage = 1;
  let pageNumber;
  let totalNumberOfPages;

  function setNumberOfPages() {
    if (cards.length % CARDS_PER_PAGE == 0) {
      // The cards fit a perfect amount of pages. a % b = 0
      totalNumberOfPages = cards.length / CARDS_PER_PAGE;
    } else if (cards.length / CARDS_PER_PAGE < 1) {
      // Create only one page. When a < b, we have less cards then CARDS_PER_PAGE
      totalNumberOfPages = 1;
    } else {
      // Create a new page for one or more cards. when a/b = x.someting
      totalNumberOfPages = Math.floor(cards.length / CARDS_PER_PAGE) + 1;
    }

    addPagesToHTML();
  }

  function addPagesToHTML() {
    for (let i = 1; i <= totalNumberOfPages; i++) {
      let num = numContainer[0].appendChild(document.createElement("div"));
      num.textContent = `${i}`;
      num.classList.add("number");
      if (i == 1) {
        num.classList.add("selected");
      }
    }

    pageNumber = document.getElementsByClassName("number");
    Array.from(pageNumber).forEach((number) => {
      number.addEventListener("click", changePage);
    });
    hideCards();
  }

  function hideCards() {
    for (let i = 0; i < cards.length; i++) {
      if (i >= CARDS_PER_PAGE) {
        cards[i].classList.add("d-none");
      }
    }
  }

  function changePage(e, numFromArrow) {
    let num;
    if (e == undefined) {
      num = numFromArrow;
    } else {
      num = e.target.innerText;
    }

    let pageClicked = num;

    if (pageClicked != currentPage) {
      for (let i = 0; i < cards.length; i++) {
        // Hide all cards before the page clicked
        if (i < (pageClicked - 1) * CARDS_PER_PAGE) {
          cards[i].classList.add("d-none");
        }

        // Show all the cards on the range
        if (
          i >= (pageClicked - 1) * CARDS_PER_PAGE &&
          i < pageClicked * CARDS_PER_PAGE
        ) {
          cards[i].classList.remove("d-none");
        }

        // Hide all cards after the page cliked
        if (i >= pageClicked * CARDS_PER_PAGE) {
          cards[i].classList.add("d-none");
        }

        currentPage = pageClicked;
      }

      for (let i = 0; i < totalNumberOfPages; i++) {
        // Indicates which page was clicked
        numContainer[0].children[i].classList.remove("selected");
        if (i + 1 == pageClicked) {
          numContainer[0].children[i].classList.add("selected");
        }
      }
    }
  }

  function moveLeft() {
    if (currentPage != 1) {
      let newPage = Number(currentPage) - 1;
      changePage(undefined, newPage);
    }
  }

  function moveRight() {
    if (currentPage != totalNumberOfPages) {
      let newPage = Number(currentPage) + 1;
      changePage(undefined, newPage);
    }
  }

  arrowLeft.addEventListener("click", moveLeft);
  arrowRight.addEventListener("click", moveRight);

  setNumberOfPages();
}

pagination();
