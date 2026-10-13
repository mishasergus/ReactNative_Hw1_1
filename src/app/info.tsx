import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.name}> Сергусь Михайло </Text>
        <Text style={styles.email}> email@example.com </Text>

        <View style={styles.statusBadge}>
          <Text style={styles.statusText} onPress={() => setIsOnline((prev) => !prev)}>
            {isOnline ? "Online" : "Offline"}
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Телефон:</Text>
            <Text style={styles.value}> </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Місто: Богородчани</Text>
            <Text style={styles.value}> </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Про себе: інф</Text>
            <Text style={styles.value}> </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#1e1e1e",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2c2c2c",
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#2a2a2a",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ff4d4d",
  },
  avatarText: {
    color: "#888",
    fontSize: 28,
    fontWeight: "bold",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 12,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: "#2a2a2a",
    marginBottom: 20,
  },
  statusText: {
    fontSize: 12,
    color: "#ff4d4d",
    fontWeight: "600",
  },
  infoContainer: {
    width: "100%",
    marginTop: 10,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#2c2c2c",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  label: {
    fontSize: 14,
    color: "#888888",
  },
  value: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "500",
  },
});