// Yandex map
const init = () => {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [47.0496929905389, 28.865509557459873],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15,
    // gjkjce vfcinf,bhjdfybz e,bhf.
    controls: ["smallMapDefaultSet"],
  });
  const myPlacemark = new ymaps.Placemark(
    [47.0496929905389, 28.865509557459873],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/marker.svg",
      iconImageSize: [70, 70],
      iconImageOffset: [-35, -70],
    }
  );
  myMap.geoObjects.add(myPlacemark);
};
ymaps.ready(init);

// Leaflet map

// const map = L.map("map").setView([47.04977588340773, 28.86508037725735], 17);

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// L.marker([47.04977588340773, 28.86508037725735])
//   .addTo(map)
//   .bindPopup("E-trans")
//   .openPopup();
