const logins = ['qwert'];
let user = prompt("Enter your login:");

const isLoginValid = function (login) {
  if (login === null) {
    console.log("Refresh the page");
  }
  if (login.length < 4) {
    console.log("Please, enter 4 - 16 symbols");
    return false;
  }
  if (login.length > 16) {
    console.log("Please, enter 4 - 16 symbols");
    return false;
  }
  return true;
};

const isLoginUnique = function (login) {
  const uniqueValue = logins.includes(login);
  
  if (uniqueValue === true) {
    return "Your login is not unique. Please try another one";
  }
  return true;
};

const addLogin = function(login) {
    const validLogin = isLoginValid(login);
    if (validLogin === true) {

        const uniqueLogin = isLoginUnique(login);
        if (uniqueLogin === true) {
            logins.push(login);
        }
    }
}

console.log(addLogin(user));

console.log(logins);
