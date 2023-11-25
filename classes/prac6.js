class WordBank {
    constructor() {
        this.bank = new Set();
    }
    addWord(word) {
        this.bank.add(word);   
        return console.log(`Adding ${word}... in slot ${this.bank.size}`, this.bank.values());
    }
    dropWord(word) {
        this.bank.delete(word);
        return this.bank;
    }
    addArray(array = Array) {
        try { 
            array.forEach(item => {
            this.bank.add(item);
        });
        console.log('Adding array...', this.bank);
        } catch {
            console.log("Not an array")
        }
    }
    open() {
        console.log(this.bank);
        return this.bank;
    }
    random() {

        let array = [];
        this.bank.forEach(word => {
            array.push(word);
        });
        let random = array[Math.floor(Math.random()*array.length)];
        console.log(random);
        return random;

    }

    code(word) {

        let split = word.split("");

        let precode = '';

        split.forEach(letter => {
            switch(letter.toLowerCase()) {
                case 'a':
                case 'b':
                case 'c': precode += 1; break;
                    case 'd':
                    case 'e':
                    case 'f': 
                    case 'g': precode += 2; break;
                        case 'h':
                        case 'i': 
                        case 'j':
                        case 'k': precode += 3; break;
                            case 'l': 
                            case 'm':
                            case 'n':
                            case 'o': 
                            case 'p': precode += 4; break;
                                case 'q':
                                case 'r':
                                case 's': precode += 5; break;
                                    default: precode += 0; 
            }
        });

        precode += split.length;
        precode = precode.split("");

        while (precode.length > 8) {
            precode.shift();
        }

        console.log(`code for ${word} is:`,...precode);

        this.addWord(word);

        return {...precode};

    }
}

const words = ["Parrot", "Airplane", "Xbox", "Native", "French", "Parrot"];

const bank = new WordBank();

bank.addArray(words);
bank.addWord("OK");
bank.open();
// bank.random();
// bank.code("Deondre");
// bank.code("Brianna");
// bank.code("Mercies");
// bank.code("BarackObama");
// bank.code("Barack Obama");



