import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function WeatherInfo({ data }) {
  if (!data) return null;

  const getWeatherIcon = (main) => {
    console.log(main);

    switch (main) {
      case "Clouds":
        return "cloudy";
      case "Rain":
        return "rainy";
      case "Clear":
        return "sunny";
      case "Thunderstorm":
        return "thunderstorm";
      default:
        return "partly-sunny";
    }
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cityName}>{data.name}</Text>

      <View style={styles.iconContainer}>
        <Ionicons
          name={getWeatherIcon(data.weather[0].main)}
          size={100}
          color="white"
        />
      </View>

      <Text style={styles.temp}>{Math.round(data.main.temp)}°C</Text>

      <Text style={styles.description}>{data.weather[0].description}</Text>

      <View style={styles.divider} />

      <View style={styles.detailsRow}>
        <View style={styles.detailBox}>
          <Ionicons name="water-outline" size={24} color="white" />
          <Text style={styles.detailLabel}>رطوبت</Text>
          <Text style={styles.detailValue}>{data.main.humidity}%</Text>
        </View>

        <View style={styles.detailBox}>
          <Ionicons name="speedometer-outline" size={24} color="white" />
          <Text style={styles.detailLabel}>سرعت باد</Text>
          <Text style={styles.detailValue}>{data.wind.speed} m/s</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 25,
    padding: 25,
    width: "90%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.25)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  cityName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  iconContainer: {
    marginVertical: 15,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  temp: {
    fontSize: 70,
    fontWeight: "300",
    color: "white",
  },
  description: {
    fontSize: 20,
    color: "rgba(255, 255, 255, 0.8)",
    textTransform: "capitalize",
    marginBottom: 10,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    marginVertical: 20,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  detailBox: {
    alignItems: "center",
    flex: 1,
  },
  detailLabel: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 14,
    marginTop: 5,
  },
  detailValue: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 2,
  },
});
