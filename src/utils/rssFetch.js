const rp = require('request-promise-native');
const $ = require('cheerio');

export default function rssFetch(url) {
  rp(url)
    .then(function(html) {
      const urls = [];
      for (let i = 0; i < $('div a', html).length; i++) {
        var temp = $('div a', html)[i].attribs.href;
        urls.push(temp + '');
      }
      let rss = [];
      urls.forEach(item => {
        if (item.includes('feed') || item.includes('rss')) rss.push(item);
      });
      console.log(rss);
      return rss;
    })
    .catch(function(err) {
      console.log('err' + err);
    });
}
