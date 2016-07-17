import _ from 'lodash';
import Card from './card';

class Game {
    constructor(){
        let game = this;
        game.emoji = [
        '😎','😍','👊','🔥','🌮',
        '🌭','🦄','🌍','🦁','🤘',
        '🙉','🙊','👌','👍','👥',
        '💵','💎','💋','🎩','👑',
        '💈','😈','😂','💰','💖',
        '💣','🍕','🍋','🏀','🏈',
        '🎱','🔑','💡','🔮','💯',
        '🌧','🗿','📍','⭐️','✨']
        /*
        game.emoji = [
            '\u1F60E', '\u1F60D', '\u1F44A', '\u1F525', '\u1F32E',
            '\u1F32D', '\u1F984', '\u1F30D', '\u1F981', '\u1F918',
            '\u1F649', '\u1F64A', '\u1F44C', '\u1F44D', '\u1F465',
            '\u1F4B5', '\u1F48E', '\u1F48B', '\u1F3A9', '\u1F451',
            '\u1F488', '\u1F608', '\u1F602', '\u1F4B0', '\u1F496',
            '\u1F4A3', '\u1F355', '\u1F34B', '\u1F3C0', '\u1F3C8',
            '\u1F3B1', '\u1F511', '\u1F4A1', '\u1F52E', '\u1F4AF',
            '\u1F327', '\u1F5FF', '\u1F4CD', '\u2728', '\u2B50'
        ];
        */
        game.matches = game.createCards(_.sampleSize(game.emoji, 4));
        game.grid = _.shuffle(game.matches.concat(game.matches));
        game.mode = 'easy';
        game.chosen = null;
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
        game.grid = _.shuffle(game.matches.concat(game.grid));
    }
    createCards(emoji){
        return emoji.map((e, i)=>{ return new Card(i, e); });
    }
}

export default Game;
