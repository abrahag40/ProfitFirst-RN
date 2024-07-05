import { Stack } from 'expo-router'
import { Text, View } from 'react-native'

export default function NewAllocation() {
  return (
    <View>
      <Stack.Screen options={ { title: 'New Allocation' } } />
      <Text> textInComponent </Text>
    </View>
    )
}
