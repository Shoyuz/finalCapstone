//GET THE LIKE AND THE ADD TO FAVOURITE BUTTON ICONS
const likeAndAddToFavouriteIcons = document.querySelectorAll(
  ".fa-heart,.fa-bookmark"
);

//ASSIGN ONCLICK EVENT LISTENER TO THE LIKE BUTTON AND THE ADD TO FAVOURITES BUTTON ICONS
likeAndAddToFavouriteIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    //When a user clicks the button it toggles to red color
    e.target.classList.toggle("like-btn");
    // if (e.target.className == "fa-solid fa-heart like-btn") {
    //   liked.push(e.target.parentElement.parentElement);
    // } else if (e.target.className == "fa-solid fa-bookmark like-btn") {
    //   // saveForLater.push(e.target.parentElement.parentElement);
    //   saveToLocalStorage(e.target.parentElement.parentElement);
    //   alert(savedForLaterCountMessage());
    // }

    if (e.target.className == "fa-solid fa-bookmark like-btn") {
      // saveForLater.push(e.target.parentElement.parentElement);
      saveToLocalStorage(e.target.parentElement.parentElement);
      alert(savedForLaterCountMessage());
    }
  });
});

//FUNCTION TO DISPLAY SAVED FOR LATER ITEMS
function displaySavedForLater() {
  if (savedForLaterCount() > 0) {
    let div = document.querySelector(".forLater");
    div.innerHTML = "";
    let saved = JSON.parse(localStorage.getItem("saveForLater"));

    saved.forEach((item) => {
      div.innerHTML += item;
    });
  } else {
    alert("You have no items saved for later");
  }
}

//FUNCTION TO STORE DATA TO LOCAL STORAGE
function saveToLocalStorage(data) {
  if (localStorage.getItem("saveForLater") === null) {
    localStorage.setItem("saveForLater", JSON.stringify([]));
  }
  //WILL HOLD THE TEMPORARY ARRAY FROM LOCAL STORAGE
  let saveForLater = [];

  saveForLater = JSON.parse(localStorage.getItem("saveForLater"));

  saveForLater.push(data.outerHTML);

  console.log(saveForLater);
  //array = [saveForLater[saveForLater.length - 1].outerHTML];

  // console.log(`data = ${saveForLater[saveForLater.length - 1].outerHTML}`);
  // console.log("setting local storage");
  // localStorage.setItem("saveForLater", JSON.stringify(array));
  localStorage.setItem("saveForLater", JSON.stringify(saveForLater));
}

//SAVE FOR LATER MESSAGE TO DISPLAY ON ALERT
function savedForLaterCountMessage() {
  if (localStorage.getItem("saveForLater") !== null) {
    let itemsArray = JSON.parse(localStorage.getItem("saveForLater"));
    return `You have ${itemsArray.length} items saved for later`;
  } else {
    return `You have no items saved for later`;
  }
}

//FUNCTIONS THAT RETURNS THE COUNT OF ITEMS SAVED FOR LATER IN THE LOCAL STORAGE
function savedForLaterCount() {
  if (localStorage.getItem("saveForLater") !== null) {
    let itemsArray = JSON.parse(localStorage.getItem("saveForLater"));
    return itemsArray.length;
  } else {
    return 0;
  }
}
