function getFrequency(array) {
  if (array.length == 0) {
    return {};
  }
  const frequency = {};
  for (const char of array) {
    var value = String(char);
    if (frequency.hasOwnProperty(value)) {
      frequency[value]++;
    } else {
      frequency[value] = 1;
    }
  }
  return frequency;
}
console.log(getFrequency(['A', 'B', 'A', 'A', 'A'])); 
console.log(getFrequency([1, 2, 3, 3, 2])); 
console.log(getFrequency([true, false, true, false, false])); 
console.log(getFrequency([])); 
  
