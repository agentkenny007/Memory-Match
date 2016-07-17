// Import Chai
import chai from 'chai';

// Import Any Files to Test
import Card from '../src/js/classes/card';
import MemoryMatch from '../src/js/classes/game';

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('About the game Memory Match', function(){
    let game;
    beforeEach(function(){
        game = new MemoryMatch();
    });

    describe('The creation of a Memory Match game', function(){
        it('should be an instance of MemoryMatch', ()=>{
            expect(game).to.be.an.instanceof(MemoryMatch);
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

    describe('The MemoryMatch game grid', function(){
        it('should have an array of cards', ()=>{
            expect(game.grid).to.be.an('array');
            expect(game.grid[0]).to.be.an.instanceof(Card);
        });
    });

    describe('How to play a MemoryMatch game', function(){

    });
});
