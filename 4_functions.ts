// Функция которая будет складывать два числа
function add(a: number, b: number): number { // и возрвращять данная функуия тоже должна number поэтому пишем number 
   return a + b
}

// Рассматриваем пример со строкой

function toUpperCase(str: string): string {
   return str.trim().toUpperCase()
}

// У функции  в TypeScript  присутствует еще один интересный функционал перегружать определенные функции и перегружать определенные параментры  тоесть вызывать функцию с разными параметрами и получать разные значения 


interface MyPosition {
   x: number | undefined
   y: number | undefined
}


interface MyPositionWidthDefault extends MyPosition {
   default: string
}

// Здесь мы указываем перегрузку данной функции 
function position(): MyPosition //Если функция не будет ничего получать то она будет вызывать интерфейс position
function position(a: number): MyPositionWidthDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
   if (!a && !b) {
      return { x: undefined, y: undefined }
   }

   if (a && !b) {
      return { x: a, y: undefined, default: a.toString() }
   }
   return { x: a, y: b }
}

console.log('Empty: ', position())
console.log('One param: ', position(42))
console.log('Two params: ', position(10, 15))