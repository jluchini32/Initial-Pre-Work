function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for(let i = 0; i < arr.length; i++){
      for(let p = 0; p < arr[i].length; p++){
        product = product * arr[i][p];
      }
    }
    // Only change code above this line
    return product;
  }
  
  // Modify values below to test your code
  multiplyAll([[1,2],[3,4],[5,6,7]]);
  