import React from 'react';
import { View , StyleSheet , Image,  ScrollView ,Dimensions} from 'react-native';
import Title from '../title/title';
import imagen from '../../assets/img/covid-landing-page.jpg';
import Card from './card';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const datos = [
    {
        key: 1,
        titulo: 'Estadistica',
        descripcion: 'Conoce la cantidad de casos,\nrecuperados y muertes',
        imagen: 'https://thumbs.dreamstime.com/b/lightning-circle-as-vector-illustration-177435842.jpg',
    },
    {
        key:2,
        titulo: 'Noticias',
        descripcion: 'Conoce nuevas noticias sobre el\nCovid-19',
        imagen: 'https://andresgutierrez.com/wp-content/uploads/2020/11/iconos-preguntas-05.png',
    },
    {
        key:3,
        titulo: 'Precauiones',
        descripcion: 'Conoce las recomendacioces de los doctores\npara prevenir el contagio',
        imagen: 'https://us.123rf.com/450wm/alexwhite/alexwhite1503/alexwhite150304998/38144612-signo-de-exclamaci%C3%B3n-icono-plana-se%C3%B1al-de-advertencia.jpg?ver=6',
    },
]

const Body = ({navigation}) => {
    
    return (
        <View style={styles.body}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Title title='CovidApp'/>
                    
                    <View style={styles.imageContainer}>
                        <Image
                        style={styles.image}
                        source={imagen}
                        />
                    </View>   
                </View>
            
                <View style={styles.cards}>
                    {
                        datos.map( e => <Card key={e.key} datos={e} navigation={navigation}/>)
                    }
                </View>
            </ScrollView> 
        </View>
    );
}

const styles = StyleSheet.create({
    body:{
        width: windowWidth,
    },
    image: {
        width: windowWidth,
        height: 270,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    imageContainer:{
        backgroundColor: '#29AEF2',
    },
    cards:{
        flex:1,
        marginTop: 20,
        alignItems: 'center'

    }
});

export default Body;