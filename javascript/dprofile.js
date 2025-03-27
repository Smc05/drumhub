import { data } from './data.js';

const urlParams = new URLSearchParams(window.location.search);
const Drumid = urlParams.get('id');

var savedDrums = JSON.parse(localStorage.getItem('savedDrums')) || []
localStorage.setItem('savedDrums', JSON.stringify( savedDrums ));


function createDrumProfile(drum) {
    var drumprofile = document.getElementById('drum-profile')
    drumprofile.innerHTML = ``
    drumprofile.innerHTML = `
        <br>
        <div class="container">
            <div class="row">
              <div class="col">
                <img src="drums/${drum.path}.png" alt="drumpic">
              </div>
              <div class="col ">
                <h2>${drum.title}</h2>
                <p>${drum.description}</p>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col">
                <input type="button" onclick="location.href='index.html'" value="back"/>
              </div>
              <div class="col-5">
              </div>
              <div class="col">
                <button id="btn" onclick="save()" class="${savedDrums.includes(Drumid) ? 'saved' : ''}" >${savedDrums.includes(Drumid) ? 'saved' : 'save'}</button>
              </div>
            </div>
          </div>
    `;
}
window.save = function () {
  savedDrums.includes(Drumid) ? savedDrums = savedDrums.filter(item => item != Drumid) : savedDrums.push(Drumid);
  localStorage.setItem('savedDrums', JSON.stringify( savedDrums ));
  createDrumProfile(data().filter(drum => drum.id == Drumid)[0])
}

createDrumProfile(data().filter(drum => drum.id == Drumid)[0]);


