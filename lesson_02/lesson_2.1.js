function solution(A, K) {

  if (A.length === 0) {
    return A
  }

  let aux = 0
  
  for (let i = 0; i < K; i++) {

    aux = A.pop() 
    A.unshift(aux)
  }

  return A

}

console.log(solution([3, 8, 9, 7, 6], 2))
