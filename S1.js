function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // store the first element as the smallest value you've encountered so far
    let minimumValue = array[i];
    for (let j = i + 1; j < array.length; j++) {
      // compare the element to the next element in the array till you find a smaller number
      if (array[j] < array[minimumValue]) {
        console.log(`---> I is ===> ${i}, J is ---> ${j}`);
        //if you find the minimun value, assign it to be the new minimum element or value and continue till the end of the array
        minimumValue = j;
      }
    }
    // if the minimun isn't the value you started with , then swap the two values
    if (array[i] !== array[minimumValue]) {
      console.log(`-------<==> SWAPPING TO -------<==>`);
      console.log(`----> I is ---> ${i}, minimum is ----> ${minimumValue}`);
      const temp = array[i];
      array[i] = array[minimumValue];
      array[minimumValue] = temp;
      //console.log(array)
    }
  }

  return array;
}

console.log(selectionSort([5, 7, 3, 4, 1, 9, 2, 10, 8, 6]));
