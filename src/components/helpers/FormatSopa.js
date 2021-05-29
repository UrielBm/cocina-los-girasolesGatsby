export const FormatSopa = sopa => {
  let ArraySopa = []
  for (const property in sopa) {
    ArraySopa.push(sopa[property])
  }
  ArraySopa = ArraySopa.map(item => {
    return item.replace("_", " ")
  })
  ArraySopa = ArraySopa.map(item => {
    return item.replace("_", " ")
  })
  return ArraySopa
}
