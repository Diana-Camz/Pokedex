import { StyleSheet, View } from 'react-native'
import React from 'react'
import PokeballBg from '../../components/ui/PokeballBg'
import { FlatList } from 'react-native-gesture-handler'
import { useQuery } from '@tanstack/react-query'
import { getPokemons } from '../../../actions/pokemons'
import { Text } from 'react-native-paper'
import { globalTheme } from '../../../config/theme/global-theme'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import PokemonCard from '../pokemon/PokemonCard'

const HomeScreen = () => {

  const {top} = useSafeAreaInsets();

  const {isLoading, data: pokemons=[]} = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(0, 5),
    staleTime: 1000 * 60 * 60,
  })



  return (

    <View style={globalTheme.globalMargin}>
      <PokeballBg style={styles.imgPosition}/>
      <FlatList
        data={pokemons}
        style={{marginTop: top + 20, borderWidth: 1,}}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        ListHeaderComponent={()=>(
          <Text variant='displayMedium' style={styles.title}>Pokedex</Text>
        )}
        renderItem={({item}) => 
         <PokemonCard pokemon={item}/>
        }
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  imgPosition: {
    position: 'absolute',
    top: -100,
    right: -100,
  },
  title: {
    marginBottom: 25,
  }
})