import { View, Modal, ActivityIndicator, Text } from 'react-native';

export default function LoadingModal({ isVisible, message }) {

  return (

    <Modal
      animationType = 'fade'
      transparent = {true}
      visible = {isVisible}

    >

      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)' }}>


        <ActivityIndicator size = 'large' color = '#0366d6' />
        <Text style = {{ marginTop: 10, fontSize: 16 }}>{message}</Text>
      </View>

    </Modal>
  );

}