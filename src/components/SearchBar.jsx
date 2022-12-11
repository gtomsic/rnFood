import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange }) => {
  return (
    <View style={styles.searchBackground}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.searchInput}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBackground: {
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
  },
  searchInput: {
    flex: 1,
    paddingVertical: 5,
    marginLeft: 10,
    fontSize: 18,
  },
});
