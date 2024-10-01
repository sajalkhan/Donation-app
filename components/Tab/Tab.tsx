import React, { useRef, useState } from 'react';
import { Pressable, Text, ViewStyle } from 'react-native';
import { horizontalScale } from '../../assets/styles/scaling';
import style from './style';

interface TabProps {
  title: string;
  tabId: number;
  isInactive?: boolean;
  onPress: (tabId: number) => void;
}

const Tab: React.FC<TabProps> = React.memo(({ title, tabId, isInactive = false, onPress }) => {
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef<Text>(null);
  const paddingHorizontal = 33;

  const tabStyle: ViewStyle = {
    width: horizontalScale(paddingHorizontal * 2 + textWidth),
  };

  const handleTextLayout = (event: any) => {
    setTextWidth(event.nativeEvent.lines[0].width);
  };

  return (
    <Pressable style={[style.tab, isInactive && style.inactiveTab, tabStyle]} onPress={() => onPress(tabId)}>
      <Text ref={textRef} onTextLayout={handleTextLayout} style={[style.title, isInactive && style.inactiveTitle]}>
        {title}
      </Text>
    </Pressable>
  );
});

export default Tab;
