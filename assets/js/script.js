// yqXK2yp6w2ujhvhFZ6slwI0ukK5FFOwfH5LFFqYiGS4w07I1E5usqLix  CHIAVE API
const apiCatsUrl = 'https://api.pexels.com/v1/search?query=cats'
const apiDogsUrl = 'https://api.pexels.com/v1/search?query=dogs'
const btnLoad1 = document.querySelector('.btnLoad1')
const btnLoad2 = document.querySelector('.btnLoad2')
const btnLoad3 = document.querySelector('.btnLoad3')
const btnLoad4 = document.querySelector('.btnLoad4')
const apiContainer = document.querySelector('.apiContainer')

const options = {
    headers: {
        Authorization: 'yqXK2yp6w2ujhvhFZ6slwI0ukK5FFOwfH5LFFqYiGS4w07I1E5usqLix'
    } 
};

fetcherCats(apiCatsUrl, options)
fetcherDogs(apiDogsUrl, options)

// FETCH CATS

async function fetcherCats(url, option) {
    const response = await fetch(url, option)
    const data = await response.json()
    const cats = data.photos
    const catsPage2 = data.next_page

    console.log(data)
    console.log(cats)

    btnLoad1.addEventListener('click', () => {
        let eleApiContainer = ''
        cats.forEach(cat => {
            eleApiContainer += `
            <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
            <img src=${cat.src.original} class="card-img-top" alt="img">
                <div class="card-body">
                <h5 class="card-title"><a href="/details.html?id=${cat.id}">${cat.alt}</a></h5>
                <p class="card-text">
                    Photograper: ${cat.photographer}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                        View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary btnHide">
                        Hide
                    </button>
                    </div>
                    <small class="text-muted">${cat.id}</small>
                </div>
                </div>
            </div>
            </div>`
        });
        apiContainer.innerHTML = eleApiContainer

        const btnsHide = document.querySelectorAll('.btnHide')
        btnsHide.forEach(bottone => {
            bottone.addEventListener('click', function() {
                this.closest('.col-md-4').remove()
            })
        })
    })

    fetcherCats2(catsPage2, options)

    async function fetcherCats2(url, option) {
        const response = await fetch(url, option)
        const data = await response.json()
        const cats2 = data.photos

        console.log(cats2)

        btnLoad2.addEventListener('click', () => {
            let eleApiContainer = ''
            cats2.forEach(cat => {
                eleApiContainer += `
                <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                <img src=${cat.src.original} class="card-img-top" alt="img">
                    <div class="card-body">
                    <h5 class="card-title">${cat.alt}</h5>
                    <p class="card-text">
                        Photograper: ${cat.photographer}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">
                            View
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary btnHide">
                            Hide
                        </button>
                        </div>
                        <small class="text-muted">${cat.id}</small>
                    </div>
                    </div>
                </div>
                </div>`
            });
            apiContainer.innerHTML = eleApiContainer

            const btnsHide = document.querySelectorAll('.btnHide')
                btnsHide.forEach(bottone => {
                bottone.addEventListener('click', function() {
                this.closest('.col-md-4').remove()
                })
            })
        })
    }
}

// FETCH CANI

async function fetcherDogs(url, option) {
    const response = await fetch(url, option)
    const data = await response.json()
    const dogs = data.photos
    const dogsPage2 = data.next_page

    console.log(data)
    console.log(dogs)

    btnLoad3.addEventListener('click', () => {
        let eleApiContainer = ''
        dogs.forEach(dog => {
            eleApiContainer += `
            <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
            <img src=${dog.src.original} class="card-img-top" alt="img">
                <div class="card-body">
                <h5 class="card-title">${dog.alt}</h5>
                <p class="card-text">
                    Photograper: ${dog.photographer}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                        View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary btnHide">
                        Hide
                    </button>
                    </div>
                    <small class="text-muted">${dog.id}</small>
                </div>
                </div>
            </div>
            </div>`
        });
        apiContainer.innerHTML = eleApiContainer

        const btnsHide = document.querySelectorAll('.btnHide')
        btnsHide.forEach(bottone => {
            bottone.addEventListener('click', function() {
                this.closest('.col-md-4').remove()
            })
        })
    })

    fetcherDogs2(dogsPage2, options)

    async function fetcherDogs2(url, option) {
        const response = await fetch(url, option)
        const data = await response.json()
        const dogs2 = data.photos

        console.log(dogs2)

        btnLoad4.addEventListener('click', () => {
            let eleApiContainer = ''
            dogs2.forEach(dog => {
                eleApiContainer += `
                <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                <img src=${dog.src.original} class="card-img-top" alt="img">
                    <div class="card-body">
                    <h5 class="card-title">${dog.alt}</h5>
                    <p class="card-text">
                        Photograper: ${dog.photographer}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">
                            View
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary btnHide">
                            Hide
                        </button>
                        </div>
                        <small class="text-muted">${dog.id}</small>
                    </div>
                    </div>
                </div>
                </div>`
            });
            apiContainer.innerHTML = eleApiContainer

            const btnsHide = document.querySelectorAll('.btnHide')
                btnsHide.forEach(bottone => {
                bottone.addEventListener('click', function() {
                this.closest('.col-md-4').remove()
                })
            })
        })
    }
}

/* // LOCATION

location  ---> informazioni indirizzo
voce search 

location.search

?id=pagina1 ---> NELL'HTML

API DA ID ALLA FOTO

details?id=id che ha messo l'api alla foto

const id = new URLSearchParams (location.search).get('id') ---> prendere l'id */

/* 
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Edit
                    </button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div> */