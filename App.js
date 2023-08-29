import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Alert,
  SafeAreaView,
} from "react-native";

export default function App() {
  const [value1, setValue1] = useState("0");
  const [value2, setValue2] = useState("0");

  const handlePlus = () => {
    const sum = parseFloat(value1) + parseFloat(value2);
    Alert.alert("Summa", sum.toString());
  };

  const handleMinus = () => {
    const sum2 = parseFloat(value1) - parseFloat(value2);
    Alert.alert("Summa", sum2.toString());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => setValue1(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => setValue2(text)}
          keyboardType="numeric"
        />

        <StatusBar style="auto" />

        <View style={styles.fixToText}>
          <Button title="+" color="green" onPress={handlePlus} />
          <Button title="-" color="red" onPress={handleMinus} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
