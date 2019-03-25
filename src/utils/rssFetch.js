const cheerio = require('cheerio-without-node-native');
import * as rssParser from 'react-native-rss-parser';
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
  rss = rss.slice(0, 8);
  console.log('Pobieranie newsow');
  for (let index = 0; index < rss.length; index++) {
    rss[index] = {
      id: index,
      url: rss[index],
      isActive: index == 0 ? true : false
    };
  }
  for (let i = 0; i < rss.length; i++) {
    const channel = rss[i];
    channel = await newsFetch(channel);
  }
  console.table(rss);
  return rss;
}

export async function newsFetch(channel) {
  await fetch(channel.url)
    .then(response => response.text())
    .then(responseData => rssParser.parse(responseData))
    .then(rss => {
      channel.fullName = rss.title;
      channel.name = rss.title.split(' ')[0];
      channel.news = rss.items;
    });
  return channel;
}
