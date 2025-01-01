const bankAccountFactory = (initialBalance = 0) => {
  let balance = initialBalance;

  const checkBalance = () => balance;

  const add = (amount) => {
    balance += amount;
    console.log(`$${amount} added.`);
  };

  const subtract = (amount) => {
    balance -= amount;
    console.log(`$${amount} subtracted.`);
  };

  return {
    checkBalance,
    add,
    subtract,
  };
};

module.exports = { bankAccountFactory };

module.exports = {
  bankAccountFactory,
};
