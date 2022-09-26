// get our art data

const getData = async () => {
    let response = await axios.get(`https://api.artic.edu/api/v1/artworks`)
    return response.data.data
}

//creat constance to hold DOM elements
const DOM_Elements = {
    art_list : '.art_list'
}

// Create the Art List HTML
const create_list = (id, title) => {
    const html = `<a href="#" class="list-group=item list-group-item-action list-group-item-light" id="${id}"> ${title} </a>`
    document.querySelector(DOM_Elements.art_list).insertAdjacentHTML('beforeend', html)
}

// Functions to load data and display the Html

const load_data = async() => {
    let art_works = await getData()
    console.log(art_works)
    art_works.forEach(element => create_list(element.id, element.title))
}

const clear_data = () => {
    document.querySelector(DOM_Elements.art_list).innerHTML = clear_data
}