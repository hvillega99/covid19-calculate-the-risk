import React from "react";
import { View , Image, StyleSheet, Dimensions, ScrollView} from 'react-native';
import imagen from '../../assets/img/precauciones.jpg'
import Title from "../title/title";
import Card from "./Card";

const datos = [
    {
        key:1,
        titulo: 'Usa Mascarilla',
        descripcion: 'en lugares públicos y\nespacios cerrados',
        imagen: 'https://ik.imagekit.io/smdxc0e2g3/userscontent2-endpoint/images/7255c39c-be0c-47b2-b265-bac8bd9242de/7da0bad7d2ed6413e8d55175f3a87c07.png?tr=w-280,rt-auto'
    },
    {
        key:2,
        titulo: 'Lava tus manos',
        descripcion: 'con agua y jabón o\nusa desinfectante',
        imagen: 'https://images.vexels.com/media/users/3/193288/isolated/preview/b2a7f2fa70e9452b2f4ae832c1b651a2-covid-19-icono-de-lavarse-las-manos.png'
    },
    {
        key:3,
        titulo: 'Cúbrete',
        decripcion: 'Al toser o estornudar',
        imagen: 'https://www.grupolimcasa.es/assets/images/imagenesprotocolo3-700x415.png'
    },
    {
        key:4,
        titulo: 'distanciamiento Fisico',
        descripcion: 'de seguridad de 2 metros',
        imagen: 'https://www.vidortec.com.ec/wp-content/uploads/2020/11/Distancia-social.png'
    },
    {
        key:5,
        titulo: 'Vacúnate',
        descripcion: 'las dosis completas',
        imagen: 'data:image/png;base64,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'
    }
]

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Body = ({navigation}) => {

    return (
        <View style={styles.body}>
            
            <ScrollView>
            <View style={styles.imageContainer}>
                <Title title='Precauciones'/>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={imagen}
                    />
                </View> 
            </View>
            <View style={styles.card}>
                {datos.map( e => <Card Key={e.key} datos={e}/>)}
            </View>
            </ScrollView>
        </View>
    );

}


const styles = StyleSheet.create({
    body:{
        width: windowWidth,
        height: windowHeight
    },
    image: {
        width: windowWidth,
        height: 270,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    imageContainer:{
        backgroundColor: '#29AEF2',
    },
    card:{
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: 'auto',
        marginRight: "auto",
        marginTop: 30,
        width: windowWidth/1.05,
    }
});

export default Body;