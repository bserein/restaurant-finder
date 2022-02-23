import React, {useContext} from "react";
import { Text, View } from 'react-native'
import { RestaurantContext } from "../../App";

export default function Details({restaurant}){
    const { selectedRestaurant} = useContext(RestaurantContext)
    return (
        <View>
            <Text>{selectedRestaurant.name}</Text>
        </View>
    )
}