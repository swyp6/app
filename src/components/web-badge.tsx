import Ionicons from "@expo/vector-icons/Ionicons";
import { version } from "expo/package.json";
import { StyleSheet } from "react-native";

import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export function WebBadge() {
  const theme = useTheme();

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.badge}>
        <Ionicons name="globe-outline" size={14} color={theme.textSecondary} />
        <ThemedText type="code" themeColor="textSecondary">
          swyp6-team8-app
        </ThemedText>
      </ThemedView>
      <ThemedText
        type="code"
        themeColor="textSecondary"
        style={styles.versionText}
      >
        expo v{version}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.five,
    alignItems: "center",
    gap: Spacing.two,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.one,
  },
  versionText: {
    textAlign: "center",
  },
});
