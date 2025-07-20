# Strona E-commerce - Zadanie Rekrutacyjne

## Spis Treści
1.  [Opis Projektu](#opis-projektu)
2.  [Demo](#demo)
3.  [Zastosowane Technologie](#zastosowane-technologie)
4.  [Instalacja i Uruchomienie](#instalacja-i-uruchomienie)
5.  [Struktura Projektu](#struktura-projektu)
6.  [Architektura Kodu](#architektura-kodu)
7.  [Kluczowe Funkcjonalności](#kluczowe-funkcjonalności)

## Opis Projektu

Projekt jest implementacją front-endową strony głównej dla sklepu internetowego, wykonaną na podstawie projektu graficznego z Figmy. Celem zadania było stworzenie w pełni interaktywnej, responsywnej i zoptymalizowanej strony, wykorzystując nowoczesne technologie webowe.

Strona została zbudowana z modularnym podejściem, zarówno w warstwie JavaScript, jak i SCSS, co ułatwia jej dalszą rozbudowę i utrzymanie.

## Demo

*Link do działającej wersji strony (np. na GitHub Pages) można umieścić tutaj.*

## Zastosowane Technologie

-   **HTML5** - Semantyczna struktura dokumentu.
-   **SCSS (Sass)** - Preprocesor CSS dla modularnych i łatwiejszych w zarządzaniu stylów.
-   **JavaScript (ES6+)** - Logika i interaktywność strony.
-   **jQuery** - Biblioteka wykorzystywana głównie jako zależność dla Slick Slidera oraz do uproszczenia manipulacji DOM.
-   **Slick Slider** - Biblioteka do tworzenia responsywnych karuzel (slider główny i slider produktów).
-   **Intersection Observer API** - Nowoczesne API przeglądarki do implementacji wydajnego lazy loadingu obrazków.
-   **Font Awesome** - Biblioteka ikon.
-   **Picsum.photos** - API do dynamicznego pobierania zdjęć.

## Instalacja i Uruchomienie

Aby uruchomić projekt lokalnie, postępuj zgodnie z poniższymi krokami:

1.  **Sklonuj repozytorium:**
    ```bash
    git clone [adres-twojego-repozytorium]
    ```

2.  **Przejdź do folderu projektu:**
    ```bash
    cd [nazwa-folderu]
    ```

3.  **Kompilacja SCSS:**
    Projekt używa SCSS. Aby zmiany w plikach `.scss` były widoczne, muszą zostać skompilowane do pliku `css/style.css`. Rekomendowanym narzędziem jest rozszerzenie **Live Sass Compiler** dla Visual Studio Code.
    -   Zainstaluj rozszerzenie.
    -   Kliknij przycisk "Watch Sass" na dolnym pasku edytora. Kompilator będzie automatycznie śledził zmiany i generował plik CSS.

4.  **Uruchom stronę:**
    Otwórz plik `index.html` w przeglądarce. Dla najlepszego doświadczenia deweloperskiego, zalecane jest użycie rozszerzenia **Live Server** dla VS Code, które automatycznie odświeża stronę po każdej zmianie.

## Struktura Projektu

Struktura plików została zaprojektowana z myślą o modularności i przejrzystości: 
```
/
├── css/
│ └── style.css
├── images/
│ └── Logo.svg
├── js/
│ ├── main.js
│ ├── slider.js
│ ├── gallery.js
│ └── product-slider.js
├── scss/
│ ├── _base.scss
│ ├── _header.scss
│ ├── _slider.scss
│ ├── _gallery.scss
│ ├── _product-slider.scss
│ ├── _newsletter.scss
│ ├── _footer.scss
│ └── style.scss
└── index.html
```
## Architektura Kodu

### JavaScript

Logika JavaScript została podzielona na moduły, aby zachować porządek. Każda główna sekcja strony ma swój dedykowany plik `.js`.

-   **`slider.js`, `gallery.js`, `product-slider.js`**: Każdy z tych plików zawiera jedną, główną funkcję (np. `initHeroSlider()`), która jest odpowiedzialna za stworzenie i zainicjowanie danego komponentu.
-   **`main.js`**: Pełni rolę "dyrygenta". Po załadowaniu się dokumentu (`$(document).ready()`), wywołuje on w odpowiedniej kolejności funkcje inicjalizujące z pozostałych plików. Na samym końcu uruchamia globalny skrypt do lazy loadingu, co gwarantuje, że wszystkie dynamicznie dodane obrazki zostaną znalezione i "obserwowane".

### SCSS

Style zostały napisane w SCSS i podzielone na osobne pliki dla każdego komponentu (np. `_header.scss`, `_slider.scss`). Wszystkie moduły są importowane do głównego pliku `style.scss` za pomocą dyrektywy `@use`.

Do nazewnictwa klas została zastosowana metodologia **BEM (Block__Element--Modifier)**, co zapewnia niską specyficzność selektorów i unikanie konfliktów stylów (np. `.product-card__title`, `.product-slider__nav-link--active`).

## Kluczowe Funkcjonalności

-   **Dynamiczne generowanie treści**: Hero Slider oraz Galeria Zdjęć są tworzone dynamicznie przez JavaScript na podstawie zdefiniowanych danych, co ułatwia zarządzanie treścią.
-   **Lazy Loading**: Obrazki na całej stronie (w obu sliderach i galerii) są ładowane leniwie za pomocą `IntersectionObserver API`. Obrazki są pobierane dopiero wtedy, gdy zbliżają się do widocznego obszaru ekranu, co znacząco przyspiesza początkowe ładowanie strony.
-   **Niestandardowe slidery**: Obie karuzele na stronie używają biblioteki Slick Slider, ale ich wygląd (strzałki, kropki nawigacyjne) został w pełni dostosowany za pomocą SCSS, aby pasował do projektu z Figmy.
-   **Walidacja formularza**: Formularz zapisu do newslettera posiada prostą walidację po stronie klienta, która sprawdza poprawność formatu adresu e-mail.
