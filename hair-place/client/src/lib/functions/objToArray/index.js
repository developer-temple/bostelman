export const objToArray = obj => {
  let array = []
  for(let prop in obj) {
    array.push({ key: prop, ...obj[prop] })
  }
  return array
}