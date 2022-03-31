import React from 'react';
import {StyleSheet,View, Text} from 'react-native';


export default function Form(){
    
    return(
        <View style={styles.boxForm}>
            <Text>Texto aqui </Text>
        </View>
    )

}

const styles = StyleSheet.create({

    boxForm: {
        backgroundColor: '#ECF0F3',
        width: '95%',
        height: '70%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    }

})

