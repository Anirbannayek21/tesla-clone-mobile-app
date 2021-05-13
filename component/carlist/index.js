import React from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import Caritem from '../carItems'
import cars from './cars'
import styles from './style'

const CarList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Caritem car={item} />}
                snapToAlignment={'end'}
                decelerationRate={"normal"}
                snapToInterval={Dimensions.get('window').height + 50}
            />
        </View>
    )
}

export default CarList
