const marvel = {
    render: () => {
        
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=ee20b6b3fe5db51d49ad3be29a54c2f4&hash=5578411f97d184d25a89e25b12623055';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';


        fetch(urlAPI).then(res => res.json()).then((json) => {
            for(const hero of json.data.results) {
                let urlHero = hero.urls[0].url;
                contentHTML+=`
                <div class="col-md-4">
                <a href="${urlHero}" target="-blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}"alt="${hero.name}"  class="img-thumbnail">
                </a>
                <h3 class="title">${hero.name}</h3>
            </div>`
            }
            container.innerHTML= contentHTML;
        })

    }
};

marvel.render();