function handleFormData() {
  const formBtn = document.getElementsByClassName("btn-submit-cat-info");

  function handleData() {
    const btnSubmit = document.getElementsByClassName("btn-link")[0];
    const catName = document.getElementById("name").value;
    const catImg = document.getElementById("new-cat-img").files[0];
    const catDescription = document.getElementById("new-cat-description").value;
    const catSex = document.querySelector(
      'input[name="cat-sex"]:checked'
    ).value;
    const warning = document.getElementsByClassName("warning");

    let nameWarning = warning[0];
    let imgWarning = warning[1];
    let descriptionWarning = warning[2];

    function checkIfTheInputsAreEmpty() {
      let emptyInputs = false;
      if (catName == "") {
        nameWarning.classList.remove("input-filled");
        btnSubmit.href = "#name";
        emptyInputs = true;
      }

      if (catImg == undefined) {
        imgWarning.classList.remove("input-filled");
        btnSubmit.href = "#img";
        emptyInputs = true;
      }

      let numberOfWords = catDescription.split(" ").length;
      if (numberOfWords < 3) {
        descriptionWarning.classList.remove("input-filled");
        btnSubmit.href = "#description";
        emptyInputs = true;
      }

      if (emptyInputs == false) {
        btnSubmit.href = "#wait";
        sendData();
      }

      return emptyInputs;
    }

    function sendData() {
      let newCat = {
        id: Math.floor(Math.random() * 100),
        name: catName,
        imgURL: catImg,
        description: catDescription,
        catSex: catSex,
      };

      catData.cats.push(newCat);
    }

    checkIfTheInputsAreEmpty();
  }

  formBtn[0].addEventListener("click", handleData);
}

handleFormData();
