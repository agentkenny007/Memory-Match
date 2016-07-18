class ScoreBoard {
    constructor(options){
        options = options || {};
        let board = this;
        board.faulty = options.faulty || 0;
        board.guessed = options.guessed || 0;
        board.high = options.high;
        board.played = options.played || 0;
        board.score = options.score || 20;
    }
}

export default ScoreBoard;
