/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */

var quantity = [];
 const champagneTower = (poured, query_row, query_glass) => {
    currentRow = [poured];
    for (let i = 0; i < query_row; i++){
      const nextRow = []
      for (let j = 0; j < currentRow.length; j++){
        const overflowAmount = currentRow[j] - 1;
        nextRow[j] = nextRow[j] + overflowAmount / 2 || overflowAmount / 2
        nextRow[j+1] = nextRow[j+1] + overflowAmount / 2 || overflowAmount / 2
      }
      currentRow = nextRow
    }
    return Math.min(1, currentRow[query_glass])
  }

// const value = champagneTower(5, 2, 2);

// console.log(value);



const champagneGlass = (poured, row, col) => {
  currentRow = [poured];
  for(let i = 0; i<row; i++) {
    newRow = [];
    let overFlow = Math.max(0, currentRow[i] - 1);
    for(let j = 0; j< currentRow.length; j++) {
      newRow[j] = newRow[j] || 0 + overFlow / 2;
      newRow[j+1] = newRow[j+1] || 0 + overFlow / 2;
    }
    currentRow = newRow;
    console.log({currentRow});
  }

  console.log({row, col}, {val: Math.min(1, currentRow[col])});
  return Math.min(1, currentRow[col]);

} 

const value = champagneGlass(3, 3, 1);