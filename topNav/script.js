const about = document.getElementById('about')
const file = document.getElementById('file')
const modify = document.getElementById('modify')
const displayMenu = (id) => {
    switch(id){
        case "about" : about.style.display = 'flex';break;
        case "file" : file.style.display = 'flex';break;
        case "modify" : modify.style.display = 'flex';break;
    }
}
const hideMenu = (id) => {
    switch(id){
        case "about" : about.style.display = 'none';break;
        case "file" : file.style.display = 'none';break;
        case "modify" : modify.style.display = 'none';break;
    }
}

