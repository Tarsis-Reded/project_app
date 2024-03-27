import { NavigationProp } from '@react-navigation/native';

export type ParamNav = {
    HouseRooms: undefined;
    Config: undefined;
    Login: undefined;
    AddItem: undefined;
    Profile: { userId: string };
    Settings: { theme: 'light' | 'dark' };
};

export type NavigationType = NavigationProp<ParamNav>;
