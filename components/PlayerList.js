import * as React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { useAsync } from '../hooks/useAsync';
import { getPlayers } from '../services/players'
import { PlayerProvider } from '../contexts/PlayerContext';

// import { useRoute } from '@react-navigation/native';

function PlayerList() {
  const { loading, error, value: players } = useAsync(getPlayers)

  if (loading) return <Text>Loading</Text>
  if (error) return <Text>{error}</Text>

  return players.map(player => {
      return (
        <View>
          <Text>{route.params.id}</Text>
        <FlatList key={player.id}
          renderItem={({player}) => <Text>
            {player.name} 
          </Text>
          }
        />
         <Button
          title={player.name}
          onPress={() => {
            navigation.navigate('Player', {
              // playerId: player.id,
              params: { player: player.id }
            });
          }}
        />
        </View>
      )
    })
}

export default PlayerProvider(PlayerList)