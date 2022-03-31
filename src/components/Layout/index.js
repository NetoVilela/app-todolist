import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function Layout(props){

    return(

        <View style={styles.layout}>
            <View style={styles.header}>
                <Text style={styles.headerText}> {props.title} </Text>
            </View>

            <View style={styles.body}>
                {props.children}
            </View>


            <View style={styles.footer}>
                <Text style={styles.colorWhite}> FOOTER DO LAYOUT </Text>
            </View>
            
        </View>

    )

}

const styles = StyleSheet.create({

    layout:{
        flex: 1,
        borderColor: 'red',
        borderWidth: 2,
        width: '100%',
    },
    colorWhite:{
        color: "#FFF",
    },

    header: {
        borderColor: "#293",
        borderWidth: 2,
        // marginTop: 40,
        flex: 1,    
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText:{
        fontSize: 20,
        color: "#FFF",
    },

    body:{
        flex: 5,
        borderColor: "#993",
        borderWidth: 2,
        width: '100%',
        color: "#FFF"
    },

    footer:{
        flex: 2,
        borderColor: "blue",
        borderWidth: 2,
    }

})