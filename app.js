// category part 
const loadCategories = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
}

const displayCategories = categories =>{
    const categoriesContainer = document.getElementById('category-names');
    categories.forEach(category => {
        const categoryLi = document.createElement('li');
        categoryLi.innerHTML = `
        <a onclick = "newsDetails('${category.category_id}')">${category.category_name}</a>
        `
        categoriesContainer.appendChild(categoryLi);
    })
}

const newsDetails =async (categoryId) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayNewsDetails(data.data);
}


// display part 
const displayNewsDetails = (newses) =>{
    const newsDetails = document.getElementById('news-container');
    newsDetails.innerHTML = ``;
    newses.forEach(news =>{

        const newsDiv = document.createElement('div');
        newsDiv.classList.add('row')
        newsDiv.innerHTML = `
                <div class="col-md-3">
                <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-9">
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">${news.details.slice(0, 210)}...</p>
                    
                    <div class="d-flex flex-row flex justify-content-between">
                        <div class="d-flex"> 
                            <img class="author-img" src="${news.author.img}" alt="...">
                            <div class= "d-flex flex-column ms-2">
                                <span>${news.author.name ? news.author.name : 'No Name'}</span>
                                <span>${news.author.published_date ? news.author.published_date : 'No Publish Date'}</span>
                            </div>
                        </div>

                        <div>
                            <i class ="fa-regular fa-eye"></i>
                            <span>${news.total_view ? news.total_view : 'No Views'} M</span>
                        </div>

                        <div onclick = "showAllInfo()" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#newsDetailModal">See Details</div>
                    </div>
                </div>
            </div>
        `;

        newsDetails.appendChild(newsDiv);
    })
}



loadCategories();





