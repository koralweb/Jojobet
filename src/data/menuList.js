let menuList = [
  {
    name: "Піца 'Мар'",
    price: 680,
    img: require('../assets/p_1.jpeg'),
  },
  {
    name: "Піца 'Калабреза'",
    price: 660,
    img: require('../assets/p_6.jpeg'),
  },
  {
    name: "Піца 'Мачіо'",
    price: 560,
    img: require('../assets/p_2.jpeg'),
  },
  {
    name: "Піца 'Ела-діабо'",
    price: 660,
    img: require('../assets/p_7.jpeg'),
  },
  {
    name: "Піца 'Когумело Жульєн'",
    price: 560,
    img: require('../assets/p_3.jpeg'),
  },
  {
    name: "Піца 'курка з брокколі'",
    price: 560,
    img: require('../assets/p_4.jpeg'),
  },
  {
    name: "Піца 'лосось і шпинат'",
    price: 660,
    img: require('../assets/p_8.jpeg'),
  },
  {
    name: "Піца 'Кейхо'",
    price: 520,
    img: require('../assets/p_9.jpeg'),
  },
  {
    name: 'Грего',
    price: 380,
    img: require('../assets/s_1.jpeg'),
  },
  {
    name: 'Цезар з куркою',
    price: 420,
    img: require('../assets/s_3.jpeg'),
  },
  {
    name: 'Цезар з креветками',
    price: 450,
    img: require('../assets/s_4.jpeg'),
  },
  {
    name: 'Салат з кальмарів',
    price: 420,
    img: require('../assets/s_5.jpeg'),
  },
  {
    name: 'Святковий салат',
    price: 390,
    img: require('../assets/s_7.jpeg'),
  },
  {
    name: 'Екзотик',
    price: 390,
    img: require('../assets/s_10.jpeg'),
  },
  {
    name: 'Страва сир',
    price: 420,
    img: require('../assets/l_1.jpeg'),
  },
  {
    name: 'Оселедець',
    price: 250,
    img: require('../assets/l_2.jpeg'),
  },
  {
    name: 'Salmão de/de salga própria',
    price: 430,
    img: require('../assets/l_3.jpeg'),
  },
  {
    name: 'Língua de boi',
    price: 310,
    img: require('../assets/l_4.jpeg'),
  },
  {
    name: 'Café da manhã "Raznosoli"',
    price: 250,
    img: require('../assets/l_5.jpeg'),
  },
  {
    name: 'Croutons de alho de centeio',
    price: 150,
    img: require('../assets/l_7.jpeg'),
  },
  {
    name: 'Жаренные креветки',
    price: 450,
    img: require('../assets/l_8.jpeg'),
  },
  {
    name: 'Asas de churrasco',
    price: 320,
    img: require('../assets/l_9.jpeg'),
  },
  {
    name: 'Шніцель де Вінер',
    price: 480,
    img: require('../assets/h_2.jpeg'),
  },
  {
    name: 'Carne em francês',
    price: 480,
    img: require('../assets/h_4.jpeg'),
  },
  {
    name: 'Frango Tailandês',
    price: 420,
    img: require('../assets/h_8.jpeg'),
  },
  {
    name: 'Espetos de salmão',
    price: 750,
    img: require('../assets/h_9.jpeg'),
  },
  {
    name: 'Filé de salmão',
    price: 320,
    img: require('../assets/h_10.jpeg'),
  },
  {
    name: 'Batatas fritas',
    price: 170,
    img: require('../assets/g_1.jpeg'),
  },
  {
    name: 'Batatas rústicas',
    price: 170,
    img: require('../assets/g_2.jpeg'),
  },
  {
    name: 'Vegetais grelhados',
    price: 430,
    img: require('../assets/g_3.jpeg'),
  },
  {
    name: 'Salmão',
    price: 190,
    img: require('../assets/r_1.jpeg'),
  },
  {
    name: 'Пепіно',
    price: 160,
    img: require('../assets/r_2.jpeg'),
  },
  {
    name: 'Прищі',
    price: 160,
    img: require('../assets/r_3.jpeg'),
  },
  {
    name: 'Camarão',
    price: 190,
    img: require('../assets/r_4.jpeg'),
  },
  {
    name: 'Abacate',
    price: 180,
    img: require('../assets/r_5.jpeg'),
  },
  {
    name: 'Filadélfia',
    price: 420,
    img: require('../assets/r_6.jpeg'),
  },
  {
    name: 'Чукаго',
    price: 320,
    img: require('../assets/r_7.jpeg'),
  },
  {
    name: 'Кіото',
    price: 280,
    img: require('../assets/r_8.jpeg'),
  },
  {
    name: 'O Dragão',
    price: 390,
    img: require('../assets/r_9.jpeg'),
  },
  {
    name: 'Enguia macia',
    price: 340,
    img: require('../assets/r_10.jpeg'),
  },
];

menuList = [...menuList].map(prod => ({
  ...prod,
  count: 1,
  id: Math.random(),
  isAdded: false,
}));

export default menuList;
