import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  searchGroup: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: "#333",
  },
  searchControl: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  searchButton: {
    backgroundColor: "#34967C",
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  filterContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#34967C",
    borderRadius: 25,
  },
  showMoreButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
});

export { styles };
