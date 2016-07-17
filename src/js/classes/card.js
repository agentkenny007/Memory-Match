class Card {
    constructor(id, emoji, index){
        this.emoji = emoji || null;
        this.id = id || id === 0 ? id : null;
        this.index = index || index === 0 ? index : null;
    }
}

export default Card;
