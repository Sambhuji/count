const count = document.querySelector('.count');

const allBtn = document.querySelectorAll('.btn');

let initCount = 0;



allBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
       const clasList =  e.currentTarget.classList;

       if(clasList.contains('increase')) {
        initCount++;
        count.innerText = initCount;
        
       } else if(clasList.contains('decrease')) {
        initCount--;
        count.innerText = initCount;
       } else {
        initCount = 0;
        count.innerText = initCount;
       };
       if(initCount > 0) {
         count.style.color = 'green';
       } else if (initCount < 0) {
        count.style.color = 'red';
       } else {
        count.style.color = 'black';
       }

    })
    
})

