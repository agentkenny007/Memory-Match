// Import Chai
import chai from 'chai';

// Import Any Files to Test
import Card from '../src/js/classes/card';
import EmojiMatch from '../src/js/classes/game';

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Inside the game Emoji Match', function(){
    let game = new EmojiMatch();
    beforeEach(function(){
        //game = ;
    });

    describe('The creation of an Emoji Match game', function(){
        it('should be an instance of EmojiMatch', ()=>{
            expect(game).to.be.an.instanceof(EmojiMatch);
        });
        it('must have multiple modes', ()=>{
            expect(game.mode).to.be.a('string');
            describe('Easy Mode', function(){
                it('should have a grid of size 3x3 with a free square', ()=>{
                    game.setMode('easy');
                    expect(game.grid.length).to.equal(8);
                });
            });
            describe('Medium Mode', function(){
                it('should have a grid of size 4x4', ()=>{
                    game.setMode('medium');
                    expect(game.grid.length).to.equal(16);
                });
            });
            describe('Hard Mode', function(){
                it('should have a grid of size 5x5 with a free square', ()=>{
                    game.setMode('hard');
                    expect(game.grid.length).to.equal(24);
                });
            });
            describe('Crazy Mode', function(){
                it('should have a grid of size 6x6', ()=>{
                    game.setMode('crazy');
                    expect(game.grid.length).to.equal(36);
                });
            });
            describe('Insane Mode', function(){
                it('should have a grid of size 8x8', ()=>{
                    game.setMode('insane');
                    expect(game.grid.length).to.equal(64);
                });
            });
        });
    });

    describe('the Game Grid', function(){
        it('should have an array of cards', ()=>{
            expect(game.grid).to.be.an('array');
            expect(game.grid[0]).to.be.an.instanceof(Card);
        });
        describe('\'s card', ()=>{
            it('should be an instance of Card', ()=>{
                let card = new Card();
                expect(card).to.be.an.instanceof(Card);
            });
            it('should have a property index set to the card\'s index in the grid', ()=>{
                expect(game.grid[0].index).to.equal(0);
            });
        });
    });

    describe('to start playing', function(){
        it('you should be able to choose a Card in the grid', ()=>{
            let card = new Card(0, '', 2);
            game.choose(card);
            expect(game.chosen).to.be.an.instanceof(Card);
        });
    });
});
