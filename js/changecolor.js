let changed;

function changeColor() {
  let element = document.getElementById('paragraph');
  if (!changed) {
    element.style.backgroundColor = '#99ff99';
    changed = true;
  } else {
    element.style.backgroundColor = 'gray';
    changed = false;
  }
}