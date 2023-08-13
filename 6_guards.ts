// Guards

// Guards это некоторые вспомогательные конструкции в TypeScript которые позволяют нам работать так же с типами
// В зависимости от типа аргументов нам нужно делать разный функционал 
function strip(x: string | number) {
   if (typeof x === 'number') {
      return x.toFixed(2)//метод toFixed присутсвтвует именно у чисел
   }
   return x.trim()
}

// Оператор   с помошью него мы можем проверить принадлежность какого то объекта к его классу 

class MyResponse {
   header = ' response header'
   result = ' response result'
}

class MyError {
   header = 'error header'
   result = ' error message'
}

// Создаем функцию которая обрабатывает одновременнно и reponse и ошибку 

function handle(res: MyResponse | MyError) {
   if (res instanceof MyResponse) {
      return {
         info: res.header + res.result
      }
   } else {
      return {
         info: res.header = res.message
      }
   }
}

// == ======================

// Очень часто напрактике встречается именно вот такая конструкция
type AlertType = 'succes' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
   //....
}

// Теперь в эту функцию я могу передавать различные значения 

setAlertType('succes')
setAlertType('danger')
setAlertType('warning')