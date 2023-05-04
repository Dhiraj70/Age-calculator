function calculate() {
    setInterval(() => {
        let birthdate = new Date(document.getElementById('birthdate').value);

        let now = new Date();
        let ageInMs = now.getTime() - birthdate.getTime();

        let ageInS = ageInMs / 1000; // to seconds
        let ageInMins = ageInS / 60; // to minutes
        let ageInHrs = ageInMins / 60; // to hours
        let ageInDays = ageInHrs / 24; // to days
        let ageInMonth = ageInDays / 30.4375; // to months
        let ageInYeas = ageInMonth / 12 // to years

        document.querySelector('#years').innerHTML = Math.floor(ageInYeas)
        document.querySelector('#months').innerHTML = Math.floor(ageInMonth % 12)
        document.querySelector('#days').innerHTML = Math.floor(ageInDays % 30.4375)
        document.querySelector('#hours').innerHTML = Math.floor(ageInHrs % 24)
        document.querySelector('#minutes').innerHTML = Math.floor(ageInMins % 60)
        document.querySelector('#second').innerHTML = Math.floor(ageInS % 60)
        document.querySelector('#second').style.borderBottom = '1px grey solid'
    }, 1000);
}

function reset() {
    window.location.reload();
}