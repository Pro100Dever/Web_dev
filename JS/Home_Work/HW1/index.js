const punkt = 83

if (punkt >= 90) {
  console.log('A')
} else if (punkt >= 80 && punkt < 90) {
  console.log('B')
} else if (punkt >= 70 && punkt < 80) {
  console.log('C')
} else if (punkt >= 60 && punkt < 70) {
  console.log('D')
} else {
  console.log('F')
}

const dayOfWeek = 2
switch (dayOfWeek) {
  case 1:
    console.log('Montag')
    break
  case 2:
    console.log('Dienstag')
    break
  case 3:
    console.log('Mittwoch')
    break
  case 4:
    console.log('Donnerstag')
    break
  case 5:
    console.log('Freitag')
    break
  case 6:
    console.log('Samstag')
    break
  case 7:
    console.log('Sonmtag')
    break
}
