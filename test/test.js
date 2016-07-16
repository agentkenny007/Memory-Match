// Import Chai
import chai from 'chai';

// Import Any Files to Test
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
            expect(game.mode).to.be.an('array');
            describe('Easy Mode', function(){
                it('should have a grid of size 3x3 with a free square', ()=>{
                    game.setMode('easy');
                    expect(game.grid.length).to.equal(8);
                });
            });
        });
    });
});
