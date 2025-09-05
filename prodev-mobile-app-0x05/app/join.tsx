import { Link } from "expo-router";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

const JoinScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleJoin = () => {
    console.log("Joining with:", email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Join" onPress={handleJoin} />

      <Link href="/signin" style={styles.link}>
        Already have an account? Sign in
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 20, marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  link: { marginTop: 20, color: "#3498db", textAlign: "center" },
});

export default JoinScreen;
