import { films } from './films.js/index.js'

const intro = document.querySelector('.intro')

films.sort((a,b) => (a.episode_id > b.episode_id) ? 1 : -1 )

films.forEach(film => {
    let title = document.createElement('div')

    let titleElement = document.createElement('h1')
    title.appendChild(titleElement)
    titleElement.textContent = film.title

    let crawlElement = document.createElement('div')
    title.appendChild(crawlElement)
    crawlElement.textContent = film.opening_crawl

    intro.appendChild(title)
})

