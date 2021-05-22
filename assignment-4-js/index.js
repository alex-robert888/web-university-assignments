
fetch("https://roloca.coldfuse.io/judete")
.then(response => response.json())
.then(counties => {
    const countiesSelect = document.querySelector("#counties");
    for (const county of counties) {
        var noDiacriticsCountyName = county['nume'].normalize('NFKD').replace(/[^\w]/g, '');

        let option = document.createElement('option');
        option.value = noDiacriticsCountyName;
        option.innerHTML = noDiacriticsCountyName;
        countiesSelect.appendChild(option);
    }
})

function populateCitiesSelect() {
    const countiesSelect = document.querySelector("#counties");
    const citiesSelect = document.querySelector("#cities");

    citiesSelect.innerHTML = null;
    fetch("https://raw.githubusercontent.com/catalin87/baza-de-date-localitati-romania/master/date/localitati.json")
    .then(response => response.json())
    .then(cities => {
        for (const city of cities) {
            if (city['judet'] != countiesSelect.value) {
                continue;
            }

            let option = document.createElement('option');
            option.value = city['nume'];
            option.innerHTML = city['nume'];
            citiesSelect.appendChild(option);
        }
    })
}