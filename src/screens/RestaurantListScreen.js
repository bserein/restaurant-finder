import React, { useEffect, useState, useCallback } from "react"; // in react native you do have to import react
import { Text, View, ScrollView, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import RestaurantCard from "../components/RestaurantCard";
import { useNavigation} from '@react-navigation/native'
import styles from "../../styles";
import { withSafeAreaInsets } from 'react-native-safe-area-context'


function RestaurantListScreen(){
    const [restaurants, setRestaurants] = useState()
    const [refreshing, setRefreshing] = useState(false)

    const wait = timeout => {
        return new Promise(resolve => setTimeout(resolve, timeout))
      }

      useEffect(() => {
        getRestaurantsFromApi()
      }, [restaurants])

      const getRestaurantsFromApi = () => {
        fetch('https://bocacode-intranet-api.web.app/restaurants')
          .then(response => response.json())
          .then(data => (setRestaurants(data), setRefreshing(false)))
          .catch(alert)
      }

    // useEffect(() => {
    //     //fetch data from the api
    //     fetch('https://bocacode-intranet-api.web.app/restaurants')
    //         .then(response => response.json())
    //         .then(data => setRestaurants(data))
    //         .catch(err => alert(err))
    // }, [])

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        getRestaurantsFromApi()
        wait(2000).then(() => setRefreshing(false))
      }, [])

    const navigation = useNavigation();
    const goToNewRestaurant = () => {
        navigation.navigate("Add New Restaurant")
    }

    return (
        
    <View>
         <TouchableOpacity onPress={goToNewRestaurant} style={styles.newRestaurantButton}>
                <Text style={styles.newRestaurantText}>Add New Restaurant</Text>
            </TouchableOpacity>
    {!restaurants
        ?  (
        <ActivityIndicator /> 
        // <Text>Loading...</Text> // we can take this out
       ) : (<ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            {restaurants.map(restaurant => {
            return <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
        })}
        </ScrollView>
        )}
    </View>
    )
}
    


export default RestaurantListScreen;

