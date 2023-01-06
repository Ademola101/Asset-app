import {  useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const useFadeAnim = (duration = 1000) => {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(
      fadeAnim, {
        toValue: 1,
        duration
      }
    ).start();
  }, [fadeAnim]);

  return fadeAnim;
};

export default useFadeAnim;