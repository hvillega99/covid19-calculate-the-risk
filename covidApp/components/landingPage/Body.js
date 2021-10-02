import React from 'react';
import { View, Text , StyleSheet , Image} from 'react-native';
import { alignItems } from 'styled-system';
import { style } from 'styled-system';


const Body = () => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>FizeNet</Text>
            </View>
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        height: '100',
        backgroundColor: '#29AEF2',
    },
    text:{
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default Body;

