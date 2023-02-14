function switchCatStatus(btn) {
  const btnCatStatus = document.getElementsByClassName("btn-cat-status");
  const btnFoundACat = document.getElementsByClassName("btn-found-a-cat");
  const btnFindYourCat = document.getElementsByClassName("btn-find-your-cat");
  const pageFoundACat = document.getElementsByClassName("cat-info-wrapper");
  const pageFindYourCat = document.getElementsByClassName("find-your-cat");
  const pagination = document.getElementsByClassName("pagination");

  function switchStatus(e) {
    let btnClicked = e.target;

    if (btnClicked == btnCatStatus[0]) {
      pageFindYourCat[0].classList.add("d-none");
      pageFoundACat[0].classList.remove("d-none");

      btnFindYourCat[0].classList.remove("active-status-js");
      btnFoundACat[0].classList.add("active-status-js");

      pagination[0].classList.remove("d-none");
    } else {
      btnFindYourCat[0].classList.add("active-status-js");
      btnFoundACat[0].classList.remove("active-status-js");

      pageFindYourCat[0].classList.remove("d-none");
      pageFoundACat[0].classList.add("d-none");

      pagination[0].classList.add("d-none");
    }
  }

  if (btn != undefined) {
    switchStatus(btn);
  }

  Array.from(btnCatStatus).forEach((ele, i) => {
    if (i != 2) {
      ele.addEventListener("click", switchCatStatus);
    }
  });
}

switchCatStatus(undefined);
