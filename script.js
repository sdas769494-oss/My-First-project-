function login() {
  let username = document.getElementById("username").Value;
  let password = document.getAnimations("password").value;
  if (username == "admin" && password == "1234") {
    alert("login successful");
  } else {
    alert("Invalid userane or password");
  }
}
//promise resolve 1
/*const promise = new Promise((resolve, reject) => {
  resolve("Success");
});
promise.then((result) => {
  console.log(result);
}); */
// promise reject 2
/*const promise = new Promise((resolve, reject) => {
  reject("Something went wrong");
});
promise
  .then((esult) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  }); */
//promise with 3
/*const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data laoded");
  }, 2000);
});
promise.then((result) => {
  console.log(result);
});
console.log("Loading..."); */

//promise with condition 4
/*const marks = 80;
const resultPromise = new Promise((resolve, reject) => {
  if (marks >= 40) {
    resolve("Pass");
  } else {
    reject("Fail");
  }
});
resultPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  }); */
//promise chaninig 5
/*const promise = new Promise((resolve) => {
  resolve(5);
});
promise
.then((num) => {
  console.log(num);
  return num * 2;
});
.then((num) => {
  console.log(num);
  return num + 10;
})
.then((num) => {
  console.log(num);
}); */
//6 promise execution order
/*console.log("start");
const promise = new Promise((resolve) => {
  console.log("Inside promise");
  resolve();
});
promise.then(() => {
  console.log("Promise Resolved");
});
console.log("End"); */
// promise returning a value from 1
/*Promise.resolve(19);
.then((num) => {
  return num + 5;
})
.then((result) => {
  console.log(result);
}); 
//promise reject 2
/*Promise.reject("Server Error").catch((error) => {
  console.log(error);
}); */
//promise finally 4
/*Promise.resolve("success")
  .then((msg) => {
    console.log(msg);
  })
  .finally(() => {
    console.log("Completed");
  });*/
//login exaample
/*const isLoggedIn = true;
const loginPromise = new Promise((resolve, reject) => {
  if (isLoggedIn) {
    resolve("Welcome User");
  } else {
    reject("Login Falied");
  }
});
loginPromise.then(console.log).catch(console.log);*/
//age verification
/*function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Eligible to vote");
    } else {
      reject("Not Eligible");
    }
  });
}
checkAge(15).then(console.log).catch(console.log);*/
//promise all
/*const p1 = Promise.resolve("HTML");
const p2 = Promise.resolve("CSS");
const p3 = Promise.resolve("JAVASCRIPT");
Promise.all([p1, p2, p3]).then((result) => {
  console.log(result);
});*/
//interview question
/*console.log("1");
setTimeout(() => {
  console.log("2");
}, 0);
Promise.resolve().then(() => {
  console.log("3");
});
console.log("4");*/
//login with username and password
/*function login(username, pasword) {
  return new Promise((resolve, reject) => {
    const correctUsername = "Sujit";
    const correctPassword = "1234";
    if (username === correctUsername && pasword === correctPassword) {
      resolve("Login Succesfully");
    } else {
      reject("Invalid username or Password");
    }
  });
}
login("Sujit", "1234")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  }); */
/*const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("i am a promise");
    resolve("success");
  });
};
let promise = getPromise();
promise.then(() => {
  console.log("promise fulfilled");
}); */
/*const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received successfully");
  }, 5000);
});
console.log("Start");
myPromise.then((result) => {
  console.log(result);
});
console.log("End"); */
//setTimeout() with login
function login(username, password) {
  return new Promise((resolve, reject) => {
    console.log("Checking login....");
    setTimeout(() => {
      if (username === "sujit" && password === "1234") {
        resolve("login successfully");
      } else {
        reject("Invalid username or password!");
      }
    }, 3000);
  });
}
login("sujit", "1234")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
//FAKE API DATA FETCH
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 101,
        name: "sujit",
        course: "It",
      });
    }, 4000);
  });
}
async function showUser() {
  console.log("Fetching user Data......");
  const user = await getUserData();
  console.log("ID:", user.id);
  console.log("NAME:", user.name);
  console.log("COURSE:", user.course);
}
showUser();
//Promise with resolve and reject
function checkResult(marks) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 40) {
        resolve("You Passed!");
      } else {
        reject("You failed!");
      }
    }, 5000);
  });
}
async function studentResult() {
  try {
    console.log("Checking result.....");
    const result = await checkResult(75);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
studentResult();
//Multipul Promises
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data loaded");
    }, 3000);
  });
}
function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Posts loaded");
    }, 4000);
  });
}
async function loadWebsite() {
  console.log("Website loading.....");
  const user = await getUser();
  console.log(user);
  const posts = await getPosts();
  console.log(posts);
  console.log("Website loaded successfully");
}
loadWebsite();
