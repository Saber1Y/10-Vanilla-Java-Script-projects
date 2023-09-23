const plusBtn = document.querySelectorAll('.question-btn'); 
// const question = document.querySelector('.question-text'); 


 console.log(plusBtn);
 
 plusBtn.forEach( function(btn) {
    btn.addEventListener('click', function(e) {
        const question = e.currentTarget.parentElement.parentElement;
     question.classList.toggle('show-text');
    });
 });

//   function openToggle() {
//     plusBtn.forEach(plusIcon => {
//         if (question.style.display === 'none' || question.style.display === '') {
//                  question.style.display = 'block';
//                  plusBtn.style.display = 'none';
//                  minusBtn.style.display = 'inline';
//                } else {
//                  question.style.display = 'none';
//                  plusBtn.style.display = 'inline';
//                  minusBtn.style.display = 'none';
//                }
//     });
//   }
