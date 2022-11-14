function solution(N) {

  let binary = Number(N).toString(2)

  let count = 0
  let saved = 0

  for (b of binary) {
    if (b === '0') {
      count++
    } else if (b === '1') {
      if (count > saved) {
        saved = count
      }
      count = 0
    }
    
  }
  return saved
}


solution(32)
