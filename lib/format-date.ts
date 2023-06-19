export function formatDate(dateString) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const date = new Date(dateString)
  const year = date.getFullYear()
  const monthIndex = date.getMonth()
  const day = date.getDate()

  const month = months[monthIndex]

  return `${month} ${day}, ${year}`
}
