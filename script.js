'use strict'

// Ziel
// 1)Das erste Bild soll standardmäßig vergrößert sein und die
// anderen vier verkleinert
// 2) Wenn ich auf eines der verkleinerten Bilder klicke, soll das
// aktuell größere Bild verkleinert und das angeklickte Bild
// vergrößert werden
// 3) Von dem angeklickten Bild soll die h1 sichtbar sein und von
// den anderen unsichtbar

// EXTRA:
// Es soll einen Übergang bei dem Wechsel der Bilder in der Größe
// geben
// Also, wenn ich auf ein verkleinertes Bild klicke, soll es mit
// einem fließenden Übergang wechseln

// Eingabe
let cards = document.querySelectorAll('.card')



// Verarbeitung
// Beim Anklciken auf das Bild, soll es die Klasse 'active'
// dazu bekommen und die card, die schon das 'active' hat,
// soll es abgeben
    // 1) click =>
        // 1.1) '.active' von allen Elementen entfernen
        // 1.2) fügt '.active' beim angeklickten card an
cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.remove('active')
        });
        card.classList.add('active')
    })
});

// Ausgabe