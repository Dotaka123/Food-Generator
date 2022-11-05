
const openbtn = document.querySelector(".open");
const modal = document.querySelector('.box');
const closeBtn = document.querySelector('.close');
// we are saying that when we click This

openbtn.addEventListener("click", () => {

  modal.classList.add('visible')
  openbtn.classList.add('hidden');
  const startit = () => {
    setTimeout(function () {
      confetti.start();
    },4000);
  };
  // Stops
  const stopit = () => {
    setTimeout(function () {
      confetti.stop();
    }, 5000);
  };
  // playing start
  startit();
  // stoping it
  stopit();
});
closeBtn.addEventListener('click', () => {
  modal.classList.remove('visible')
  openbtn.classList.remove('hidden');
})
