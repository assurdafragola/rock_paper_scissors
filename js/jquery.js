const { noop } = require("jquery");

$(function(){

    //wyszukiwanie elementów  (VanilaJS = document.querySelector)

    $('selektor')
    $('selektorA').find('selektorB') // znajdź selektorB w selektorA
    $('selectorA').children('selektor') //znajdź dzieci selektoraA o selektorzeB
    $('selectorA').children('selektor').last()
    $('selectorA').children('selektor').first()
    $('selectorA').children('selektor').eq(3) //z określonym indeksem
    
    $('selektor').next()
    $('selektor').prev()
    $('selektor').parent()
    $('selektor').siblings()

    $('selektor').css('color', 'blue')
    $('selektor').addClass('class')
    $('selektor').removeClass('class')
    $('selektor').toggleClass('class')

    $('selektor').attr('atrybut') //do odczytania i ustawienia
    $('selektor').data('type') //tylko do odczytania

    $('input').val() //pobranie
    $('input').val(0) //ustawienie

    //zawartość elementu

    $('element').html('<button>CLOSE</button>')
    $('element').text('CLOSE')


    //nowy element (dodawanie/usuwanie)

    let newElement = $('<div class="result_win"> YOU WIN </div>')

    $(oldElement).before(newElement) //jako rodzeństwo przed
    $(oldElement).after(newElement) //jako rodzeństwo po

    $(oldElement).prepend(newElement) //jako pierwsze dziecko
    $(oldElement).append(newElement) //jako ostatnie dziecko

    $(oldElement).remove()//usuwa element
    $(oldElement).empty() //usuwa zawartość elementy (text i dzieci)



    //eventy (VanilaJS = addEventListener)
    $('element').on('event', handler)

    $('#menu').on('click', function() {
        event.preventDefault(); //pamiętaj o tym jeśli wciśnięcie przycisku powoduje przeładowanie konta
        console.log('OK');
    })

    $('element').on('event', 'selektor', handler)

    let btn = $("<button>Dodaj</button>");

    $('existingElement').on('click', 'button', function() {
        console.log("Kliknięto przycisk");
    }); //dodajemy event do potencjalnego dziecka istniejącego elementu

    $("#fooId").append(btn);

});