const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

type ThemeColors = {
  [key: string]: string // Define loose object
}
interface Colors {
  light: ThemeColors
  dark: ThemeColors
}

const colors: Colors = {
  light: {
    text: '#000',
    backgroundColor: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    borderColor: "#dadada",
    primary: "#54e58f",
    secondary: "#6bd7de",
  },
  dark: {
    text: '#fff',
    backgroundColor: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    borderColor: "#555555",
    primary: "#54e58f",
    secondary: "#6bd7de",
  },
};
export default colors