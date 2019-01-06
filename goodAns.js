
function goodAns(numGood = 40) {
    console.log(numGood);
    const result = document.querySelectorAll('.rezultatN');
    const odpGood = document.querySelectorAll('.odpgood');
    const percentRes = document.querySelectorAll('span');

    for (let i = 0; i < result.length; i++) {

        result[i].classList.add('rezultat');
        result[i].classList.remove('rezultatN');
        const odp = odpGood[i].innerHTML.charAt(8);
        result[i].innerHTML = 'Tak jest, Twoja odpowiedź: ' + odp + ' jest poprawna!';
    }

    for (let i = 0; i < percentRes.length; i++) {
        if (percentRes[i].innerHTML.indexOf('Uzyskany wynik:') > -1) {
            console.log(percentRes[i].innerHTML);
            console.log(numGood);
            let perc = numGood * 2.5;

            percentRes[i].innerHTML = 'Uzyskany wynik: ' + perc + '% (' + numGood + '/40)';

        }
    }

    /*AUTOR: TRXDW*/
    console.clear();
}