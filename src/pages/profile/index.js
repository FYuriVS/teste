import { ScrollView, StyleSheet, Text, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StatusBarHeight = StatusBar.currentHeight;

export default function Profile() {
  const cardsData = [
    { id: 1, title: "Card 1", description: "Description 1" },
    { id: 2, title: "Card 2", description: "Description 2" },
    { id: 3, title: "Card 3", description: "Description 3" },
    { id: 4, title: "Card 4", description: "Description 4" },
    { id: 5, title: "Card 5", description: "Description 5" },
    { id: 6, title: "Card 6", description: "Description 6" },
    { id: 7, title: "Card 7", description: "Description 7" },
    { id: 8, title: "Card 8", description: "Description 8" },
    { id: 9, title: "Card 9", description: "Description 9" },
    { id: 10, title: "Card 10", description: "Description 10" },
    { id: 11, title: "Card 11", description: "Description 11" },
    { id: 12, title: "Card 12", description: "Description 12" },
    { id: 13, title: "Card 13", description: "Description 13" },
    { id: 14, title: "Card 14", description: "Description 14" },
  ];

  const rows = [];
  for (let i = 0; i < cardsData.length; i += 2) {
    const row = cardsData.slice(i, i + 2);
    rows.push(row);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          {rows.map((row, rowIndex) => (
            <View style={styles.rowSection} key={rowIndex}>
              {row.map((card) => (
                <View style={[styles.card, styles.shadowProp]} key={card.id}>
                  <Text style={styles.cardTitle}>{card.title}</Text>
                  <Text style={styles.cardDescription}>{card.description}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 50,
  },
  rowSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  card: {
    width: "48%",
    height: 150,

    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 10,
    // Sombras para a plataforma Android
    elevation: 4,
    // Sombras para a plataforma iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { largura: -2, altura: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
