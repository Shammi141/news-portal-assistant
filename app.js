// loading category data
const loadCategories = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
}

//display categoris name 
const displayCategories = categories =>{
    const categoriesContainer = document.getElementById('category-names');
    categories.forEach(category => {
        const categoryLi = document.createElement('li');
        categoryLi.classList.add('liDesign')
        categoryLi.innerHTML = `
        <a onclick = "newsDetails('${category.category_id}')">${category.category_name}</a>
        `
        categoriesContainer.appendChild(categoryLi);
    })

}

const newsDetails =async (categoryId) => {

    //start spinner
    toggleSpinner(true);

    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayNewsDetails(data.data);
}



// display part 
const displayNewsDetails = (newses) =>{
    const newsDetails = document.getElementById('news-container');
    newsDetails.innerHTML = ``;


    //disply found items number
    const items = newses.length;
    const foundItems = document.getElementById('found-items');
    foundItems.innerHTML = `
        ${items} items founds for category 
    `;
    

    // display no news found
    const noNewses = document.getElementById('not-found');
    if(newses.length === 0){
        noNewses.classList.remove('d-none');
    }
    else{
        noNewses.classList.add('d-none');
    }

    // display newses 
    newses.forEach(news =>{

        const newsDiv = document.createElement('div');
        newsDiv.classList.add('row');
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

                        <div onclick = "showNewsInModal(${news._id})" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#newsDetailModal">See Details</div>
                    </div>
                </div>
            </div>
        `;

        newsDetails.appendChild(newsDiv);
    });

    //stop loader
    toggleSpinner(false);

}

const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

// showing information details through a modal 
const showNewsInModal = async (id) =>{
    const url = `https://openapi.programming-hero.com/api/news/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayNewsInModal(data.data);
}

const displayNewsInModal = news =>{
    
}


loadCategories();


