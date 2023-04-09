import { StatusBar } from "expo-status-bar";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { Wrapper } from "./src/infrastructure/components/wrappper/wrapper";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { Text } from "./src/infrastructure/components/typography/Text";
import { SafeArea } from "./src/infrastructure/components/utility/safe-area.component";
import { MainTabNavigater } from "./src/infrastructure/navigation/mainTabNavigation/MainTabNavigater";
import StoreDataContextProvider from "./src/services/storeData/StoreDataContext";
import FavouritesContextProvider from "./src/services/FavouritesContext/FavouritesContext";
import CartsContextProvider from "./src/services/CartContext/CartContext";


export default function App() {
  
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CartsContextProvider>
        <FavouritesContextProvider>
          <StoreDataContextProvider>
            <Wrapper>
              <SafeArea>
             <MainTabNavigater />
              </SafeArea>
            </Wrapper>
            <StatusBar style="light" />
          </StoreDataContextProvider>
        </FavouritesContextProvider>
      </CartsContextProvider>
    </ThemeProvider>
  );
}
