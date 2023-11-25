let email1 = "deondre_palmer@hotmail.com";
let email2 = "notarealemail@whatever.org";

let emailregex = new RegExp("\\w+@hotmail\.com");

let test = emailregex.exec(email1) ?? 'no matched result';

console.log(test)

let phonenumber = "416-450-4506"

let phregex = "/[0-9]{3}/"