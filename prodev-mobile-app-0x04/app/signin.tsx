import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "@/styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function SignIn() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Welcome Back</Text>
        <Text style={styles.subText}>Login to your account</Text>
      </View>

      {/* Form */}
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput placeholder="Enter your email" style={styles.formControl} />

        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry
            style={styles.passwordControl}
          />
        </View>
      </View>

      {/* Forgot Password */}
      <Text style={styles.forgotPasswordText}>Forgot password?</Text>

      {/* Primary Button */}
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      {/* Secondary Buttons */}
      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Sign in with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Signup Prompt */}
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/join")}>
          <Text style={styles.signupSubTitleText}>Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
