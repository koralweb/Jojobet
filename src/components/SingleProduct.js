import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../data/colors';
import globalStyles from '../data/globalStyles';
import menu from '../mobx/menu';
import {observer} from 'mobx-react-lite';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const SingleProduct = ({navigation, product, setCurrentProduct}) => {
  const [cnt, setCnt] = useState(product.count);

  const increment = () => {
    setCnt(cnt + 1);
  };

  const decrement = () => {
    if (cnt === 1) {
      return;
    }
    setCnt(cnt - 1);
  };

  return (
    <View style={styles.cont}>
      <View style={styles.topLine}>
        <TouchableOpacity
          onPress={() => setCurrentProduct(null)}
          style={styles.topIconBlock}>
          <FontAwesomeIcon
            icon={'arrow-left'}
            style={styles.topIcons}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push('Cart')}
          style={styles.topIconBlock}>
          <FontAwesomeIcon
            icon={'shopping-cart'}
            style={styles.topIcons}
            size={30}
          />
        </TouchableOpacity>
      </View>
      <Image source={product.img} style={styles.img} />
      <View style={styles.infoBlock}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>Цена: {product.price} UAH</Text>
        <View style={styles.counterBlock}>
          <Text>Количество: </Text>
          <View style={styles.counter}>
            <TouchableOpacity onPress={decrement}>
              <Text style={styles.operator}>-</Text>
            </TouchableOpacity>
            <Text style={styles.value}>{cnt}</Text>
            <TouchableOpacity onPress={increment}>
              <Text style={styles.operator}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.price}>Итого: {product.price * cnt} UAH</Text>

        {product.isAdded ? (
          <FontAwesomeIcon
            icon={'check-circle'}
            style={styles.icon}
            size={100}
          />
        ) : (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => menu.addProduct(product.id, cnt)}>
            <Text style={styles.btnText}>Додати до кошику</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    zIndex: 100,
  },
  img: {
    width: '100%',
  },
  infoBlock: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 20,
    flex: 1,
    borderRadius: 30,
    paddingTop: 40,
    top: -30,
    borderBottomWidth: 0,
  },
  title: {
    fontSize: 25,
    marginBottom: 30,
  },
  price: {
    fontSize: 18,
    color: 'grey',
  },
  counterBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  counter: {
    flexDirection: 'row',
    width: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  operator: {
    color: colors.orange,
    fontSize: 25,
    fontWeight: '700',
  },
  value: {
    fontSize: 20,
  },
  icon: {
    color: 'green',
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  topLine: {
    position: 'absolute',
    top: 40,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 200,
    paddingHorizontal: 20,
  },
  topIconBlock: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topIcons: {
    color: colors.orange,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default observer(SingleProduct);
