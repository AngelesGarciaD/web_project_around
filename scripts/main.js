// Elementos requeridos
const editButton = document.querySelector(".profile__edit-button");
const editProfilePopup = document.querySelector(".popup");
const closePopupButton = editProfilePopup.querySelector(".popup__close");
const nameInput = editProfilePopup.querySelector(".popup__input_name");
const aboutInput = editProfilePopup.querySelector(".popup__input_about");

const profilName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const editProfileForm = document.querySelector(".popup__container");

// Mostrar ventanas emergentes y completar la entrada con datos de perfil existentes
function openEditPopup() {
  nameInput.value = profilName.textContent;
  aboutInput.value = profileAbout.textContent;
  editProfilePopup.classList.add("popup_opened");
}

// Cerrar ventana emergente
function closeEditPopup() {
  editProfilePopup.classList.remove("popup_opened");
}

// Escuchar clic "Editar perfil"
editButton.addEventListener("click", openEditPopup);

// Escuchar clic "Cerrar"
closePopupButton.addEventListener("click", closeEditPopup);

editProfileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profilName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closeEditPopup();}
);