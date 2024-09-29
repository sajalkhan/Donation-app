import { Animated } from 'react-native';

export const animations = {
  bounce: (animatedValue: Animated.Value) => {
    Animated.sequence([
      Animated.spring(animatedValue, { toValue: 0.9, useNativeDriver: true }),
      Animated.spring(animatedValue, { toValue: 1.1, useNativeDriver: true }),
      Animated.spring(animatedValue, { toValue: 1, useNativeDriver: true }),
    ]).start();
  },
  fade: (animatedValue: Animated.Value) => {
    Animated.timing(animatedValue, {
      toValue: 0.5,
      duration: 150,
      useNativeDriver: true,
    }).start();
  },
  wiggle: (animatedValue: Animated.Value) => {
    animatedValue.setValue(0);
    Animated.sequence([
      Animated.timing(animatedValue, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(animatedValue, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(animatedValue, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(animatedValue, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  },
  rotate: (animatedValue: Animated.Value) => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000, // Duration for a complete rotation
      useNativeDriver: true,
    }).start();
  },
  pulse: (animatedValue: Animated.Value) => {
    animatedValue.setValue(1);
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1.1,
        duration: 300, // Duration for scaling up
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300, // Duration for scaling down
        useNativeDriver: true,
      }),
    ]).start(); // No repeat
  },
  scale: (animatedValue: Animated.Value) => {
    Animated.spring(animatedValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  },
  swing: (animatedValue: Animated.Value) => {
    animatedValue.setValue(1); // Start from original size
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1.2, // Swing out
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1, // Back to original size
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  },
  flash: (animatedValue: Animated.Value) => {
    animatedValue.setValue(1);
    Animated.sequence([
      Animated.timing(animatedValue, { toValue: 0, duration: 100, useNativeDriver: true }),
      Animated.timing(animatedValue, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start(); // Only one cycle
  },
  expand: (animatedValue: Animated.Value) => {
    animatedValue.setValue(0); // Reset to start from 0
    Animated.timing(animatedValue, {
      toValue: 1, // Expand to full size
      duration: 300, // Duration of the expansion
      useNativeDriver: false, // Disable native driver for size changes
    }).start();
  },
  collapse: (animatedValue: Animated.Value) => {
    animatedValue.setValue(1); // Start from full size
    Animated.timing(animatedValue, {
      toValue: 0, // Collapse to 0
      duration: 500, // Increase duration for slower collapse
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animatedValue, {
        toValue: 1, // Return to original size
        duration: 500, // Increase duration for slower return
        useNativeDriver: true,
      }).start();
    });
  },
  handlePressOut: (animationType: string, animatedValue: Animated.Value) => {
    if (animationType === 'fade') {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    } else if (animationType === 'scale') {
      Animated.spring(animatedValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  },
};

export const getAnimatedStyle = (animationType: string, animatedValue: Animated.Value) => {
  switch (animationType) {
    case 'bounce':
    case 'scale':
    case 'pulse':
      return { transform: [{ scale: animatedValue }] };
    case 'swing':
      return { transform: [{ scale: animatedValue }] };
    case 'wiggle':
      const wiggleTransform = animatedValue.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [-10, 0, 10],
      });
      return { transform: [{ translateX: wiggleTransform }] };
    case 'rotate':
      const rotateTransform = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
      });
      return { transform: [{ rotate: rotateTransform }] };
    case 'expand':
      return {
        height: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 55], // Adjust the output range to match the height of your button
        }),
      };
    case 'collapse':
      return {
        transform: [{ scale: animatedValue }],
      };
    default:
      return { opacity: animatedValue }; // Fade
  }
};
