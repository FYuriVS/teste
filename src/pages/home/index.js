import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from "react-native";

const StatusBarHeight = StatusBar.currentHeight;

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>
        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>
        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>
        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>
        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>
        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>
        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>
        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBarHeight : 25,
    paddingBottom: 50,
  },
  content: {
    alignSelf: "center",
    flex: 1,
    width: "95%",
    height: 120,
    marginBottom: 20,

    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
});
