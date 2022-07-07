const catWeight = 20;
const speedLight = 3e8;

const catEnergy = catWeight * speedLight **2;
// const catEnergy = catWeight * Math.pow(speedLight,2);
console.log(`Энергия кота - ${catEnergy} Дж`);