# Редактор маршрутов

 [Одностраничное приложение](https://andreyjs.github.io), в котором пользователь в интерактивном режиме может создавать на карте маршрут, указывая начальную, конечную и промежуточные точки движения. Для каждой точки маршрута можно посмотреть ее адрес. Так же можно редактировать маршрут путем перетаскивания точек на карте или в списке.

## Использованные технологии

 * [Angular CLI](https://cli.angular.io/)
 * [Google Maps API](https://developers.google.com/maps/documentation/javascript/?hl=ru)
 * [Angular Google Maps](https://github.com/SebastianM/angular-google-maps)
 * [Dragula](https://github.com/valor-software/ng2-dragula) 

## Установка

```
$ git clone https://github.com/AndreyJS/maps.git
$ cd maps
$ npm uninstall -g @angular/cli
$ npm cache clean
$ npm install -g @angular/cli@latest
$ npm install
```

## Запуск

Выполните команду `ng serve` для запуска сервера. Приложение станет доступно по адресу `http://localhost:4200/`.

## Запуск тестов

Выполните команду `ng e2e` для запуска end-to-end тестов посредством [Protractor](http://www.protractortest.org/).
Перед запуском тестов убедитесь, что вы запустили приложение посредством `ng serve`.
