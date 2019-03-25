import * as rssParser from 'react-native-rss-parser';

export default async function newsFetch(channel) {
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
