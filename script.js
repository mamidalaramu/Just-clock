const deg=6;
const hr = document.querySelector('#hr');
const mn=document.querySelector('#mn');
const sec = document.querySelector('#sec');

setInterval(() =>{
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  // let ms = day.getMilliseconds() / 1000 * 360;
  
  hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
  mn.style.transform = `rotateZ(${(mm)}deg)`;
  sec.style.transform = `rotateZ(${(ss)}deg)`;
})