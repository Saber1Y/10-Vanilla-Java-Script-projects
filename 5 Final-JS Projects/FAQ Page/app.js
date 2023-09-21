const plusBtn = document.querySelectorAll('.plus-icon'); 
const question = document.querySelector('.question-text'); 


 console.log(plusBtn);
 
 plusBtn.forEach( plusIcon => {
    plusIcon.addEventListener('click', () => {
       openToggle();
    });
 })

  function openToggle() {
    plusBtn.forEach(plusIcon => {
        if (question.style.display === 'none' || question.style.display === '') {
                 question.style.display = 'block';
                 plusBtn.style.display = 'none';
                 minusBtn.style.display = 'inline';
               } else {
                 question.style.display = 'none';
                 plusBtn.style.display = 'inline';
                 minusBtn.style.display = 'none';
               }
    });
  }
// plusBtn.addEventListener('click', () => {
//   openToggle();
// });

// function openToggle() {
//   if (question.style.display === 'none' || question.style.display === '') {
//     question.style.display = 'block';
//     plusBtn.style.display = 'none';
//     minusBtn.style.display = 'inline';
//   } else {
//     question.style.display = 'none';
//     plusBtn.style.display = 'inline';
//     minusBtn.style.display = 'none';
//   }
// }
