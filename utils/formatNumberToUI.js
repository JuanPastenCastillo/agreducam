const theFunctionToFormat = (numberToFormat = "56912345678", fromWhere = 3) => {
  return numberToFormat.slice(0, fromWhere) + " " + numberToFormat.slice(fromWhere).match(/.{1,4}/g).join(" ")
}

export const formatNumberToUI = (numberToFormat) => {

  if (numberToFormat[0] === "+") {
    return theFunctionToFormat(String(numberToFormat), 4)
  } else {
    return theFunctionToFormat(String(numberToFormat))
  }


}