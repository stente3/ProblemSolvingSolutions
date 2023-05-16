/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix "arr" is shown below:
`
1 2 3
4 5 6
9 8 9
`
The left-to-right diagonal = "1+5+9=15". 
The right to left diagonal = "3+6+9=17". 
Their absolute difference is |15-17| = 2.
*/

function diagonalDifference(arr: number[][]): number {
    let sumMainDiagonal: number = 0;
    let sumSecondDiagonal: number = 0;

    for(let i = 0; i < arr.length; i++){
        sumMainDiagonal += arr[i][i];
        sumSecondDiagonal += arr[i][arr.length - i - 1];
    }

    let difference: number = Math.abs(sumMainDiagonal - sumSecondDiagonal);
    return difference;
}

