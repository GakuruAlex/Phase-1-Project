

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c25be73193mshec5a19bdd082cc9p128ae6jsnd95fa665178f',
            'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
    };

    fetch('https://airbnb19.p.rapidapi.com/api/v1/getLanguages', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))
