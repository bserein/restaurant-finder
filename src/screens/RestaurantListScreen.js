import React, { useEffect, useState } from "react"; // in react native you do have to import react
import { Text, View, ScrollView,  Button, TouchableOpacity } from 'react-native';
import RestaurantCard from "../components/RestaurantCard";
import { useNavigation} from '@react-navigation/native'
import styles from "../../styles";

function RestaurantListScreen(){
    const [restaurants, setRestaurants] = useState()
    useEffect(() => {
        //fetch data from the api
        fetch('https://bocacode-intranet-api.web.app/restaurants')
            .then(response => response.json())
            .then(data => setRestaurants(data))
            .catch(err => alert(err))
    }, [])


    const navigation = useNavigation();
    const AddNewHandle = () => {
        navigation.navigate("Add New Restaurant")
    }

    return (
        
    <View>
         <TouchableOpacity onPress={AddNewHandle} style={styles.newRestaurantButton}>
                <Text style={styles.newRestaurantText}>Add New Restaurant</Text>
            </TouchableOpacity>
    {!restaurants
        ? <Text>Loading...</Text>
        : <ScrollView>
            {restaurants.map(restaurant => {
            return <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
        })}</ScrollView>
    }
    </View>
    )
}
    


export default RestaurantListScreen;

