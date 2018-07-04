var obj = {};
var retObj_0 = {};
var retObj = {};

function checks() {
    var cbx = document.getElementsByTagName("input"),
        mas = [];
    for (i = 0; i < cbx.length; i++) {
        if (cbx[i].type == "checkbox" && cbx[i].checked) {
            mas.push(cbx[i].value);
            retObj_0['q0'] = mas;
        }
    }
    var sObj = JSON.stringify(retObj_0);
    localStorage.setItem("object_0", sObj);
    console.log('1.', localStorage.object_0);
    retObj_0 = JSON.parse(localStorage.getItem("object_0"));
}

var q1 = document.getElementsByClassName('q_1');
for (var i = 0; i < q1.length; i++) {
    q1[i].addEventListener('click', function (e) {
        obj['q1'] = e.target.innerText;
        console.log(obj);
    })
}
var q2 = document.getElementsByClassName('q_2');
for (var i = 0; i < q2.length; i++) {
    q2[i].addEventListener('click', function (e) {
        obj['q2'] = e.target.innerText;
        console.log(obj);
    })
}

var buttons = document.getElementsByName("note");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", getValue);
}
function getValue(event) {
    obj['vote'] = event.target.value;
    console.log(obj);
}

var vous = document.getElementsByName("vous");
for (var i = 0; i < vous.length; i++) {
    vous[i].addEventListener("change", getValueVous);
}
function getValueVous(event) {
    obj['vous'] = event.target.value;
    console.log(obj);
}

var age = document.getElementById('age');
age.addEventListener("change", getValueAge);
function getValueAge(event) {
    obj['age'] = event.target.value;
    console.log(obj);
}



