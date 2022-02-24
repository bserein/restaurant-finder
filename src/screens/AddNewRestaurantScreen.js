import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import styles from "../../styles";
import { useNavigation } from "@react-navigation/native";

export default function AddNewRestaurantScreen() {
  const navigation = useNavigation();

//   const [newRestaurant, setNewRestaurant] = useState(); // this would be the only additional line that you would create and you could delete the newRestaurant with all the info
  const [restaurantName, setRestaurantName] = useState();
  const [address, setAddress] = useState();
  const [photo, setPhoto] = useState();
  const [rating, setRating] = useState();
  const [btnDisabled, setBtnDisabled] = useState(true);

  const newRestaurant = {
    address: address,
    name: restaurantName, //you could get rid of this with the different way of doing it
    numRating: rating,
    photoUrl: photo,
  };

  useEffect(() => {
      if(newRestaurant.address && newRestaurant.name && newRestaurant.numRating !== undefined) {
          setBtnDisabled(false)
      }
  }, [newRestaurant])

  const sendNewRestaurantInfo = () => {

      fetch("https://bocacode-intranet-api.web.app/restaurants", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRestaurant),
        // body: JSON.stringify(restaurantName) // you would add this and delete the one above
      })
        .then(() => alert("New restaurant added"))
        .then(() => navigation.navigate("Home"))
        .catch((err) => console.log(err));
  };

  return (
    <View>
      <Text>Please Enter The Correct Information</Text>
      <Input
        placeholder="Name"
        spellCheck
        onChangeText={(userText) => setRestaurantName(userText)}
        // onChangeText={(userText) => setNewRestaurant({...newRestaurant, name: userText})} //instead of doing all the useStates you can do it this way and only use these lines
      />
      <Input 
      placeholder="Address" 
      onChangeText={(text) => setAddress(text)} 
      // onChangeText={(text) => setNewRestaurant({...newRestaurant, address: text})}
      />
      <Input
        placeholder="Rating"
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(text) => setRating(text)}
        // onChangeText={(text) => setNewRestaurant({...newRestaurant, rating: text})}
      />
      <Input
        placeholder="Photo"
        keyboardType="url"
        onChangeText={(text) => setPhoto(text)}
        // onChangeText={(text) => setNewRestaurant({...newRestaurant, photoUrl: text})}
      />
      <Button
        title="Add New Restaurant"
        style={styles.AddNewRestuarant}
        onPress={sendNewRestaurantInfo}
        disabled={btnDisabled}
      />
    </View>
  );
}
