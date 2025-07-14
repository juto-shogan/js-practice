function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}



User.prototype.login = function() {
    this.online = true;
    console.log(`${this.email} is now online.`);
}

User.prototype.logout = function() {
    this.online = false;
    console.log(`${this.email} is now offline.`);
}

function Admin(...args) {
console.log(args)
}

var userOne = new User('alice@example.com', 'Alice');
var userTwo = new User('bob@example.com', 'Bob');
var admin = new Admin('admin@example.com', 'Shaun');
console.log(userOne);
userTwo.login();