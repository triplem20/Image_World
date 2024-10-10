const SearchForm = document.getElementById("search-form");
const SearchBox = document.getElementById("search-box");
const SearchBtn = document.getElementById("search-btn");
const SearchResult = document.getElementById("search-result");
const ShowMore = document.getElementById("show-more-btn");
const accesskey= "cwVhCJG4qR0Pw0aNJZ3kasBiMEIMdjSoxqBWMFyVjXQ";


let keyword = "";
let page = 1;

async function searchImages() {

    keyword = SearchBox.value;
    const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`
    

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if(page ===1){
        SearchResult.innerHTML="";
    }



    results.map((results)=>{
        const image = document.createElement("img");
        image.src= results.cover_photo.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = results.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);
        SearchResult.appendChild(imageLink);

        ShowMore.style.display = "block";

    })

}


SearchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page =1;
    searchImages();

})

ShowMore.addEventListener("click" ,()=>{
    page ++;
    searchImages();
})


//     const SearchForm = document.getElementById("search-form");
//     const SearchBox = document.getElementById("search-box");
//     const SearchBtn = document.getElementById("search-btn");
//     const SearchResult = document.getElementById("search-result");
//     const accesskey = "cwVhCJG4qR0Pw0aNJZ3kasBiMEIMdjSoxqBWMFyVjXQ"; // Use your actual access key

//     let keyword = "";
//     let page = 1;

//     async function searchImages() {
//         keyword = SearchBox.value;
//         const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${accesskey}`;

//         try {
//             const response = await fetch(url);
            
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const data = await response.json();
//             console.log(data); // Log the response for debugging

//             if (!data.results || data.results.length === 0) {
//                 SearchResult.innerHTML = "No results found.";
//                 return;
//             }

//             SearchResult.innerHTML = ""; // Clear previous results

//             data.results.forEach((result) => {
//                 const image = document.createElement("img");
//                 image.src = result[0].preview_photos[0].urls.small;

//                 const imageLink = document.createElement("a");
//                 imageLink.href = result[0].links.html;
//                 imageLink.target = "_blank";
//                 imageLink.appendChild(image);
//                 SearchResult.appendChild(imageLink);
//             });
//         } catch (error) {
//             console.error("Error fetching images:", error);
//             SearchResult.innerHTML = "An error occurred. Please try again.";
//         }
//     }

//     SearchForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//         page = 1;
//         searchImages();
//     });
// });
