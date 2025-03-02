const themeBtn = document.querySelector("#theme-toggle");
const modeLight = document.querySelector("#mode-light");
const modeDark = document.querySelector("#mode-dark");



const languageSelect = document.querySelector("#language-select");

async function fetchTranslations(languageSelect) {

function applyTranslations(languageSelect, translation) {
  const elements = document.querySelectorAll("[data-translate]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");

    if (translation[languageSelect] && translation[languageSelect][key]) {
      element.textContent = translation[languageSelect][key];
    }
  });
}
}

window.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "en";
  languageSelect.value = savedLanguage;
  fetchTranslations(savedLanguage);
});

languageSelect.addEventListener("change", (event) => {
  const languageSelect = event.target.value;
  localStorage.setItem("language", languageSelect);
  fetchTranslations(languageSelect);
});





//Mode
let currentTheme = "dark"
const body = document.body;

themeBtn.addEventListener ("click", ()=>{
    console.log( "Button is being clicked") 
    body.classList.toggle("dark-mode");

    if (currentTheme === "dark")

    {
        //Show light icon and switch background colors
        modeDark.style.display = "none";
        modeLight. style.display = "inline";
        localStorage. setItem("current Theme", "light")
        currentTheme = "light"

    }

    else
    {

        modeLight.style.display = "none";
        modeDark.style.display = "inline";
        //Show dark icon and switch background colors
        currentTheme = "dark"

    }
    })
  

if(localStorage.getItem("currentTheme") === "dark") {

    body.classList.add("dark-mode");
    modeDark.style.display = "none";
    modeLight.style.display = "inline";
}
else
{
    modeDark.style.display = "none";
    modeLight.style.display = "inline";
}
themeBtn.addEventListener("click", ()=>{
    console.log("Button is being clicked")
    body.classList.toggle("dark.mode");

//check the code from here and edit it 
    if(currentTheme == "dark")
{
    //show light icon and switch background colors
    modeDark.style.display = "none";
    modeLight.style.display = "inline";
    currentTheme = "light"
}
else
{      
        modeLight.style.display = "none";
        modeDark.style.display = "inline";
         //show dark icon and switch background colors
        currentTheme = "dark"

}
})
