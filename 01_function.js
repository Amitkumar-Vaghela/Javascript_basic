function Addition(num1, num2) {
    const result = num1 + num2; 
    return result;
}
const result = Addition(10, 20);
console.log(`Result is ${result}`);


function LoginUser(Username = "amit"){
    if (!Username){
        return "Please enterr the Username"
    }
    return `welcome you sucessfully login ${Username}`;
}
console.log(LoginUser());   // default print amit
console.log(LoginUser("vaghela"));  //   print Vaghela