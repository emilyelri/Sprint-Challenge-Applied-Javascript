// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector(".cards-container");

function createCard(article) {
  const card = document.createElement("div"),
    headline = document.createElement("div"),
    author = document.createElement("div"),
    imgContainer = document.createElement("div"),
    authorImage = document.createElement("img"),
    byAuthor = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorImage);
  author.appendChild(byAuthor);

  headline.textContent = article.headline;
  authorImage.src = article.authorPhoto;
  byAuthor.textContent = `By ${article.authorName}`;

  return card;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    const object = response.data.articles;
    // console.log(object);
    for (var key in object) {
      // console.log(key);
      if (object.hasOwnProperty(key)) {
        const articleArray = object[key];
        // console.log(object[key]);
        articleArray.forEach(article => {
          // console.log(article);
          const newCard = createCard(article);
          cardsContainer.appendChild(newCard);
        });
      }
    }
  });