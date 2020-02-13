import React from 'react';
import { Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface AvatarProps {
  source: ImageSourcePropType;
}

const avatarSize = 100;

const styles = StyleSheet.create({
  avatar: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
  },
});

const Avatar: React.FC<AvatarProps> = props => {
  return <Image {...props} style={styles.avatar} />;
};

export default Avatar;
