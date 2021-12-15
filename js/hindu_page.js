import info from "./localStorage.js";
const infos = new info();
var hindu_info = infos.getInfo_hindu();
var popular_sports = infos.getSports_hindu();

var prom = document.getElementById("prom-fig");

function add_info() {
    prom.innerHTML = ""
    hindu_info.forEach(element => {
        var name = document.createElement('h3');
        name.textContent = element.name;
    
        var photo = document.createElement('img');
        photo.setAttribute("src", element.photo);
        photo.setAttribute('alt', element.photo);
        photo.setAttribute('id', 'athlete');
    
        var description = document.createElement('p');
        description.textContent = element.description;
    
        var video = document.createElement('iframe');
        video.setAttribute('src', element.video);
    
        prom.appendChild(name);
        prom.appendChild(photo);
        prom.appendChild(description);
        prom.appendChild(video);
    });
}
add_info();

var sp = document.getElementById("sports");

function add_sport_info() {
    sp.innerHTML = ""
    popular_sports.forEach(element => {
        var sport = document.createElement('li');
        sport.textContent = element;

        sp.appendChild(sport);
    });
}
add_sport_info();

var submit = document.getElementById('submit-add');

submit.onclick = function(event) {
    var add = document.getElementById('add');
    if (add.style.display == "block"){
        add.style.display = "none";
    }
    else {
        add.style.display = "block";
    }
    var name = document.getElementById('name').value;
    var photo = document.getElementById('photo').value;
    var description = document.getElementById('description').value;
    var video = document.getElementById('video').value;

    var newInfo = {
        "name": name,
        "photo": photo,
        "description": description,
        "video": video
    }
    
    hindu_info.push(newInfo);
    add_info();
}

var submit1 = document.getElementById('submit-sport');

submit1.onclick = function(event) {
    var add = document.getElementById('sport');
    if (add.style.display == "block"){
        add.style.display = "none";
    }
    else {
        add.style.display = "block";
    }
    var name = document.getElementById('sportName').value;
    
    popular_sports.push(name);
    add_sport_info();
}