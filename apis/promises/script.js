// The basics of a promise
// Still a little confused about Prmosises

function succesfulPromise() {
  return new Promise((resolve, reject) => {
    resolve({ a: 'success' });
  });
}

function rejectedPromise() {
  return new Promise((resolve, reject) => {
    reject(new Error('here is error'));
  });
}

function pendingPromise() {
  return new Promise((resolve, reject) => {
    // actions to perform here
  });
}

// this is what will run the needed funtion from above.

(async function () {
  try {
    const result = await rejectedPromise();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();

//
// Some more stuff about promises
const promise = () => {
  return new Promise((resolve, reject) => {
    reject(new Error('Something went wrong'));
  });
};

const resolver = async (promise) => {
  try {
    await promise();
  } catch (err) {
    console.log(err);
  } finally {
    return 'I still return the value';
    console.log('I am here');
  }
};

(async function () {
  const test = await resolver(promise);
  console.log(test);
})();

//
//
// More about promises
const startTransaction = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, 5000);
  });
};
const initPayment = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, 1000);
  });
};
const launchVerification = () => {
  return new Promise((res, reject) => {
    setTimeout(() => {
      reject(new Error('error'));
    }, 100);
  });
};

const performance = async (label) => {
  const date = new Date();
  console.log(label, `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
};

(async function () {
  try {
    await performance('start');
    const result = await Promise.all([startTransaction(), initPayment(), launchVerification()]);
    await performance('end');
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();

//
//
// Time task

const taskA = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('a');
    }, 4000);
  });
};
const taskB = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('b');
    }, 2000);
  });
};
const taskC = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('c');
    }, 10000);
  });
};

const promiseStopper = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('too long to complete');
    }, 1500);
  });
};

(async function () {
  try {
    const result = await Promise.race([taskA(), taskB(), taskC(), promiseStopper()]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
