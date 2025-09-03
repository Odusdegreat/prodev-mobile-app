import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>

        {/* Texts */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Find your favorite place here</Text>
        </View>
        <View style={styles.titleSubTextContainer}>
          <Text style={styles.titleSubText}>
            The best prices for over 2 million properties worldwide
          </Text>
        </View>

        {/* Buttons */}
        <View style={{ marginTop: 100 }}>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.buttonPrimary}
              onPress={() => router.push("/join")}
            >
              <Text style={styles.buttonPrimaryText}>Join here</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonSecondary}
              onPress={() => router.push("/signin")}
            >
              <Text style={styles.buttonSecondaryText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonGroupSubText}>
            <Text style={{ color: "white" }}>Continue to home</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
