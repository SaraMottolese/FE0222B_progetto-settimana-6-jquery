const mieImg = ["arrabbiato.png", "bello.png", "piangere.png", "ridere.png", "amare.png", "amare1.png", "spavento.png", "shock.png", "arrabbiato.png", "bello.png",
    "piangere.png", "ridere.png", "amare.png", "amare1.png", "spavento.png", "shock.png"
];
let clicks = 0;
let iconFind = 0;

function conta() {
    clicks++;
    $('span').text(clicks);
}

$(() => {

    //shuffle poi dal risultato dello shuffle faccio partire l'each()

    shuffle(mieImg);

    let arrayComparison = [];


    $('<div id="tavolo-gioco"></div>').css({
        width: '800px',
        height: '800px',
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 auto'
    }).appendTo('.box');

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            $('<div class="images"></div>').css({
                width: '180px',
                height: '180px',
                marginLeft: '8px'
            }).appendTo('#tavolo-gioco');
        }
    }
    $('<img src="" class="img">').appendTo('.images');

    $('img').each(function() {
        var img = mieImg.pop();
        $(this).attr('src', 'img/' + img).css({
            width: '180px',
        });
        console.log(img);
        $(this).parent().click(function(event) {
            let selezione = event.currentTarget;
            arrayComparison.push(selezione);
            $(selezione).children().css({
                display: 'block'
            });
            conta();
            console.log(clicks);
            var len = arrayComparison.length;
            if (len === 2) {
                if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
                    $(arrayComparison[0]).children().addClass('disable');
                    $(arrayComparison[1]).children().addClass('disable');
                    arrayComparison = [];
                    iconFind++;
                    console.log(iconFind);
                } else if (arrayComparison[0].innerHTML !== arrayComparison[1].innerHTML) {
                    setTimeout(function() {
                        $(arrayComparison[0]).children().css({
                            display: 'none'
                        });
                        $(arrayComparison[1]).children().css({
                            display: 'none'
                        });

                        arrayComparison = [];
                    }, 500);
                }
            }
        });
    });
    $('<button id="Restart" class="restart">Ricomincia</button>').appendTo('.box');
    $('button').on('click', function() {
        location.reload();

    });
});


function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}

// creo la funzione principale "mostraImg"

// creo l'oggetto jQuery per i clicks e lo chiamo "tuttiIClick" e prendo il valore e poi incremento. contatore click

// ora visualizzo l'emoji (l'immagine) a due a due se sono diverse le nascondo altrimenti le lascio visibili.

// se non sono due visualizzo l'emoji e la inserisco in "clickImgs".

// se sono uguali azzero la mia lista.

// se sono diverse nascondo le due immagini.