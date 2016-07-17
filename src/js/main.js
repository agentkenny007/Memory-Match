import $ from 'jquery';

import EmojiMatch from './classes/game';

const   GRID = $('.game-grid ul'),
        CARD = $(`
            <li class="card">
                <img src="http://placehold.it/1">
                <span class="content"></span>
                <span class="cover"></span>
            </li>`);

let game = new EmojiMatch();

game.grid.forEach((card, index)=>{
    let c = CARD.clone();
    c.data("card", card).find('.content').text(card.emoji);
    GRID.append(c);
    if (index === 3) GRID.append(CARD.clone().addClass('granted free'));
});

$(document)
    .delegate('.game-grid .card', 'click', function(){
        if ($('.chosen').length > 1){
            clearTimeout(game.displayTimeout);
            $('.chosen').removeClass('chosen');
        }
        $(this).addClass('chosen');
        game.choose($(this).data('card')); })
    .delegate('.game-start img', 'click', function(){
        $('.splash').animate({ "top" : '100%' }, 1200, 'swing');
        $('body').animate({ scrollTop : 0 }, 1200, 'swing');
    });
