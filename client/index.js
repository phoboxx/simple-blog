class Article {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  displayArticle() {
    const titleElement = document.createElement('h1');
    const bodyElement = document.createElement('p');
    const seperationElement = document.createElement('hr');
    titleElement.innerHTML = this.title;
    bodyElement.innerHTML = this.body;
    document.getElementById('Articles').appendChild(titleElement);
    document.getElementById('Articles').appendChild(bodyElement);
    document.getElementById('Articles').appendChild(seperationElement);
  }
}
const fetchArticles = async () => {
  let response = await fetch('http://127.0.0.1:3000/api/article');
  if (response.ok) {
    let json = await response.json();
    json.forEach((item, index) => {
      const article = new Article(item.title, item.body);
      article.displayArticle();
    });
  }
};

fetchArticles();
