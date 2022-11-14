function solution(A) {
  if (A[0] === 1) {
    return 2
  }
  if (!A.length) {
    return 1
  }
  
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] !== (A[i + 1] - 1)) {
      return A[i] + 1
    }
  }
  
  if (A[0] !== 1) {
    return 1
  }
  return A[A.length - 1] + 1
}

console.log(solution([2, 3, 4, 5]))


// function solution(A) {
//   if (!A.length) return 1;
//   let n = A.length + 1;
//   return (n + (n * n - n) / 2) - A.reduce((a, b) => a + b);
// }