class Friend {
    name: string;
    age: number;
    email: string;
    bff: boolean;

    constructor(name: string, age: number, email: string, bff: boolean = false) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
    //method
    print(): void
    {
        console.log(this.name, this.age, this.email, this.bff)
    }
}

    let f1 = new Friend("cat", 26, "cat@SpeechGrammarList.com", true)
    let f2 = new Friend("nova", 26, "cat@SpeechGrammarList.com", true)
    let f3 = new Friend("leo", 26, "cat@SpeechGrammarList.com", true)
    let f4 = new Friend("tracy", 26, "cat@SpeechGrammarList.com", true)
    let f5 = new Friend("dakota", 26, "cat@SpeechGrammarList.com", true)
    

    let friends: Friend[] = [f1, f2, f3, f4, f5];

    for(let f of friends) {
        f.print();
    }