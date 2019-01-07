# goodAns
goodAnd jest to skrypt napisany w JS, który sam rozwiązuję nam egzamin na: [egzamin-informatyk](http://egzamin-informatyk.pl/ee08-ee09-e12-e13-e14-testy-egzamin-zawodowy). Z myślą o ludziach, którzy na lekcjach muszę klepać egzaminy na ocene.

##Instalacja
<Nie trzeba>

##Użycie
Wchodzimy [TUTAJ](https://trxdw.github.io/goodAns/goodAns.js) i wykonujemy następujące kroki.
    - Kopiujemy całą zawartość (Ctrl + A)
    - Wchodzimy na stronę [egzamin-informatyk](http://egzamin-informatyk.pl/ee08-ee09-e12-e13-e14-testy-egzamin-zawodowy)
    - Wybieramy interesujący nas test.
    - Nie wybierając **żadnej** odpowiedzi, klikamy **SPRAWDŹ ODPOWIEDZI!**
    - Klikamy **F12** bądź **PPM>Zbadaj element**
    - Wchodzimy w **Console** i wklejamy cały nasz skrypt (ctrl + V)
    - Naciskamy **Enter** po czym wpisujemy goodAns(**pkt**) (w miejscu pkt wpisujemy liczbę punktów, które chcemy zdobyć).
    - **Enter**

##Zabezpieczenia
Skrypt jest zabezpieczony przed odświeżeniem, w momencie gdy ktoś próbuje przejść na inną stronę, bądź odświeżyć, wywoływana jest pętla while, która wykonuje się w nieskończoność, to blokuje możliwość odświeżenia strony nauczycielowi.
## Licencja
[MIT](https://choosealicense.com/licenses/mit/)