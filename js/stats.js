document.addEventListener('DOMContentLoaded', function() {
    // Generating today's random numbers
    function randomNumber(todayNumbers) {

    let numberToday;
    do {
        numberToday = Math.floor(Math.random() * (10000 + 1))
    } while (todayNumbers.includes(numberToday));

    todayNumbers.push(numberToday);
    return numberToday;
    }
    // Array of the random numbers
    let todayNumbers = [];

    // Showing the random numbers in the HTML
    const statsElements = document.querySelectorAll('[id^="stats-"]');
    statsElements.forEach(function(statsElement) {
        statsElement.textContent = randomNumber(todayNumbers);
    });

    // Total followers
    function sumNumbers() {
        const followersElements = document.querySelectorAll('.follows-number');

        let sum = 0;

        followersElements.forEach(element => {
            sum += parseFloat(element.textContent) || 0;
        })
        
        return sum;
    }

    // Showing the the total followers in the HTML
    const followers = document.getElementById('totalFollowers');
    followers.textContent = `Total followers: ${sumNumbers()}`;

    // Generating random stadistics
    function randomStadistics(stadisticsRandom) {

        let numberStadistic = 0;
        do {
            numberStadistic = Math.floor(Math.random() * (201) - 100);
            console.log(numberStadistic);
        } while (stadisticsRandom.includes(numberStadistic));

        stadisticsRandom.push(numberStadistic);
        return numberStadistic;
    }
    // Array of the random stadistics
    let stadistics = [];

    // Generating multiplies random stadistics
    for (let i = 0; i < 12; i++) {
        randomStadistics(stadistics);
    }

    // Showing the random stadistics in the HTML
    const stadisticsElements = document.querySelectorAll('.stadistics');

    stadistics.forEach((num, index) => {

        let content = stadisticsElements[index];
        content.textContent = `${num}%`;

        if (num < 0) {
            content.classList.add('red-text');
            let negativeIcon = document.createElement('img');
            negativeIcon.src = '../images/icon-down.svg';
            content.insertBefore(negativeIcon, content.firstChild);
        } else {
            content.classList.add('green-text');
            let positiveIcon = document.createElement('img');
            positiveIcon.src = '../images/icon-up.svg';
            content.insertBefore(positiveIcon, content.firstChild);
        }
    });
});