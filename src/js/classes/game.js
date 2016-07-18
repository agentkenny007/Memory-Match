import $ from 'jquery';
import _ from 'lodash';
import Card from './card';
import GameBoard from './score';

class Game {
    constructor(){
        let game = this;
        game.board = new GameBoard();
        game.chosen = null;
        game.displayTimeout = null;
        game.emoji = [
        '😎','😍','👊','🔥','🌮',
        '🌭','🦄','🌍','🦁','🤘',
        '🙉','🙊','👌','👍','👥',
        '💵','💎','💋','🎩','👑',
        '💈','😈','😂','💰','💖',
        '💣','🍕','🍋','🏀','🏈',
        '🎱','🔑','💡','🔮','💯',
        '🌧','🗿','📍','⭐️','✨'];
        game.granted = [];
        game.setMode('easy');
    }
    setMode(mode){
        let game = this;
        game.mode = mode;
        switch (mode){
            case 'easy' :
                game.grid = game.matches = game.createCards(_.sampleSize(game.emoji, 4));
                break;
            case 'medium' :
                game.grid = game.matches = game.createCards(_.sampleSize(game.emoji, 8));
                break;
            case 'hard' :
                game.grid = game.matches = game.createCards(_.sampleSize(game.emoji, 12));
                break;
            case 'crazy' :
                game.grid = game.matches = game.createCards(_.sampleSize(game.emoji, 18));
                break;
            case 'insane' :
                game.grid = game.matches = game.createCards(_.sampleSize(game.emoji, 32));
                break;
        }
        game.grid = _.shuffle(game.matches.concat(game.grid)).map((card)=>{ return new Card(card.id, card.emoji); });
        game.grid.forEach((card, index)=>{ card.index = index; });
    }
    choose(Card){
        let game = this;
        if (game.granted.includes(Card)) return;
        if (game.chosen) game.validate(Card);
        else game.chosen = Card;
    }
    createCards(emoji){
        return emoji.map((e, i)=>{ return new Card(i, e); });
    }
    deduct(){
        let game = this;
        game.board.score -= 5;
        game.board.faulty--;
        console.log(game.board.score);
    }
    grant(Card1, Card2){
        let game = this;
        game.granted.push(Card1, Card2);
        game.board.score += 20;
        game.board.guessed++;
        console.log(game.board.score);
        $('.game-grid .card').each(function(index){
            if (game.granted.includes($(this).data('card')) && !$(this).hasClass('granted')){
                let gridCard = $(this);
                gridCard.addClass('chosen');
                setTimeout(function () {
                    gridCard.addClass('granted');
                }, 1500);
            }
        });
        if (game.mode === 'easy' && game.granted.length > 4) game.win();
        if (game.mode === 'medium' && game.granted.length > 12) game.win();
        if (game.mode === 'hard' && game.granted.length > 20) game.win();
        if (game.mode === 'crazy' && game.granted.length > 32) game.win();
        if (game.mode === 'insane' && game.granted.length > 60) game.win();
    }
    validate(Card){
        let game = this;
        if (Card.index === game.chosen.index) return;
        if (Card.id === game.chosen.id)
            game.grant(Card, game.chosen);
        else game.deduct();
        game.displayTimeout = setTimeout(function(){
            $('.chosen').removeClass('chosen');
        }, 2000);
        game.chosen = null;
    }
    win(){
        let game = this;
        $('.game-grid .card').addClass('chosen');
        setTimeout(function () {
            $('.game-grid .card').addClass('granted');
        }, 1500);
        game.board.played++;
        if (game.board.faulty < game.grid.length / 2)
            game.board.bonus = 50;
        game.board.faulty = game.board.guessed = 0;
        game.board.score = game.board.score + game.board.bonus;
        console.log(game.board.score);
    }
}

export default Game;
