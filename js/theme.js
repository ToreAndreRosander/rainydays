let theme = localStorage.getItem('theme');

if(theme == null) {
    let mode = 'default';
    setTheme(mode)
} else { 
    setTheme(theme);
}

let themeLinks = document.getElementsByClassName('theme-link');

for (var i=0; themeLinks.length > i; i++) {
    themeLinks[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}

function setTheme(mode) {
    var themesCheck = ["cuddly-blue","deep-cherry","default","candy-kick"];

    if (themesCheck.indexOf(mode) >= 0) {
        document.getElementById('theme-style').href = './styles/' + mode + '.css';
        localStorage.setItem('theme', mode);
    }

    
}