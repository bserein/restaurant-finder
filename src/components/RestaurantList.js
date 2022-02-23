import React, { useEffect, useState } from "react"; // in react native you do have to import react
import { Text } from 'react-native';

function RestaurantList(){
    const [restaurants, setRestaurant] = useState()
    useEffect(() => {
        //fetch data from the api
        fetch('https://bocacode-intranet-api.web.app/restaurants')
            .then(response => response.json())
            .then(data => {
                setRestaurants = data
            })
            .catch(err => alert(err))
    }, [])
    return <Text>Restaurants</Text>
}



export default RestaurantList;

