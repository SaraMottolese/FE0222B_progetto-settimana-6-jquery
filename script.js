const mieImg = ["arrabbiato.png", "bello.png", "piangere.png", "ridere.png", "amare.png", "amare1.png", "spavento.png", "shock.png", "arrabbiato.png", "bello.png",
    "piangere.png", "ridere.png", "amare.png", "amare1.png", "spavento.png", "shock.png"
];

$(() => {

    //shuffle poi dal risultato dello shuffle faccio partire l'each()


    $('<div id="tavolo-gioco"></div>').css({
        width: '800px',
        height: '800px',
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 auto'
    }).appendTo('.box');

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            $('<div class="casella"></div>').css({
                width: '190px',
                height: '190px',
                border: '1px solid black',
                marginLeft: '8px'
            }).appendTo('#tavolo-gioco');
        }
    }

    $('<img src="" class="imag">').appendTo('.casella');

    $('.imag').each(function() {
        var img = mieImg.pop();
        $(this).attr('src', 'img/' + img);
        console.log(this);
    });

});
// usare toggleClass per aggiungere e togliere la classe .image al click

// quando il documento è pronto...vado a selezionare casualmente una immagine dalla cartella.

// creo una variabile "images" che contiene il selettore della classe "images". 
// così ho un oggetto jQuery e metto gli elementi corrispondenti nell'oggetto jQuery.

// creo un ciclo for sull'oggetto creato per ottenere poi un'immagine random.

// prendo a caso un elemento dalla mia lista.

// vado a prendere il file localizzato nella directory img e creo il tag html e lo inserisco nella pagina.
//images.eq(e).html("<img id='" + e + "' src='images/" + randomImg + ".png' width='130' height='130' />");

// creo la funzione principale "mostraImg"

// creo l'oggetto jQuery per i clicks e lo chiamo "tuttiIClick" e prendo il valore e poi incremento. contatore click

// ora visualizzo l'emoji (l'immagine) a due a due se sono diverse le nascondo altrimenti le lascio visibili.

// se non sono due visualizzo l'emoji e la inserisco in "clickImgs".

// se sono uguali azzero la mia lista.

// se sono diverse nascondo le due immagini.