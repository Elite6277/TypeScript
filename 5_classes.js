// Классы
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Классы в TypeScript создается также как и ES6 классы но есть определенные нюансы
var TypeScript = /** @class */ (function () {
    function TypeScript(version) {
        this.version = version;
    }
    TypeScript.prototype.info = function (name) {
        return "[".concat(name, "]: TypeScript version is ").concat(this.version);
    };
    return TypeScript;
}());
// Рассматриваем отличие создание классов от JavaScript
//class Car {
//   readonly model: string // Мы можем указывать поля с мофификатором readonly - который позволяет нам на этапе компиляции определить что данные переменнные не будут перезаписываться никак
//   readonly numberofWheels: number = 4
// Хорощей практикой считается если  мы определяем поля до конструктора 
//   constructor(theModel: string) {
// Что интересно  учитывая что поле model  у нас readonly мы всеравно можем его перезаписать, но можем это сделатьтолько внутри конструктора  в доугих методах мы этого сдеалть не можем 
//      this.model = theModel
//}
//}
// Более короткая версия верхней записи и они идентичны
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numberofWheels = 4;
    }
    return Car;
}());
// =====================
// Модификаторы для классов
// Что такое модификаторы бывает три вида модификаторов protected public private
// Если мы не пишем никакого  мофдификатора то по умолчанию они будут все public
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = ''; //защищенные 
        this.color = 'black'; // Публичные переменнные
    }
    Animal.prototype.go = function () {
        console.log('Go');
    };
    return Animal;
}());
// Создаем уже более точеый класс который наследуется от Animal
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
// Принцип работы модификаторов
// Когда мы задаем модификатор protected это озночает что данные поля они могут быть доступны в классе  Animal и для всех классов которые наследуются от класса Animal тоесть видно что  учитывая что это protected свойство мы всеравно в  классе Cat имеем к ниму доступ  и можем спокойну ему задавать что то
// private переменнные или методы они достк=упны только в том классе в котором были определены тоесть в Animal  мы можем спокоцно пользоваться методом go и все будет хорошо  однако в классе cat мы уже не можем обратится к методу go потому что он доступен только в классе Animal
// public перменные и методы которые доступны лоя всх instanse они доступны для перменной cat  класса Cat в общем везде 
//==========
// Абстрактные классы  и для чего они нужны ?
// Они не во что не компилируются но они также нам нужны на этапе разработки для того чтобы от них наследоваться и помимо этого еще и присутствуют абстрактные методы
// Пример 
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('Component on render');
    };
    AppComponent.prototype.info = function () {
        return 'This is info ';
    };
    return AppComponent;
}(Component));
// Абстрактыне классы от них можно наследоваться но при этом они не во что не компилируются
