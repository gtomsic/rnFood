import { StyleSheet, Text, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../apis/yelp";

const FoodDetailScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  useEffect(() => {
    fetchItem(id);
  }, []);

  const fetchItem = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!result) return null;

  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={result?.photos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Image style={styles.mainImage} source={{ uri: item }} />
        )}
      />
    </>
  );
};

export default FoodDetailScreen;

const styles = StyleSheet.create({
  mainImage: {
    width: "100%",
    height: 250,
    marginBottom: 5,
  },
});
