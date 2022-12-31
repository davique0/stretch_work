// Implement a function biggestFollower() which returns the name of the individual who follows the most people.

const biggestFollower = (data) => {
  let bigFollower = '';
  let numOfUsers = 0;
  for (let user in data) {
    const numOfFollowers = data[user].follows.length
    if (numOfFollowers > numOfUsers) {
      bigFollower = user;
      numOfUsers = numOfFollowers;
    }
  }
  return bigFollower;
}

// Implement mostPopular() which returns the name of the most popular (most followed) individual.

const mostPopular = (data) => {
  let counter = {};
  for (const user in data) {
    const userFollows = data[user].follows
    for (const following of userFollows) {
      // if (counter[following] !== undefined) {
      //   counter[following] += 1
      // } else {
      //   counter[following] = 0
      // }

      counter[following] !== undefined ? counter[following] += 1 : counter[following] = 1;
      // console.log(counter[following])
    }
  }
  console.log(counter)

}





const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

console.log(mostPopular(data));
