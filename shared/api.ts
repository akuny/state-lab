const getRandomNumberBetweenAndIncluding = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// This function mimics an network request to fetch data from the server
export const fetchRealMagicWord = async (): Promise<string> => {
  const realMagicWord = 'abracadabra';

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(realMagicWord);
      // Resolve after a delay between 300 and 500 milliseconds to simulate
      // inconsistency of network request resolution time
    }, getRandomNumberBetweenAndIncluding(300, 500));
  });
};
