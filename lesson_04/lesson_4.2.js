// https://app.codility.com/demo/results/trainingUKGS4W-98Q/

function solution(A) {

  let auxArr = []
  A.sort(function(a, b) {return a - b})

  for (let i = 0; i < A.length; i++) {
    auxArr[i] = i + 1 
  }

  for (let i = 0; i < A.length; i++) {
    if (auxArr[i] !== A[i]) {
      return 0
    }
  }
  return 1
}

console.log(solution([4, 1, 3]));
