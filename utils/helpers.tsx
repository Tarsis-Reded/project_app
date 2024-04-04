import { useNavigation } from '@react-navigation/native';

const helper = (navigation, swipe) => {
    navigation.setOptions({ swipeEnabled: swipe });
};

export { helper };