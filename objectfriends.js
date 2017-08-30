var person = {
		firstName: "Carter",
    age: 15,
    grade: 11,
    myFriends: ["Justin", "Jeong Hyeon", "Zhi Xin"]
};

var person2 = {
		firstName: "Justin",
    age: 17,
    grade: 12,
    myFriends: ["Carter", "Jeong Hyeon", "Zhi Xin"]
};

var person3 = {
		firstName: "Jeong Hyeon",
    age: 17,
    grade: 12,
    myFriends: ["Justin", "Carter", "Zhi Xin"]
};

var person4 = {
		firstName: "Zhi Xin",
    age: 16,
    grade: 11,
    myFriends: ["Justin", "Jeong Hyeon", "Carter"]
};
var x = [person2, person3, person4];

window.alert(x[1].friends[0]);

//Not working//
