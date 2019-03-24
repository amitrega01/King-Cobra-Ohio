const cheerio = require('cheerio-without-node-native');

export default async function rssFetch(url) {
  console.log('Pobuieranie RSS');
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  const urls = [];

  for (let i = 0; i < $('div a', html).length; i++) {
    var temp = $('div a', html)[i].attribs.href;
    urls.push(temp + '');
  }
  let rss = [];
  urls.forEach(item => {
    if (
      (item.includes('feed') || item.includes('rss')) &&
      item.includes('https:')
    )
      rss.push(item);
  });
  console.log('Pobrano RSS');
  return rss.slice(0, 8);
}
