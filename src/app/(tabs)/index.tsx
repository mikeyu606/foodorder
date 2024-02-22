import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View} from '@/src/components/Themed';

import Color from '../../constants/Colors';
import products from '../../../assets/data/products';

const product = products[1]; //get the first product which is an object called pepperoni pizza

import { Image } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

//create object created styles 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding:10,
    borderRadius: 10,
  
  },
  title: { //nested object?
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    color: Color.light.tint,
    fontWeight: 'bold',
  },
  image: {

    width: '100%',
    aspectRatio: 1,
  },
});
