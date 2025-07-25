// // // console.log('Hello World from main.js');

// // // const nama;

// // // number/int
// // // string
// // // boolean true/false

// // // 123
// // // "Arief Yusron"
// // // true

// // // var
// // // let const

// // // const nama = "Arief Yusron"
// // // const umur = 18
// // // const isStudent = true
// // // const nik = '153153215132'
// // // const noHp = 087327156837

// // // const panjang = 10
// // // const lebar = 5
// // // const luas = panjang * lebar

// // // console.log(panjang === lebar)

// // // === | !==
// // // > | <
// // // >= | <=

// // // and &&
// // // or ||

// // // console.log(nama === "Arief Yusron" && umur === 18)
// // // // console.log(true && true)
// // // console.log(true && false || false || false && true)

// // // const isStudent = false
// // // const umur = 30

// // // if (isStudent && umur === 18) {
// // //   console.log('Anda adalah siswa 18 tahun')
// // // } else if(!isStudent && umur >= 18) {
// // //   console.log('Anda adalah mas mas 18 tahun lebih')
// // // } else {
// // //   console.log('bocil')
// // // }


// // // function helloWorld() {
// // //   console.log('hello wolrd')
// // //   console.log('hello wolrd2')
// // //   console.log('hello wolrd3')
// // //   console.log('hello wolrd4')
// // // }

// // const luasTanah = (panjang, lebar) => {
// //   console.log('luas tanah: ', panjang * lebar)
// // }

// // luasTanah(10, 2)
// // luasTanah(20, 5)
// // luasTanah(30, 6)

// // const resultLuasTanah = (panjang, lebar) => {
// //   console.log('ini func return')
// //   return panjang * lebar
// // }

// // resultLuasTanah(10, 2)

// // const totalLuasTanah = resultLuasTanah(10, 2) + resultLuasTanah(20, 5) + resultLuasTanah(30, 6)
// // console.log(totalLuasTanah)

// // const funcReturn = () => { 
// //     return "Hello World";
// // }

// // funcReturn();

// // const nama = "Arief Yusron"

// // nama

// // const returnFunc = () => {

// //   return () => {
// //     console.log('hello world')
// //   }
// // }

// // returnFunc()

// // const helloWorld = () => {
// //   console.log('hello world')
// // }

// // const helloWorld5 = () => {
// //   helloWorld()
// //   helloWorld()
// //   helloWorld()
// //   helloWorld()
// //   helloWorld()
// // }

// // helloWorld5()

// // const callName = (name = 'arief') => {
// //   console.log(name)
// // }

// // callName()
// // callName('yusron')

// // const variable = ''

// // string
// // number / int
// // boolean

// // array
// // object


// let array = ['arief', 'yusron', 'jamal']
// console.log(array)

// array = ['yusuf', ...array, 'kaka']
// console.log(array)

// let object = {
//   name: 'arief yusron',
//   age: 18,
//   member: [
//     {
//       name: 'jamal',
//       saldo: 1000,
//     },
//     {
//       name: 'yusuf',
//       saldo: 2000
//     }
//   ]
// }

// console.log(object)

// object = {
//   ...object,
//   name: 'arief'
// }

// console.log(object)


// for (let i = 0; i < 10; i = i + 2) {
//   console.log('loop: ', i)
// }

// const dataArray = [
//   'Arief Yusron',
//   'Dani',
//   'Jamal',
//   'Yusuf',
//   'Mamat',
//   'Putri',
//   'yamal'
// ]

// for (let i = 0; i < dataArray.length; i++) {
//   console.log(dataArray[i])
// }

// const resultMap = dataArray.map((item, index) => {
//   return {
//     nomer: index,
//     name: item
//   }
// })

// // console.log(dataArray)
// console.log(resultMap)

// dataArray.forEach((item, index) => {
//   console.log(item)
// })

let dataTodoList = localStorage.getItem('todolist') !== null ? JSON.parse(localStorage.getItem('todolist')) : []

const addTodoList = (data) => {
  dataTodoList = [
    data,
    ...dataTodoList,
  ]
  localStorage.setItem('todolist', JSON.stringify(dataTodoList))
}

const deleteData = (index) => {
  dataTodoList = dataTodoList.filter((e, i) => {
    return i !== index
  })
}

const deleteAllData = () => {
  dataTodoList = []
  localStorage.removeItem('todolist')
}

const editData = (index, data) => {
  dataTodoList[index] = {
    ...dataTodoList[index],
    ...data
  }
}

const launchPage = () => {
  const container = document.getElementById('container')
  container.innerHTML = ''

  if(dataTodoList.length === 0) {
    const p = document.createElement('p')
    p.textContent = 'Tidak ada todo list'

    container.appendChild(p)
  } else {
    const ul = document.createElement('ul')

    dataTodoList.forEach((item) => {
      const li = document.createElement('li')
      li.textContent = `${item.desc} - ${item.status}`

      ul.appendChild(li)
    })

    container.appendChild(ul)
  }
}

const renderDeleteAllTodo = () => {
  const buttonDeleteAllTodo = document.getElementById('buttonDeleteAllTodo')

  buttonDeleteAllTodo.addEventListener('click', () => {
    deleteAllData()
    launchPage()
  })
}

launchPage()
renderDeleteAllTodo()




const form = document.getElementById('form')
const alertError = document.getElementById('alertError')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if(e.target.descTodo.value !== '') {
    addTodoList({
      desc: e.target.descTodo.value,
      status: e.target.statusTodo.value
    })
    
    document.getElementById('textError')?.remove()

    form.reset()
    launchPage()
  } else {
    const textError = document.createElement('p')
    textError.id = 'textError'
    textError.style.color = 'red'
    textError.textContent = 'Desc Tidak Boleh Kosong!'
    alertError.replaceChildren(textError)
  }
})


console.log('start')

setTimeout(() => {
  console.log('timeout 2 detik')
}, 2000);

setInterval(() => {
  console.log('interval 2 detik')
}, 2000);

console.log('end')




// const title = document.getElementById('title')
// title.textContent = "Hello World!!!"

// const container = document.getElementById('container')
// container.innerHTML = `
//   <h1>Ini H1</h1>
//   <p>Ini Paragrafh</p>
// `


// const showPage = () => {
//   const container = document.getElementById('container')

//   const h1 = document.createElement('h1')
//   h1.textContent = "Ini H1"
//   h1.className = "title"
//   h1.style.color = "red"

//   const p = document.createElement('p')
//   p.textContent = "Ini Paragrafh"

//   const fragment = document.createDocumentFragment()
//   fragment.appendChild(h1)
//   fragment.appendChild(p)

//   container.appendChild(fragment)
// }

// const hidePage = () => {
//   const container = document.getElementById('container')
//   container.innerHTML = ''
// }

// let isShow = false
// const buttonShowPage = document.getElementById('buttonShowPage')
// buttonShowPage.addEventListener('click', () => {
//   if(isShow){
//     hidePage()
//     buttonShowPage.textContent = 'Show Page'
//   } else {
//     showPage()
//     buttonShowPage.textContent = 'Hide Page'
//   }

//   isShow = !isShow
// })