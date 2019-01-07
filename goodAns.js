/*AUTOR: TRXDW*/
/*LICENCJA MIT*/
function goodAns(numGood = 40) {
    const szmieszek = document.querySelector('h1');
    if (numGood > 40 || numGood < 0) {
        numGood = 0;

        szmieszek.innerHTML = "Niezła próba, ale próg jest od 0 do 40 :)";
        return;
    } else if (isNaN(numGood)) {
        szmieszek.innerHTML = "A to akurat nie jest liczba... :/"
        return;
    }
    szmieszek.innerHTML = 'Odpowiedzi <span style="color:#1EE2BB;">E.13</span>';
    const result = document.querySelectorAll('.rezultatN');
    const odpGood = document.querySelectorAll('.odpgood');
    const percentRes = document.querySelectorAll('span');

    /*ODPOWIEDZI */
    const badAns = document.querySelectorAll('.odpbad');


    for (let i = 0; i < result.length; i++) {

        result[i].classList.add('rezultat');
        result[i].classList.remove('rezultatN');
        const odp = odpGood[i].innerHTML.charAt(8);
        result[i].innerHTML = 'Tak jest, Twoja odpowiedź: ' + odp + ' jest poprawna!';
    }


    for (let i = 0; i < percentRes.length; i++) {
        if (percentRes[i].innerHTML.indexOf('Uzyskany wynik:') > -1) {
            const perc = numGood * 2.5;

            percentRes[i].innerHTML = 'Uzyskany wynik: ' + perc + '% (' + numGood + '/40)';

        }
    }

    /*ZŁE ODPOWIEDZI */


    if (numGood != 40) {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
        let nB = 39;

        for (let i = 0; i < numGood; i++) {
            let index = Math.floor(Math.random() * (nB + 1));
            arr.splice(index, 1);
            nB--;
        }


        for (let i = 0; i < arr.length; i++) {
            let j = arr[i] - 1;
            const randBadAnswer = (j * 3) + (Math.floor(Math.random() * 3));
            const odp = odpGood[j].innerHTML.charAt(8);
            result[j].innerHTML = 'Pomyłka! Poprawna odpowiedź to ' + odp + ' (twoja odpowiedź: ' + badAns[randBadAnswer].innerHTML.charAt(8) + ')';

            badAns[randBadAnswer].classList.remove('odpbad');
            badAns[randBadAnswer].classList.add('odpwrong');

        }

    }

    window.onbeforeunload = function () {
        while (true) {
            console.clear();
        }
    }
    /*AUTOR: TRXDW*/
    /*LICENCJA MIT*/
    console.clear();
}