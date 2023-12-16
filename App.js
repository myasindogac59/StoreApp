import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import React from "react";
import productData from "./productData.json";
import Product from "./src/components/Product";
export default function App() {
  const [text, onChangeText] = React.useState("Ara...");
  const renderCard = ({ item }) => <Product product={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>DGC Store</Text>
      <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Ara..."
        />  
        <ScrollView>
        <FlatList
          data={productData}
          renderItem={renderCard}
          horizontal={false}
          numColumns={2}
          keyExtractor={(Api) => Api.id.toString()}
        />
        {productData.map((productApi) => (
          <Image source={{ uri: productApi.imgURL }} style={styles.apImage} />
        ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:10
  },
  header: {
    fontSize: 30,
    fontWeight: "500", 
    fontStyle: "italic",
    marginLeft: 10,
    marginTop:30,
    color: "#353b48",
  },
  // inputContainer: {
  //   alignItems: "center",
  //   marginTop: 20,
  // },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: '#eceff1',
  },
});
