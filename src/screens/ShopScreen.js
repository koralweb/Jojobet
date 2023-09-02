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
import Search from '../components/Search';
import menu from '../mobx/menu';
import SingleProduct from '../components/SingleProduct';
import BottomLine from '../components/BottomLine';

const ShopScreen = ({navigation}) => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const renderProducts = () => {
    return menu.list.map(product => (
      <TouchableOpacity
        style={styles.productBlock}
        key={product.name}
        onPress={() => setCurrentProduct(product)}>
        <Image source={product.img} style={styles.img} />
        <Text style={styles.productTitle}>{product.name}</Text>
        <Text style={styles.productPrice}>{product.price} UAH</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <Wrapper>
      <View style={styles.cont}>
        <Search />
        <Text style={styles.title}>Популярна їжа</Text>
        <ScrollView>
          <View style={styles.productsBlock}>{renderProducts()}</View>
        </ScrollView>
        <BottomLine navigation={navigation} />
      </View>
      {currentProduct && (
        <SingleProduct
          navigation={navigation}
          setCurrentProduct={setCurrentProduct}
          product={currentProduct}
        />
      )}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    marginLeft: 15,
    fontWeight: '700',
    marginBottom: 30,
  },
  productsBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  productBlock: {
    width: '50%',
    paddingHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  img: {
    width: '100%',
    height: 150,
  },
  productTitle: {
    marginTop: 10,
  },
  productPrice: {
    color: 'grey',
  },
});

export default ShopScreen;
