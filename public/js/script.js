var counter = [1, 2, 3, 4, 5, 6, 7, 8];
var cashCounter = [1,2,3,4,5,6,7,8,9];
var displayRack = [1,2,3,4,5,6,7,8,9,10];
var jali = ["_1","_2","_3","_4","_5","_6","_7","_8"];
var medical = ["_1","_2","_3","_4","_5","_6","_7"];

counter.forEach((e, i) => {
    var activeclass = i == 0 ? "active" : "";
    $('#counterArray').append(`<div class="carousel-item ${activeclass}">
                                <img src="public/counter/${e}.jpg" class="d-block w-100" style="height:80vh;" alt="...">
                              </div>`);
})

cashCounter.forEach((e, i) => {
    var activeclass = i == 0 ? "active" : "";
    $('#cashCounterArray').append(`<div class="carousel-item ${activeclass}">
                                <img src="public/cashCounter/${e}.jpg" class="d-block w-100" style="height:80vh;" alt="...">
                              </div>`);
})

displayRack.forEach((e, i) => {
    var activeclass = i == 0 ? "active" : "";
    $('#displayCounterArray').append(`<div class="carousel-item ${activeclass}">
                                <img src="public/displayrack/${e}.jpg" class="d-block w-100" style="height:80vh;" alt="...">
                              </div>`);
})

jali.forEach((e, i) => {
    var activeclass = i == 0 ? "active" : "";
    $('#jaliArray').append(`<div class="carousel-item ${activeclass}">
                                <img src="public/jali/${e}.jpg" class="d-block w-100" style="height:80vh;" alt="...">
                              </div>`);
})

medical.forEach((e, i) => {
    var activeclass = i == 0 ? "active" : "";
    $('#medicalCounterArray').append(`<div class="carousel-item ${activeclass}">
                                <img src="public/medicalRack/${e}.jpg" class="d-block w-100" style="height:80vh;" alt="...">
                              </div>`);
})