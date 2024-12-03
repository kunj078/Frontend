const apiKey = 'dcd8f2598ff64c9b84b06076a78bfeae';

const blogContainer = document.getElementById('blog-container');
const searchField = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

async function fetchRandomNews() {
    try {
            const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=${apiKey}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data.articles;
        } catch (err) {
        console.error("Error fetching Random NEWS:", err);
        return [];
    }
}

searchButton.addEventListener("click",async ()=>{
    const query = searchField.value.trim()
    if(query !== ""){
        try{
            const articles = await fetchNewsQuery(query);
            displayBlogs(articles);
        }catch(err){
            console.log("Error fetching news by query",err); 
        }
    }
})

async function fetchNewsQuery(query){
    try {
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=11&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    } catch (err) {
        console.error("Error fetching Random NEWS:", err);
        return [];
    }
}

function displayBlogs(articles) {
    blogContainer.innerHTML = "";
        articles.forEach((article) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        const img = document.createElement("img");
        img.src = article.urlToImage; // Handle cases where image URL is missing
        img.alt = article.title;
        const title = document.createElement("h2");
        const truncatedTitle = article.title.length > 30 ? article.title.slice(0, 30) + "...." : article.title;
        title.textContent = truncatedTitle;

        // title.textContent = article.title;
        const description = document.createElement("p");
        const truncatedDes = article.description.length > 120 ? article.description.slice(0, 120) + "...." : article.description;
        description.textContent = truncatedDes;
        // description.textContent = article.description;
        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogCard.addEventListener('click',()=>{
            window.open(article.url,"_blank")
        })
        blogContainer.appendChild(blogCard);
    })
}

(async () => {
    try {
        const articles = await fetchRandomNews();
        // console.log("Number of articles:", articles.length);
        displayBlogs(articles);
    } catch (err) {
        console.error("Error fetching Random NEWS:", err);
    } 
})();