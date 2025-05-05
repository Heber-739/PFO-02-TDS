let openColorModalProperty = false;
const LOCAL_STORAGE_THEME = "colorTheme"
const modal = document.getElementById('colorModal');

function handleClick() {
  if(!openColorModalProperty) return;
    document.removeEventListener('click', handleClick);
    openColorModalProperty = false;
    modal.style.display = "none";
}

function openColorModal(){
    if(openColorModalProperty) return;
    openColorModalProperty = !openColorModalProperty;
    setTimeout(() =>  document.addEventListener('click', handleClick),0);
    modal.style.display = "flex";
}

const getColors = (color = "blue") => {
    switch (color) {
      default:
      case "blue":
        return ['#3c40a4', '#4d68f0', '#8697fe', '#003567', '#119e99'];
      case "green":
        return ['#40A33C', '#b38f00', '#6bb300', '#356600', '#7d6400'];
      case "red":
        return ['#a30a29', '#e21d38', '#fc5555', '#761622', '#db4900'];
      case "dark":
        return ['#4d4d4d', '#778899', '#595959', '#1a1a1a', '#0e0e0e'];
    }
  };

function changeColor(color = "blue") {
  handleClick()
  const colors = getColors(color);
  localStorage.setItem(LOCAL_STORAGE_THEME, color);
  for (let i = 0; i < 5; i++) {
    document.documentElement.style.setProperty(
      `--color${i + 1}`,
      `${colors[i]}`
    );
  }
}

const colorTheme = localStorage.getItem(LOCAL_STORAGE_THEME);
changeColor(colorTheme);