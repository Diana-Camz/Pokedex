import { Image, ImageBackground, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Pokemon } from '../../../domain/entities/pokemon'
import { Card, Text } from 'react-native-paper'
import { FadeInImage } from '../../components/ui/FadeInImage'
import { RootStackParams } from '../../navigator/StackNavigator'
import { NavigationProp, useNavigation } from '@react-navigation/native'

interface Props {
    pokemon: Pokemon,
}

const PokemonCard = ({pokemon}:Props) => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View>
      <Pressable
      onPress={() => navigation.navigate('PokemonScreen', {pokemonId: pokemon.id})}
      >
        <Card style={[styles.cardContainer, {backgroundColor: pokemon.color}]}>
          {/* POKEMON BASIC INFORMATION */}
          <Text variant='bodyLarge' lineBreakMode='middle' style={styles.name}>{pokemon.name}
              {`\n#` + pokemon.id}
          </Text>
          <View style={styles.pokeballContainer}>
              <Image
                  source={require('../../../assets/pokeball-light.png')}
                  style={styles.pokeball}
              />
          </View>
          {/* POKEMON IMAGE */}
          <FadeInImage
            uri={pokemon.avatar}
              style={styles.pokemonImage}
          />
          {/* POKEMON TYPES*/}
          <Text style={styles.types}>{pokemon.types[0]}</Text>
        </Card>
      </Pressable>
    </View>
  )
}

export default PokemonCard

const styles = StyleSheet.create({

    cardContainer: {
      marginHorizontal: 10,
      backgroundColor: 'grey',
      height: 155,
      width: 175,
      flex: 0.5,
      marginBottom: 25,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    name: {
      color: 'white',
      top: 10,
      left: 10,
    },

    types: {
      color: 'white',
      top: 10,
      left: 10,
      marginTop: 55,
    },
    pokeball: {
      width: 100,
      height: 100,
      right: -25,
      top: -25,
      opacity: 0.4,
    },
    pokemonImage: {
      width: 140,
      height: 140,
      position: 'absolute',
      right: -15,
      top: -20,
    },
  
    pokeballContainer: {
      alignItems: 'flex-end',
      width: '100%',
      position: 'absolute',
  
      overflow: 'hidden',
      opacity: 0.5,
    },
  });