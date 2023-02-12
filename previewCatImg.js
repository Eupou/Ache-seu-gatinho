function previewCatImg() {
  const preview = document.getElementById("img-preview");
  const file = document.getElementById("new-cat-img").files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    preview.src = reader.result;
  });

  if (file) {
    reader.readAsDataURL(file);
  }
}

previewCatImg();
