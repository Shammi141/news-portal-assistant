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
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
            <a class="category-link" onclick ="clickedCategoryNews('${category.category_id}')">${category.category_name} </a>
        `;
        categoriesContainer.appendChild(categoryDiv);
    })
}

const clickedCategoryNews = (categoryId) => {
    //console.log(categoryId);
    loadNewses(categoryId);
}

loadCategories();





// all news part 
const loadNewses = async (categoryId) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/08`
    const res = await fetch(url)
    const data = await res.json()
    displayNewses(data.data, categoryId);
}

const displayNewses = (newses, categoryId) =>{
    console.log(categoryId);

    //display categoryId's matching news
    // if (categoryId === ${newses.category_id}){

    // }

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
                    <p class="card-text">${news.details.slice(0,250)}</p>
                    
                    <div>
                        <div> 
                            <p></p>
                            <p></p>
                        </div>
                        
                        <div onclick = "showAllInfo()" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show All</div>
                    </div>
                </div>
            </div>

        `;
        newsesContainer.appendChild(newsDiv);


    });

    const showAllInfo = () => {

    }
}


loadNewses();




