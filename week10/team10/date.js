const today = new Date();
const now = new Date(1546386417685);
const style = {weekday:'long', month:'short', day:'numeric'};

document.querySelector('h1').innerHTML = today.toLocaleDateString("en-US", style);
//document.querySelector('h1').innerHTML = now.toLocaleDateString("en-US", style);
console.log(now.toLocaleDateString("en-US", style));