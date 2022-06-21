// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.769535, 37.639985],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15,
        controls: ['geolocationControl', 'zoomControl']
      },
      {
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition:  { top: "200px", right: "20px" },
        geolocationControlFloat: 'none',
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition: { top: "120px", right: "20px" }
      }
    );
    // Создание геообъекта с типом точка (метка).
    var myPlacemark = new ymaps.Placemark([55.769535, 37.639985], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/contacts/placemark.png',
      iconImageSize: [12, 12],
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
}