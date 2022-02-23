import { StyleSheet } from "react-native";

export default StyleSheet.create({
    card: {
        width: "100%",
        backgroundColor: 'aqua',
        marginBottom: 16,
    },
    cardImage: {
        width: "100%",
        height: 210,
    },
    cardTitle: {
        fontSize: 28,
        fontWeight: '600',
        padding: 4,
    },
    newRestaurantText: {
        color: "white",
        textAlign: "center",
        fontSize: 20,

    },
    newRestaurantButton: {
        backgroundColor: "green",
        padding: 8,
        marginHorizontal: 8,
        marginVertical: 10,
        fontWeight: "500",
        borderRadius: 8,
    }
})