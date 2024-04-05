const cube = document.getElementById('cubo');
//indica si el usuario está arrastrando el cubo
let isDragging = false;
let previousMousePosition = {
  x: 0,
  y: 0
};

cube.addEventListener('mousedown', function(event) {
  isDragging = true;
   // registra la posición del mouse
  previousMousePosition.x = event.clientX;
  previousMousePosition.y = event.clientY;
});

cube.addEventListener('mouseup', function() {
  isDragging = false;
});

cube.addEventListener('mousemove', function(event) {
  if (!isDragging) return;
  let deltaX = event.clientX - previousMousePosition.x;
  let deltaY = event.clientY - previousMousePosition.y;
  cube.style.transform += ` rotateX(${deltaY * 0.5}deg) rotateY(${deltaX * 0.5}deg)`;
  previousMousePosition.x = event.clientX;
  previousMousePosition.y = event.clientY;
});

function updateClock() {
  const now = new Date();
  // obtiene los segundos, minutos y horas actuales
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  
  document.getElementById('segundos').innerText = seconds < 10 ? '0' + seconds : seconds;
  document.getElementById('minuto').innerText = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('hora').innerText = hours < 10 ? '0' + hours : hours;
// genera un color aleatorio y lo aplica a los números del reloj
  const color = getRandomColor(); 
  document.querySelectorAll('.numero').forEach(number => {
    number.style.color = color; 
  });
}

function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

setInterval(updateClock, 1000);

updateClock();