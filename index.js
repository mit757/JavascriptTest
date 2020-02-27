"use strict";

var acctData = [
  {
    acctNum: "AAA - 1234",
    user: "Alice"
  },
  {
    acctNum: "AAA - 5231",
    user: "Bob"
  },
  {
    acctNum: "AAA - 9921",
    user: "Alice"
  },
  {
    acctNum: "AAA - 8191",
    user: "Alice"
  }
];
var balance = {
  "AAA - 1234": 4593.22,
  "AAA - 9921": 0,
  "AAA - 5231": 232142.5,
  "AAA - 8191": 4344
};

function filterUser() {
  var userName =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var sortBy =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : "acctData";
  var sortDirection =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "asc";
  var userData = acctData.map(function(acct) {
    return {
      ...acct,
      balance: balance[acct.acctNum]
    };
  });
  var users = userData;

  if (userName != "") {
    users = userData.filter(function(acct) {
      return acct.user === userName;
    });
  }

  if (sortDirection === "asc")
    acctData.sort(function(a, b) {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    });
  else
    acctData.sort(function(a, b) {
      return a[sortBy] > b[sortBy] ? -1 : 1;
    });
  return users;
}

console.log(filterUser("Bob"));
console.log(filterUser("Charlie"));
console.log(filterUser("", "acctNum"));
console.log(filterUser("Alice", "balance"));
