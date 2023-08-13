// Вспомогательные опреторы которые помогают нам взаимодействовать с типами
interface Person {
   name: string
   age: number
}

// Теперь используя данный интерфейс  я могу создать отдельный тип который будет состоять из ключей данного интерфейса 

//В некоторых ситуациях для перечесления ключей это бывает полезно 
type PersonKeys = keyof Person //'name' | 'age'

const key: PersonKeys = 'name'

key = 'age'

type User = {
   _id: number
   name: string
   email: string
   createdAt: Date
}

// Предположим что мы хотим воспользоваться данным типо и при этом создать свой новый тип но не включающиъ в себя некоторые поля например поле id и cratedAt

// Мы можем это сделать двумя способами 
//Первый способ это применение специального ключевого слова Exclude и далее в треугольных скобках мы описыаем что именно нам нужно  сделать в первую очередь мы пробегаемся с помошью оператора keyof по типу User  и дальше  через запятую объясняем что нам нужно исключить 
type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>//name' | 'email'
// И Теперь в данном типе у нас также присутсвуют только  поля = это поле 'name' | 'email'


//Есть другая запись для создания подобного интерфейса подобного типа
// Мы можем воспользоваться другим ключевым словом Pick и дальше в треугольных скобках <> указываем с каким типом мы работаем, и дальше через запятую указываем какие поля наоборот нам нуэно забрать  
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'

//и теперь мы можем создавать различные перменные которые будут принимать в себя подобные значения

let ul: UserKeysNoMeta = 'name'
//ul = '_id'

// В действительности в TypeScript лишь вот эти вот вещи являются новыми, все остальное является обычным JavaScript тоесть мы можем спокойно писать и без типов в  TypeScript и получать тот же самый результат
