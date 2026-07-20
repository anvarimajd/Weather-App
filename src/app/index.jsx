import LocationSelector from "@/components/LocationSelector";
import WeatherInfo from "@/components/WeatherInfo";

import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const API_KEY = "1d592af315d2d45b4526812aae1e57dd";

export default function App() {
  const [city, setCity] = useState("Tehran");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeOfDay, setTimeOfDay] = useState("day");

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`,
      );
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
        calculateLocalTime(data.timezone);
      } else {
        alert("خطا در دریافت اطلاعات: " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("خطا در ارتباط با سرور");
    } finally {
      setLoading(false);
    }
  };

  const calculateLocalTime = (timezoneOffsetSeconds) => {
    const localDate = new Date(
      new Date().getTime() + timezoneOffsetSeconds * 1000,
    );
    const hour = localDate.getUTCHours();

    if (hour >= 5 && hour < 12) {
      setTimeOfDay("morning");
    } else if (hour >= 12 && hour < 19) {
      setTimeOfDay("day");
    } else {
      setTimeOfDay("night");
    }
  };

  const getGradientColors = () => {
    switch (timeOfDay) {
      case "morning":
        return ["#FFB75E", "#ED8F03"];
      case "day":
        return ["#4facfe", "#00f2fe"];
      case "night":
        return ["#0f2027", "#203a43", "#2c5364"];
      default:
        return ["#4facfe", "#00f2fe"];
    }
  };

  return (
    <LinearGradient colors={getGradientColors()} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <LocationSelector selectedCity={city} onCityChange={setCity} />

        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="white" />
          </View>
        ) : (
          <WeatherInfo data={weatherData} />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
    marginTop: 20,
    letterSpacing: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
