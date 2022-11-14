function solution(A) {
  if (!A.length) return 1;
  let n = A.length + 1;
  return (n + (n * n - n) / 2) - A.reduce((a, b) => a + b);
}
console.log(solution([2, 3, 4, 5]))