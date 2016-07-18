import $ from 'jquery';

import EmojiMatch from './classes/game';
import KonamiCode from './classes/cheat';

const   GRID = $('.game-grid ul'),
        CARD = $(`
            <li class="card">
                <img src="http://placehold.it/1">
                <span class="content"></span>
                <span class="cover"></span>
            </li>`);

let game = new EmojiMatch();
let cheatcode = new KonamiCode();

let checkKonami = e => {
    if (cheatcode.unlocked(e.which)) game.win();
};

let setupGrid = mode => {
    game.setMode(mode);
    game.grid.forEach((card, index)=>{
        let c = CARD.clone();
        c.data("card", card).find('.content').text(card.emoji);
        GRID.append(c);
        if ((mode === 'easy' && index === 3) || (mode === 'hard' && index === 11))
            GRID.append(CARD.clone().addClass('granted free'));
    });
    $('.game-grid').removeClass().addClass(`game-grid ${mode}`);
    if ($('.splash').hasClass('visible')){
        $('.splash').animate({ "left" : '-100%' }, 1200, 'swing', function(){
            $(this).removeClass('visible').hide();
        });
        $('body').animate({ scrollTop : 0 }, 1200, 'swing');
        $('.game-screen').addClass('visible');
    }
};

let shapeGrid = ()=>{
    $('.game-grid').css("width", $(window).height() - 45);
};

shapeGrid();

$(document)
    .delegate('.game-grid .card', 'click', function(){
        if ($('.chosen').length > 1){
            clearTimeout(game.displayTimeout);
            $('.chosen').removeClass('chosen');
        }
        $(this).addClass('chosen');
        game.choose($(this).data('card')); })
    .delegate('.game-mode .easy .play', 'click', function(){ setupGrid('easy'); })
    .delegate('.game-mode .medium .play', 'click', function(){ setupGrid('medium'); })
    .delegate('.game-mode .hard .play', 'click', function(){ setupGrid('hard'); })
    .delegate('.game-mode .crazy .play', 'click', function(){ setupGrid('crazy'); })
    .delegate('.game-mode .insane .play', 'click', function(){ setupGrid('insane'); })
    .delegate('.game-start img', 'click', function(){
        $('.splash').animate({ "top" : '100%' }, 1200, 'swing');
        $('body').animate({ scrollTop : 0 }, 1200, 'swing'); })
    .on('keyup', checkKonami);

$(window).resize(shapeGrid);
