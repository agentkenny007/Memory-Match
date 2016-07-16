import _ from 'lodash';

class Game {
    constructor(){
        let game = this;
        /*
        // game.emoji = [😎,😍,👊,🔥,🌮,🌭,🦄,🌍,🦁,🤘,🙉,🙊,👌,👍,👥,💵,💎,💋,🎩,👑,✨,😈,😂,💰,💖,💣,🍕,🍋,🏀,🏈,🎱,🔑,💡,🔮,💯,🌧,🗿,📍,💈,⭐️]
        */
        game.emoji = new Array(40);
        game.grid = [];
        game.matches = [];
        game.mode = [];
    }
    setMode(mode){
        let game = this;
        switch (mode) {
            case 'easy' :
                game.grid = game.matches = _.sampleSize(game.emoji, 4);
                game.grid = game.matches.concat(game.grid);
                break;
            case 'medium' :
                break;
            case 'hard' :
                break;
            case 'crazy' :
                break;
            case 'insane' :
                break;
        }
    }
}

export default Game;
