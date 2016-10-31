
var bbc = fetch('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=6ef0dce6d16e45ffa1fdd01274f57bc2')
.then(data => data.json());

var dailymail = fetch('https://newsapi.org/v1/articles?source=daily-mail&sortBy=top&apiKey=6ef0dce6d16e45ffa1fdd01274f57bc2')
.then(data => data.json());

// load dictionary
var positive  = fetch('https://raw.githubusercontent.com/connor50/skimmed/master/assets/negative.txt')
.then(data => data.json());

var negative = fetch('https://raw.githubusercontent.com/connor50/skimmed/master/assets/positive.txt');

console.log(positive);

Promise.all([bbc, dailymail])
.then(arrays => {
  return arrays[0].articles.concat(arrays[1].articles);
})
.then(json => {
  // //Sentiment Analysis and Description.
  // sort by sentiment
  // render out two lists
  // hide list depending on bool value milk bottle
  json.forEach(x => {
    document.body.innerHTML+= `
      <article>
          <a href='${x.url}'><img src='${x.urlToImage}'></a>
          <h2>${x.title}</h2>
          <p>${x.description}</p>
      </article>
    `;
  });
});
