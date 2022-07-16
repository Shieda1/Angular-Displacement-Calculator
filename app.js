// https://calculator.swiftutors.com/angular-displacement-calculator.html
// https://www.omnicalculator.com/physics/angular-displacement

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const angularDisplacementRadio = document.getElementById('angularDisplacementRadio');
const distanceRadio = document.getElementById('distanceRadio');
const radiusRadio = document.getElementById('radiusRadio');

// variables
let angularDisplacement;
let distance = v1;
let radius = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

// setting the text of the labels and assign the values of inputs to the variables
angularDisplacementRadio.addEventListener('click', function() {
  variable1.textContent = 'Distance Travelled (s)';
  variable2.textContent = 'Radius Of Circular Path (r)';
  distance = v1;
  radius = v2;
});

distanceRadio.addEventListener('click', function() {
  variable1.textContent = 'Angular Displacement (θ)';
  variable2.textContent = 'Radius Of Circular Path (r)';
  angularDisplacement = v1;
  radius = v2;
});

radiusRadio.addEventListener('click', function() {
  variable1.textContent = 'Angular Displacement (θ)';
  variable2.textContent = 'Distance Travelled (s)';
  angularDisplacement = v1;
  distance = v2;
});

// displaying the result
btn.addEventListener('click', function() {
  
  if(angularDisplacementRadio.checked)
    result.textContent = `Angular Displacement = ${computeAngularDisplacement().toFixed(2)} (rad)`;

  else if(distanceRadio.checked)
    result.textContent = `Distance Travelled = ${computeDistance().toFixed(2)} (m)`;

  else if(radiusRadio.checked)
    result.textContent = `Radius Of Circular Path = ${computeRadius().toFixed(2)} (m)`;
})

// calculations

function computeAngularDisplacement() {
  return Number(distance.value) / Number(radius.value);
}

function computeDistance() {
  return Number(angularDisplacement.value) * Number(radius.value);
}

function computeRadius() {
  return Number(distance.value) / Number(angularDisplacement.value);
}
