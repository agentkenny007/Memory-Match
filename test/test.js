// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { MemoryMatch } from '../src/js/classes/game'

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('About the game Memory Match', ()=>{

    describe('The creation of a Memory Match game', ()=>{
        it('should be an instance of MemoryMatch', ()=>{
            let game = new MemoryMatch();
            expect(game).to.be.an.instanceof(MemoryMatch);
        });
    });

});
