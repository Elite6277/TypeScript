// Enums

// Enums это вспомогательная сущность которая позволяет лучше структурировать ваш код если присутсвуют допустим однотипные элементы

// У них есть два типа записи 
//1 

// По умолчанию если мы задаем enum таким образом то они присваивают значение Simple = 0 Standard = 1 Premium = 2 
enum Membership {// далее в фигурных скобках мы будем указывать какие значения будут у этого enum 
   Simple,
   Standard,
   Premium
}

// Теперь как нам использовать эти enum и какие вообще значения будет у него

const membership = Membership.Standard

// У нас есть возможность получить строковые значения скажем premiuim или любого другого элемента enum это называется reverse enum 
const membershipReverse = Membership[2]
console.log(membership)// Получим 1 
console.log(membershipReverse)//  Получим строчку Premium 

// Мы млжем давать enum более внятные значения 
enum SocialMedia {
   VK = 'VK',
   FACEBOOK = 'FACEBOOK',
   INSTAGRAM = 'INSTAGRAM',
}

// И теперь уже когда мы будем обращятся к какому то элементу enu, то мы уэе будем получать строчку

const SocialMediaConsole = SocialMedia.VK

console.log(SocialMediaConsole)

