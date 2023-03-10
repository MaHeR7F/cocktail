import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableWithoutFeedback, ActivityIndicator } from "react-native";
import { useState } from "react";
import axios from "axios";

function Cocktails({ navigation }) {
    const [cocktails, setCocktails] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://www.thecocktaildb.com/api/json/v1/1/random.php"
            );
            return response.data.drinks;
        } catch (error) {
            console.log(error);
        }
    };

    const fetchAllData = async () => {
        const cocktailsRandom = [];
        for (let i = 0; i < 10; i++) {
            const oneCocktailRandom = await fetchData();
            cocktailsRandom.push(oneCocktailRandom);
        }
        setCocktails([...cocktailsRandom]);
    };


    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text>Cocktails</Text>
            </View>

            <View style={styles.list}>
                    <ActivityIndicator/>
                    <FlatList
                        data={ cocktails }
                        keyExtractor={cocktails.idDrink}
                        renderItem={(cocktail) => (
                            <TouchableWithoutFeedback
                                onPress={() => {
                                    navigation.navigate("Detail", {
                                        cocktail: { ...cocktail.item[0],}
                                    });
                                }}
                            >
                                <View style={styles.card}>
                                    <View style={styles.itemImage}>
                                        <Image source={{ uri: cocktail.item[0].strDrinkThumb }} resizeMode={"cover"}/>
                                        <View>
                                            <Text style={styles.textCateg}>{cocktail.item[0].strCategory}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.itemTextContainer}>
                                        <Text key={ cocktail.item[0].idDrink } style={ styles.cardText }>{ cocktail.item[0].strDrink }</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    />
                )}
            </View>
        </View>
    );
    export default Cocktails;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        title: {
            alignItems: "center",
            justifyContent: "center",
        },
        list: {
            backgroundColor: "#FFFFFF",
            padding: 10,
            alignItems: "center",
        },
        item: {
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
            width: 200,
        },
        itemImage: {
            flex: 0.5,
            position: "relative",
        },
        itemTextContainer: {
            paddingVertical: 10,
        },
        itemText: {
            fontWeight: "bold",
            fontSize: 17,
        },
        textCateg: {
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            paddingTop: 5,
            fontStyle: "Uppercase",
            fontWeight: "bold",
        },
    });

}
export default Cocktails;
