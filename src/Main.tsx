import React from 'react'
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

function Main() {
  const handlePress = () => {
    console.log('ボタンが押されました！');
  };

  return   (
    <>
      <View style={{ flex: 1, padding: 20 }}>
        <Text variant="headlineLarge">Hello World!!</Text>
        <Button
          icon="camera"
          onPress={handlePress}
          mode='contained'
        >
          Press me
        </Button>
      </View>
    </>
  )

}

export default Main