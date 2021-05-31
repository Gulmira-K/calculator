const btns = document.querySelectorAll('input');
const result = document.getElementById('result');

console.log(btns)

btns.forEach((btn) => btn.onclick = handleClick)
     
function handleClick() {
  console.log(this.name)
  switch (this.name) {
    case 'C':
      result.innerHTML = ''; break;
    case '=':
      result.innerHTML = eval(result.innerHTML); break;
    case 'backspace':
      result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length - 1); break;
    default:
      result.innerHTML += this.value;
  }
}