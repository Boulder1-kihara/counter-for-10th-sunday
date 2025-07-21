document.addEventListener('DOMContentLoaded', function(){
    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');
    const currentDateDisplay = document.getElementById('current-date');

    //set the target date for the count down
    //make sure to adjust the year if intended for another yeat
    const targetDate = new Date('August 10, 2025 00:00:00').getTime();

    function updateCountdown(){
        const now = new Date().getTime();
        const distance = targetDate - now;

        //display current date
        const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        currentDateDisplay.textContent = new Date().toLocaleDateString('en-US', options);

        if(distance < 0){
            clearInterval(countdownInterval);
            daysSpan.textContent = '00';
            hoursSpan.textContent = '00';
            minutesSpan.textContent = '00';
            secondsSpan.textContent = '00';
            currentDateDisplay.textContent = "HAPPY BISHOP'S DAY🎉🎉🎊!";
            return;
        }

        //time calculations for days hours mins and seconds
        //total hours remaining from the total miliseconds
        const totalSeconds = Math.floor(distance/1000);
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
        const minutes = Math.floor((totalSeconds % 3600)/60);
        const seconds = totalSeconds % 60;

        //display the results
        daysSpan.textContent = String(days).padStart(2, '0');
        hoursSpan.textContent = String(hours).padStart(2, '0');
        minutesSpan.textContent = String(minutes).padStart(2, '0');
        secondsSpan.textContent = String(seconds).padStart(2, '0');
    }

    //update the countdown every 1 second
    const countdownInterval = setInterval(updateCountdown, 1000);

    //initial call to display timmer immediately without waiting 1 second
    updateCountdown();

});