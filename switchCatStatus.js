let btnCatStatus = document.getElementsByClassName("btn-cat-status");
let catInfo = document.getElementsByClassName("cat-info-wrapper");
let catHtml;

function switchStatus(e) {
  //   catHtml = catInfo.children;
  catInfo.appendChild(catInfo);
  console.log(e);
}

Array.from(btnCatStatus).forEach((ele) => {
  ele.addEventListener("click", switchStatus);
});
