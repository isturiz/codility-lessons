// https://app.codility.com/demo/results/training54VNES-UQK/

function solution(A) {
  
  let leftSum = 0
  let rightSum = A.reduce((a, b) => a + b)
  let diff = []
  for (let i = 0; i < A.length - 1; i++) {

    leftSum += A[i]
    rightSum -= A[i]

    diff[i] = Math.abs(rightSum - leftSum)
  }
  let d = diff.sort((a,b)=>a-b)
  console.log(d);
  return d[0]
}
console.log(solution([1, 2, 8, 9]))