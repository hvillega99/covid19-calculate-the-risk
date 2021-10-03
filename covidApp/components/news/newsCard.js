import React, {useCallback} from "react";
import { View, 
        Text, 
        Image, 
        StyleSheet,
        Dimensions, 
        Linking, 
        TouchableOpacity
        } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NewsCard = ({title, url, src, img, date}) => {
    const handlePress = useCallback(async () => {
        await Linking.openURL(url);
    }, [url]);

    return (
        <View style={styles.card}>
            <View style={styles.textContent}>
                <TouchableOpacity onPress={handlePress}>
                    <Text style={[{fontSize: 20, marginBottom: 12}, styles.text]}>{title}</Text>
                    <Text style={[{fontSize: 14}, styles.text]}>{src} - {date}</Text>
                </TouchableOpacity>
            </View>
            <Image
                style={styles.image}
                source={{uri: img}}
            />
        </View>
    );
}

export default NewsCard;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: "row",
        minWidth: windowWidth/1.05,
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 0.5,
        marginBottom: 10,
        marginTop: 10,
        borderColor: '#9b9b9b',
        padding: 5
    },

    image: {
        height: windowHeight/8,
        width: windowWidth/3,
        borderRadius: 15,
        alignItems:"center",
        justifyContent:"center"
    },
    textContent:{
        width: (windowWidth/1.16) - ((windowWidth/1.16)/3.61),
    },
    text: {
        flex:1, 
        flexWrap:"wrap",
    }
})