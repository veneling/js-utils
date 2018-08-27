// Removes duplicates from list of data

let testData = [
  { id: '1G42' },
  { id: '1C23' },
  { id: '1B15' },
  { id: '1A13' },
  { id: '1B15' },
  { id: '1B310' },
  { id: '1B16' },
  { id: '1B44' },
  { id: '1G36' },
  { id: '1B15' },
  { id: '1G13' },
  { id: '1A38' },
  { id: '1F26' },
  { id: '1F26' },
  { id: '1H22' },
  { id: '1G42' },
  { id: '1F26' },
  { id: '1C32' },
]

let reduced = testData
  .reduce((a, b) => {
    a.set(b.id, (a.get(b.id) || 0) + 1);
    return a;
  }, new Map());

console.log(Array.from(reduced).filter(el => el[1] > 1))
// expected output -> [ [ '1G42', 2 ], [ '1B15', 3 ], [ '1F26', 3 ] ]
