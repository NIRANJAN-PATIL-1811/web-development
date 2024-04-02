let startingPoint = 0

function add_to_bag(){
  startingPoint = startingPoint + 1;
  document.querySelector('#text').innerText = `You have ${startingPoint} items.`;
}

function add_to_wishlist(){
  startingPoint = startingPoint - 1;
  document.querySelector('#text').innerText = `You have ${startingPoint} items.`;
}

function add_one_plus_one(){
  startingPoint = startingPoint + 2;
  document.querySelector('#text').innerText = `You have ${startingPoint} items.`;
}