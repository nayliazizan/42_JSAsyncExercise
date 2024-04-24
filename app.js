let {washFace, exfoliateFace, applyMoisturizer, applySerum} = require('./library.js');

async function doSkincareRoutine() {
  let skincareArray = await Promise.all([washFace(), exfoliateFace(), applyMoisturizer(), applySerum()]);
  console.log(`Tonight, I will do skincare night routine. First, I will ${skincareArray[0]}. Second, I will ${skincareArray[1]}. Then, I will ${skincareArray[2]}. Lastly, I will ${skincareArray[3]}.`)
}

doSkincareRoutine();
