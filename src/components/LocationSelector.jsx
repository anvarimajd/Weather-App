import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View } from "react-native";
import { CITIES } from "../constants/city";

export default function LocationSelector({ selectedCity, onCityChange }) {
  return (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedCity}
        onValueChange={onCityChange}
        style={styles.picker}
        dropdownIconColor={"white"}
        mode="dropdown"
      >
        {CITIES.map((city) => (
          <Picker.Item key={city.value} label={city.label} value={city.value} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 15,
    marginVertical: 20,
    width: "90%",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    overflow: "hidden",
  },
  picker: {
    color: "white",
  },
});
