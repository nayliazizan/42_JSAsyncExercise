let washFace = () => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('watch face with cleanser');
   }, 1000);
 });
};

let exfoliateFace = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('exfoliate with salicylic acid');
   }, 1000);
 });
};

let applyMoisturizer = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('apply moisturizer');
   }, 1000);
 });
};

let applySerum = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('put three drop of serum');
   }, 1000);
 });
};

module.exports = {washFace, exfoliateFace, applyMoisturizer, applySerum};