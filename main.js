function adunare(){
  var x = Number(document.getElementById('x').value);
  var y = Number(document.getElementById('y').value);

  document.getElementById('rezultat').innerHTML = x+y;
}

function schimbare(){
  var x = Number(document.getElementById('x').value);
  var y = Number(document.getElementById('y').value);

  document.getElementById('x').value = y;
  document.getElementById('y').value = x;
}

function changeColor() {
  document.getElementById("containers").onmouseenter = function() {mouseEnter()};
  document.getElementById("containers").onmouseleave = function() {mouseLeave()};
  function mouseEnter() {
    document.getElementById("containers").style.backgroundColor = "red";
    document.getElementById("containers").innerHTML = "Yessssssssss";
  }
  function mouseLeave() {
    document.getElementById("containers").style.backgroundColor = "white";
    document.getElementById("containers").innerHTML = "Maybe again???";
  }
} changeColor();


function paragrafe(){
  var a ="";
  for (var i = 1; i <= 10; i++) {
    var x = document.createElement('p');
    var t = document.createTextNode("Paragraful nr " + i);
    a = document.getElementById("divid").appendChild(x);
    x.appendChild(t);
    if (i % 2 == 0) {
      x.setAttribute("style", "background-color:lightblue; width:150px;")
    } else {
      x.setAttribute("style", "background-color:yellow; width:150px;")
    }
  }
} paragrafe();

function generateLista(){
  for (i = 1; i <= 10; i++) {
    var x = document.createElement('p');
    x.innerText = "Elementul nr " + i;
    a = document.getElementById("lista").appendChild(x);
    if (i != 10) {
    } else {
      x.setAttribute("style", "background-color:yellow; width:150px;");
    }
  }
} generateLista();

function sterge(){
  document.getElementById("lista").removeChild(lista.childNodes[4]);
}

number = [7, 6, 2, 4, 5, 6, 7, 8, 9, 2];
function sortare(){
  number.sort(function (a, b) {
    return a - b;
});
  document.getElementById("sort").innerHTML = "Sortat  " + number;
}sortare();

var myVar = setInterval(setColor, 5000);

function setColor() {
  var x = document.body;
  x.style.backgroundColor = "slategray";
}

function addLi() {
 var lista = document.getElementById('lista');
  setInterval(function(){
    var li = document.createElement("p");
    li.innerText = "Elementul nr " + (lista.childNodes.length+1);
    lista.append(li)
    }, 10000);
}addLi();

var button = document.getElementById("click"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Just do it: " + count;
};

function hiddenList(){
  var ul = document.createElement('ul');
  table = [7, 6, 2, 4, 5, 6, 7, 8, 9, 2];
  document.getElementById("ex").appendChild(ul);
  i = 0;

setInterval(function() {
    if (i < table.length) {
    var li = document.createElement('li');

    li.innerText = table[i];
    ul.append(li);
    i++
  }
}, 1000);
}hiddenList();

function myFunction() {
  var x = document.getElementById("myLi").innerHTML;
  x = Math.pow(x, 2);
  document.getElementById("myLi").title = x;
  document.getElementById("demo").innerHTML = document.getElementById("myLi").title;
}
