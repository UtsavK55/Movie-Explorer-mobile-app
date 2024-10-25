import { ActivityIndicator, View } from "react-native";

import { theme } from "@theme/themes";

import { styles } from "./styles";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};

export default Loader;
