class Card {
    constructor(id, emoji, index){
        this.id = id || id === 0 ? id : null;
        this.emoji = emoji || null;
        this.index = index || null;
    }
}

export default Card;
