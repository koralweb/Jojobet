import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import colors from '../data/colors';
import menu from '../mobx/menu';
import {observer} from 'mobx-react-lite';
import globalStyles from '../data/globalStyles';
import EmptyCart from '../components/EmptyCart';
import CartFinish from '../components/CartFinish';

const CartScreen = ({navigation}) => {
  const [done, setDone] = useState(false);
  const renderProducts = () => {
    return menu.list
      .filter(el => el.isAdded)
      .map(product => (
        <View style={styles.productBlock} key={product.name}>
          <View>
            <Image source={product.img} style={styles.img} />
            <Text style={{fontWeight: '700'}}>{product.name}</Text>
            <Text style={{color: 'grey'}}>
              {product.price * product.count} UAH ({product.count}шт)
            </Text>
          </View>
          <TouchableOpacity onPress={() => menu.removeProduct(product.id)}>
            <FontAwesomeIcon icon={'close'} color={'red'} size={25} />
          </TouchableOpacity>
        </View>
      ));
  };

  const renderTotal = () => {
    return menu.list
      .filter(el => el.isAdded)
      .reduce((acc, el) => acc + el.price * el.count, 0);
  };

  return (
    <Wrapper>
      <View style={styles.cont}>
        <View style={styles.topLine}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon
              icon={'arrow-left'}
              color={colors.orange}
              size={30}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Ваш кошик</Text>
          <TouchableOpacity style={styles.topIconBlock}>
            <FontAwesomeIcon icon={'arrow-left'} color="#fff" size={30} />
          </TouchableOpacity>
        </View>
        {menu.list.some(el => el.isAdded) ? (
          <>
            <ScrollView>{renderProducts()}</ScrollView>
            <View style={styles.total}>
              <Text>Итого:</Text>
              <Text>{renderTotal()} UAH</Text>
            </View>
            <TouchableOpacity
              style={{...styles.btn, marginBottom: 20}}
              onPress={() => setDone(true)}>
              <Text style={styles.btnText}>Оформити</Text>
            </TouchableOpacity>
          </>
        ) : (
          <EmptyCart navigation={navigation} />
        )}
      </View>
      {done && <CartFinish setDone={setDone} />}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  cont: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topLine: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
  },
  img: {
    width: 180,
    height: 120,
  },
  productBlock: {
    paddingHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    borderColor: colors.orange,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default observer(CartScreen);
