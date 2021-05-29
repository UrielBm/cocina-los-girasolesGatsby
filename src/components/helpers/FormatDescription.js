export const FormatDescription = description => {
  const Description = description.split("**")
  const response = Description.map((text, i) => {
    if (i % 2 !== 0) {
      const title = {
        type: "title",
        data: text,
      }
      return title
    } else {
      const desc = {
        type: "desc",
        data: text,
      }
      return desc
    }
  })
  return response
}
