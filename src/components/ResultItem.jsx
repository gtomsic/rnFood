import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ResultItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: item.image_url }} />
      <Text style={styles.name}>{item.name}</Text>
      <Text>
        {item.rating} Stars, {item.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultItem;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
