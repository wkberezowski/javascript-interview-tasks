const findVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const text = str.split('');
  let counter = 0;

  text.forEach((char) => {
    if (vowels.includes(char)) {
      counter++;
    }
  });
  return counter;
};

console.log(findVowels('anagram'));
