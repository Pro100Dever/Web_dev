const people = {
  name: 'Valentin',
  age: 46,
}
for (let key in people) {
  console.log(`${key}: ${people[key]}`)
}

console.log('===========================')

const book = {
  title: 'dengi ne paxnut',
  buchesAutor: 'Vasok',
}

const buchArr = [
  {
    title: 'paxnut',
    buchesAutor: 'Petrovich',
  },
  {
    title: 'sdhdshdh',
    buchesAutor: 'rrsdgdshsdfhrr',
  },
]
for (let item of buchArr) {
  for (let key in item) {
    console.log(`${key}: ${item[key]}`)
  }
}

console.log('===========================')

const rectangle = { a: 10, b: 35 }
rectangle.p = rectangle.a * 2 + rectangle.b * 2
rectangle.s = rectangle.a * rectangle.b
console.log(rectangle)

console.log('===========================')

const fruktArr = [
  {
    named: 'orange',
    collor: 'orange',
    title: 'sunt aut facere repellat',
  },
  {
    named: 'pineapple',
    collor: 'orange',
    title: 'qui est esse',
  },
  {
    named: 'Apple',
    collor: 'red',
    title: 'ea molestias quasi',
  },
]
for (let item of fruktArr) {
  if (item.collor === 'red') {
    console.log(item.named)
    console.log(item)
  }
}

console.log('===========================')

const playlist = {
  songs: [
    {
      tittle: 'song1',
      autor: 'bet',
    },
    {
      tittle: 'song2',
      autor: 'von',
    },
    {
      tittle: 'song3',
      autor: 'ded',
    },
  ],
}
for (let item of playlist.songs) {
  for (let key in item) {
    console.log(`${key}: ${item[key]}`)
  }
}
