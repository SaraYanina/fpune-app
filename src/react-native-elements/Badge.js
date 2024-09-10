import { Badge } from '@rneui/themed';
import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const BadgeComponent = () => {

    return (
        <ScrollView>
            <Text style={styles.subHeader}>Standard Badge</Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 20,
                    marginBottom: 40,
                }}
            >
                <Badge value="3" status="success" />
                <Badge value="99+" status="error" />
                <Badge value="500" status="primary" />
                <Badge value="10" status="warning" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    subHeader: {
      backgroundColor: "#2089dc",
      color: "white",
      textAlign: "center",
      paddingVertical: 5,
      marginBottom: 10,
    },
});

export default BadgeComponent;
