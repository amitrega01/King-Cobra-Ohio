const rp = require('request-promise');
const cheerio = require('cheerio');
const url = "https://www.rmf.fm/rss/"

rp(url, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('div.tree-right').each(function(i, element){
      var resultHTML = $(this).prev();
      var title = resultHTML.text();
      var rssURL = resultHTML.getAttribute('href');

    var metaData = {
      channel: title,
      url: rssURL
    }
    console.log(metaData);
    });
  }
});