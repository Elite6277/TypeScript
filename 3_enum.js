// Enums
// Enums это вспомогательная сущность которая позволяет лучше структурировать ваш код если присутсвуют допустим однотипные элементы
// У них есть два типа записи 
//1 
// По умолчанию если мы задаем enum таким образом то они присваивают значение Simple = 0 Standard = 1 Premium = 2 
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
// Теперь как нам использовать эти enum и какие вообще значения будет у него
var membership = Membership.Standard;
// У нас есть возможность получить строковые значения скажем premiuim или любого другого элемента enum это называется reverse enum 
var membershipReverse = Membership[2];
console.log(membership); // Получим 1 
console.log(membershipReverse); //  Получим строчку Premium 
// Мы млжем давать enum более внятные значения 
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
// И теперь уже когда мы будем обращятся к какому то элементу enu, то мы уэе будем получать строчку
var SocialMediaConsole = SocialMedia.VK;
console.log(SocialMediaConsole);
