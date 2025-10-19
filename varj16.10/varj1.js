function newMatrix(matrix) {
  let n = matrix.length;
  let result = [];

      for (let i = 0; i < n; i++) {
    
      result[i] = [];

     for (let j = 0; j < n; j++) {

      if (matrix[i][j] === "M") {

        result[i][j] = "M"; 
      } else
         {
        let count = 0;
        for (let x = i - 1; x <= i + 1; x++) {

          for (let y = j - 1; y <= j + 1; y++) {

            if (x >= 0 && x < n && y >= 0 && y < n) {

              if (matrix[x][y] === "M")
                
                 count++;
            }
          }
        }

        result[i][j] = count;
      }
    }
  }

  return result;
}

let arr = [
  [0, "M", 0],
  [0, 0, "M"],
  ["M", 0, 0]
];

console.log(newMatrix(arr));
