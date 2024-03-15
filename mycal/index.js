let current = '';

function all_clear(){
  document.querySelector('#main-display').value = '';
  current = '';
}

function div(){
  current = current + '/';
  document.querySelector('#main-display').value = current;
}

function mul(){
  current = current + '*';
  document.querySelector('#main-display').value = current;
}


function seven(){
  current = current + 7;
  document.querySelector('#main-display').value = current;
}

function eight(){
  current = current + 8;
  document.querySelector('#main-display').value = current;
}

function nine(){
  current = current + 9;
  document.querySelector('#main-display').value = current;
}

function plus(){
  current = current + '+';
  document.querySelector('#main-display').value = current;
}

function four(){
  current = current + 4;
  document.querySelector('#main-display').value = current;
}

function five(){
  current = current + 5;
  document.querySelector('#main-display').value = current;
}

function six(){
  current = current + 6;
  document.querySelector('#main-display').value = current;
}

function sub(){
  current = current + '-';
  document.querySelector('#main-display').value = current;
}

function one(){
  current = current + 1;
  document.querySelector('#main-display').value = current;
}

function two(){
  current = current + 2;
  document.querySelector('#main-display').value = current;
}

function three(){
  current = current + 3;
  document.querySelector('#main-display').value = current;
}

function modules(){
  current = current + '%';
  document.querySelector('#main-display').value = current;
}

function dot(){
  current = current + '.';
  document.querySelector('#main-display').value = current;
}

function zero(){
  current = current + 0;
  document.querySelector('#main-display').value = current;
}

function equal(){
  document.querySelector('#main-display').value = eval(current);
  current = '';
}