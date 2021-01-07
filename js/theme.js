let theme = localStorage.getItem('theme');

if(theme == null) {
    let mode = 'default';
    setTheme(mode)
} else { 
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i=0; themeDots.length > i; i++) {
        themeDots[i].addEventListener('click', function(){
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