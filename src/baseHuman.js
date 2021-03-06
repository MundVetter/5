function toBaseHuman (db, bigInt) {
  return (input) => bigInt.fromArray(input, 5).toArray(db.length).value.map(i => db[i])
}

function toBaseFive (db, bigInt) {
  return (phrase) => bigInt.fromArray(phrase.map(word => db.indexOf(word)), db.length).toArray(5).value
}

export { toBaseHuman, toBaseFive }
