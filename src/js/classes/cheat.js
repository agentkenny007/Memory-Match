class cheatCode {
    constructor(){
        let cheat = this;
        cheat.key = '38384040373937396665';
        cheat.collected = '';
        cheat.timeout = null;
    }
    unlocked(code){
        let cheat = this;
        cheat.collected += code;
        if (cheat.timeout) clearTimeout(cheat.timeout);
        cheat.timeout = setTimeout(()=>{ cheat.collected = ''; }, 3500);
        return cheat.collected === cheat.key;
    }
}

export default cheatCode;
