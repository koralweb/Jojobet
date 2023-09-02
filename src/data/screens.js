import HomeScreen from '../screens/HomeScreen';
import ShopScreen from '../screens/ShopScreen';
import CartScreen from '../screens/CartScreen';
import BookingScreen from '../screens/BookingScreen';
import TranslationsScreen from '../screens/TranslationsScreen';

const screens = [
  {
    title: 'Головна',
    name: 'Home',
    component: HomeScreen,
  },
  {
    title: 'Магазин',
    name: 'Shop',
    component: ShopScreen,
  },
  {
    title: 'Бронювання',
    name: 'Booking',
    component: BookingScreen,
  },
  {
    title: 'Трансляції',
    name: 'Translations',
    component: TranslationsScreen,
  },
  {
    title: 'Кошик',
    name: 'Cart',
    component: CartScreen,
  },
];

export default screens;
