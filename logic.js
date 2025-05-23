
const setNewDate = new Date();
setNewDate.setDate(setNewDate.getDate() + 14);

function updateCountDown(){

    const nowDate = new Date();
    const differnece = setNewDate - nowDate;

    if (differnece <= 0) {
        document.getElementById('days-front').textContent = '00';
        document.getElementById('days-back').textContent = '00';
        document.getElementById('hours-front').textContent = '00';
        document.getElementById('hours-back').textContent = '00';
        document.getElementById('minutes-front').textContent = '00';
        document.getElementById('minutes-back').textContent = '00';
        document.getElementById('seconds-front').textContent = '00';
        document.getElementById('seconds-back').textContent = '00';
        return;
    } else {
        
        // Calculate time units
        const days = Math.floor(differnece / (1000 * 60 * 60 * 24));
        const hours = Math.floor((differnece % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((differnece % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((differnece % (1000 * 60)) / 1000);

        const format = (num) => num.toString().padStart(2, '0');


        // if days change 
        updateCard("days", format(days))
        // if hours change
        updateCard("hours", format(hours))
        // if minutes change
        updateCard("minutes", format(minutes))
        // if seconds change
        updateCard( "seconds", format(seconds))


    }
}

function updateCard(units, newValue) {

    const frontElement = document.getElementById(`${units}-front`);
    const backElement = document.getElementById(`${units}-back`);
    const cardElement = document.getElementById(`${units}-card`);

    
   
    if (frontElement.innerText !== newValue) {
        
        backElement.innerText = newValue;
                
        
        cardElement.classList.add('flipping');
                
       
        setTimeout(() => {
            frontElement.innerText = newValue;
            cardElement.classList.remove('flipping');
        }, 300); 
    }
}


// Initial update
updateCountDown();
        
// Update every second
setInterval(updateCountDown, 1000);