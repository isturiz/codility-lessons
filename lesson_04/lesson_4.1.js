// 40% performance: https://app.codility.com/demo/results/trainingXTKMRS-PHZ/

// const solution = (X, A) => {

//   auxArr = []

//   for (let i = 0; i < A.length; i++) {

//     if (auxArr.indexOf(A[i]) === -1) {
//       auxArr.push(A[i])
//     }
//     if (auxArr.length === X) {
//       return i
//     }
//   }

//   return -1
// }

// 100% performance: https://app.codility.com/demo/results/trainingS293ZP-BH4/

const solution = (X, A) => {

  let auxArr = []

  for (let i = 0; i < X; i++) {
    auxArr[i] = 0
  }

  let necessarry = 0

  for (let j = 0; j < A.length; j++) {

    if (auxArr[A[j] - 1] === 0) {
      necessarry++
      auxArr[A[j] - 1] = 1
    }
    if (necessarry === X) {
      return j
    }
  }
  return -1
}

console.log(solution(1, [1]))
