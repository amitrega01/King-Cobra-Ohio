### Akademia Techniczno - Humanistyczna w Bielsku-Białej

# Czytnik RSS w React Native

## Skład grupy

- Adam Mitręga - zarządzanie projektem
- Artur Ulfig – przetwarzanie danych z sieci
- Maciej Ślusarek - tworzenie komponentów
- Wojciech Michalik - tworzenie komponentów
- Patrycjusz Suchanek - tworzenie komponentów

## Opis projektu

Czytnik kanałów RSS, zapisujący pobrane wiadomości w pamięci lokalnej. Wiadomości powinny być aktualizowane po upływie wybranego przez użytkownika czasu.

## Stos technologiczny

- React Native
- Expo CLI
- redux
- react-redux
- cheerio-without-node-native
- react-native-rss-parser
- react-native-render-html
- react-navigation

## Kontrola wersji i zarządzanie projektem

Do kontroli wersji aplikacji używamy Git&#39;a, ze zdalnym repozytorium na serwisie GitHub.com

Link do repozytorium: [https://github.com/amitrega01/King-Cobra-Ohio](https://github.com/amitrega01/King-Cobra-Ohio)

Zarządzanie projektem odbywa się za pomocą serwisu ClickUp.

## Struktura projektu

![](https://i.imgur.com/uSE3c76.png)

Aplikacja została podzielona na komponenty:

- **Screens** – zawiera głowne ekrany będące &quot;kontenerami&quot; na resztę komponentów
- **Containers** – zawiera tzw. &quot;Dummy components&quot;, czyli komponenty bez szczególnej funkcjolnalności, używane do przechowywania mniejszych komponentów np. elementów listy
- **Components –** inne komponenty – przycisicki, nagłowki itp.
- **Consts –** pliki zwierające stałe typu kolory, ciągi znaków i style
- **Utils –** przechowuje funkcje odpowiedzialne za pobieranie danych z sieci

## Design aplikacji

Aplikacja oferuje dwa motywy: standardowy oraz tryb ciemny

### Standardowy

![](https://i.imgur.com/7sFIcAS.png)

### Tryb ciemny

![](https://i.imgur.com/nsof9wz.png)

## Działanie aplikacji

Aplikacja aktualizuje wiadomości przy urrochomieniu oraz co wybrany interwał czasu (w godzinach). Lista kanałów znajduje się w nagłowku, gdzie możemy przełączać sie pomiedzy wybranym kanałem.
![](https://i.imgur.com/gqi4w8q.png)

Po dotknięciu wiadomości, zostaje ona otworzona w domyślnej przeglądarce użytkownika.

## Przykładowe fragmenty kodu

### Komponent RssChannelButton

Przycisk z nazwą kanału znajdujący się w nagłowku.

```
import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class RssChannelButton extends Component {
  render() {
    if (this.props.isActive) {
      return (
        //TODO: wariant aktywny i nie aktywny
        <TouchableOpacity style={styles.active}>
          <Text style={styles.activeText}>{this.props.fullName}</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.inActive}
          onPress={() => {
            this.props.dispatch({
              type: 'SET_ACTIVE',
              id: this.props.id
            });
            this.props.callback(this.props.id);
          }}
        >
          <Text style={styles.inActiveText}>{this.props.name}</Text>
        </TouchableOpacity>
      );
    }
  }
}
const mapStateToProps = state => ({
  channels: state.channels
});
export default connect(mapStateToProps)(RssChannelButton);
const styles = StyleSheet.create({
  active: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 16
  },
  activeText: {
    color: 'rgba(0,0,0,0.75)',
    fontWeight: 'bold'
  },
  inActive: {
    paddingHorizontal: 16,
    paddingVertical: 4
  },
  inActiveText: {
    color: '#fff'
  }
});

```

Komponent renderuje odpowiednią wersję przycisku - aktywny ( z białym tłem) i nie aktywny (bez tła)w zależności od podanych argumentów (props'ów).

### Funkcja przetwarzająca plik XML kanału RSS newsFetch

```
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
```

Funkcja przyjmuje obiekt **channel** zawierający adres url do pliku XML kanału RSS, który zostaje pobrany i przetworzony z pomocą biblioteki **_react-native-rss-parser_**, nastepnie zwraca obiekt **channel** z uzupełnioną listą wiadomości (channel.news).
