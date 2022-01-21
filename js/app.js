const marvel = {
    render: () => {
        
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=ee20b6b3fe5db51d49ad3be29a54c2f4&hash=5578411f97d184d25a89e25b12623055';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';


        fetch(urlAPI).then(res => res.json()).then((json) => {
            console.log(json, 'RES.JSON')
        })

    }
};

marvel.render();