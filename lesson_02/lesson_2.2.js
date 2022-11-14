function solution(A) {

  if (A.length === 1) {
    return A[0]
  } 

  A.sort(function(a, b) {return a - b})

  for (let index = 0; index < A.length; index = index + 2) {
    
    if (A[index] !== A[index + 1]) {
      return A[index]
    }
  }
}

// console.log(solution([9, 3, 9, 3, 9, 7, 9]));
console.log(solution([5]));