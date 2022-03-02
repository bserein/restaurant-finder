import React, {useContext} from "react";
import { Text, View, Image } from 'react-native'
import { RestaurantContext } from "../../App";
import styles from "../../styles";

export default function DetailsScreen(){
    const { selectedRestaurant} = useContext(RestaurantContext)
    return (
        <View>
            <Text style={styles.nameText}
                >{selectedRestaurant.name}</Text>
                <Image source={{ uri: selectedRestaurant.photoUrl }} style={styles.cardImage}  />
            <Text style={styles.addressText}>{selectedRestaurant.address}</Text> 
            <Text style={styles.ratingsText}>Avg {selectedRestaurant.rating.toFixed(1)}  ({selectedRestaurant.numRatings} ratings)</Text>
        </View>
    )
}