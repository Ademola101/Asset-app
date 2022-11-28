import { Platform, ToastAndroid } from 'react-native';

export default function showToast(message) {

  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    alert(message);
  }
}
