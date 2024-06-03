$(document).ready(function(){
    $('.project-cards').click(function(){

        var image = $(this).data('image');
        $('.card-select div').removeClass('active');
        $(this).addClass('active')
        $('.project-img img').attr('src', image).show(); // Show image for clicked card
    });

   

      // open the modal
      $('.btn-hero').click(function(){
        $('#myModal').css('display', 'block');
    });

    // close the modal when clicking on the close button or outside the modal
    $('.modal').click(function(){
        $('#myModal').css('display', 'none');
    });

    // prevent closing the modal when clicking inside the modal content
    $('.modal-content').click(function(event){
        event.stopPropagation();
    });

    //changing span of input in modal

    $('input[type="text"], input[type="email"]').on('input', function() {
        const span = $(this).prev('span.toggle-text');
        if ($(this).val().length > 0) {
            span.show();
        } else {
            span.hide();
        }
    });

    // Trigger the input event on page load to handle pre-filled inputs
    $('input[type="text"], input[type="email"]').each(function() {
        $(this).trigger('input');
    });
  



    // form submit 

    
$("#ajaxForm").submit(function(e){
    $('#sub-btn').text('Submitting...') 
    e.preventDefault();
    var action = $(this).attr("action");
    $.ajax({
    type: "POST",
    url: action,
    crossDomain: true,
    data: new FormData(this),
    dataType: "json",
    processData: false,
    contentType: false,
    headers: {
    "Accept": "application/json"
    }
}).done(function() {
    $('#sub-btn').text('Submitted!') 
    
}).fail(function() {
    $('#sub-btn').text('Something wrong!') 
    
});
});


//hover cards
$('.card-hover').hover(function() {
   $(this).addClass('show');
}, function() {
   $(this).removeClass('show');
});
//animation

let currentIndex = 0;
const $cardsSlider = $('.slider');
const $cards = $('.cards-slider');
const cardCount = $cards.length;
const cardWidth = $cards.outerWidth(true);
const containerWidth = $('.cards-container').width();
const visibleCards = Math.floor(containerWidth / cardWidth);
const maxIndex = cardCount - visibleCards;

function slideCards() {
    currentIndex++;
    if (currentIndex > 2) {
        currentIndex = 0;
    }
    const newTransformValue = currentIndex * cardWidth;
    $cardsSlider.css('transform', 'translateX(' + newTransformValue * 3 + 'px)');
}

setInterval(slideCards,3333);



// dots chanfing position
let svgs = ['#svg1', '#svg2', '#svg3'];
let index = 0;

function swapSVGs() {
    // Swap the first SVG with the one at the current index
    if (index >= svgs.length ) {
        index = 0;
    }

    // Remove all SVG content
    $('.svg-item').empty();

    // Add the SVG content based on the current index
    switch (index) {
        case 2:
            $('#svg1').html('<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.a1, .d1 { fill: none; } .a1 { stroke: #ff3147; } .b1 { fill: #ff3147; } .c1 { stroke: none; }</style></defs><g transform="translate(-375 -1837)"><g class="a1" transform="translate(375 1837)"><circle class="c1" cx="15" cy="15" r="15" /><circle class="d1" cx="15" cy="15" r="14.5" /></g><circle class="b1" cx="4" cy="4" r="4" transform="translate(386 1848)" /></g></svg>');
            $('#svg2').html('<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" /></svg>');
            $('#svg3').html('<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" /></svg>');
            break;
        case 1:
            $('#svg1').html('<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" /></svg>');
            $('#svg2').html('<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" /></svg>');
            $('#svg3').html('<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.a1, .d1 { fill: none; } .a1 { stroke: #ff3147; } .b1 { fill: #ff3147; } .c1 { stroke: none; }</style></defs><g transform="translate(-375 -1837)"><g class="a1" transform="translate(375 1837)"><circle class="c1" cx="15" cy="15" r="15" /><circle class="d1" cx="15" cy="15" r="14.5" /></g><circle class="b1" cx="4" cy="4" r="4" transform="translate(386 1848)" /></g></svg>');
            break;
        case 0:
            $('#svg1').html('<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" /></svg>');
            $('#svg2').html('<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.a1, .d1 { fill: none; } .a1 { stroke: #ff3147; } .b1 { fill: #ff3147; } .c1 { stroke: none; }</style></defs><g transform="translate(-375 -1837)"><g class="a1" transform="translate(375 1837)"><circle class="c1" cx="15" cy="15" r="15" /><circle class="d1" cx="15" cy="15" r="14.5" /></g><circle class="b1" cx="4" cy="4" r="4" transform="translate(386 1848)" /></g></svg>');
            $('#svg3').html('<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" /></svg>');
            break;
    }

    index++;
}

setInterval(swapSVGs, 3333);

});


