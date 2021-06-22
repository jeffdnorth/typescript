"use strict";
var Friend = /** @class */ (function () {
    function Friend(name, age, email, bff) {
        if (bff === void 0) { bff = false; }
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
    //method
    Friend.prototype.print = function () {
        console.log(this.name, this.age, this.email, this.bff);
    };
    return Friend;
}());
var f1 = new Friend("cat", 26, "cat@SpeechGrammarList.com", true);
var f2 = new Friend("nova", 26, "cat@SpeechGrammarList.com", true);
var f3 = new Friend("leo", 26, "cat@SpeechGrammarList.com", true);
var f4 = new Friend("tracy", 26, "cat@SpeechGrammarList.com", true);
var f5 = new Friend("dakota", 26, "cat@SpeechGrammarList.com", true);
var friends = [f1, f2, f3, f4, f5];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var f = friends_1[_i];
    f.print();
}
