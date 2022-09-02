const loadNewses = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/category/08`
    const res = await fetch(url)
    const data = await res.json()
    displayNewses(data.data)
}

const displayNewses = newses =>{
    const newsesContainer = document.getElementById('news-container');
    newses.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('row');
        newsDiv.innerHTML = `
            <div class="col-md-3">
                <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-9">
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">${news.details.slice(0,350)}</p>
                    
                    <div>
                        <div> 
                            <p></p>
                            <p></p>
                        </div>
                        <div>
                        
                        <p></p>
                        </div>
                    </div>
                </div>
            </div>
        
        `;
        newsesContainer.appendChild(newsDiv);
    });
}

loadNewses()