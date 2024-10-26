import React from 'react'
import { Button } from 'react-native-paper';

function Main() {
  const handlePress = () => {
    console.log('ボタンが押されました！');
  };

  return   (
    <>
      <h1>Hello World!</h1>
      <Button
        icon="camera"
        onPress={handlePress}
        mode='contained'
      >
        Press me
      </Button>
    </>
  )

}

export default Main