import { TouchableOpacity, View } from "react-native";
import {
  Container,
  Circle,
  Image,
  Login_Button,
  Title_Login,
  Redirection,
  Redirection_Title,
  Button_Title,
} from "./styles.ts";

import { Header } from "../../components/Header";

export default function Dashboard() {
  return (
    <Container>
      <Header />
      <Circle>
        <Image source={require('../../../assets/cat-lying-on-books.png')} />
        <View style={{
          backgroundColor: "#fff",
          borderRadius: 4,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5
        }}>
          <Login_Button>
            <Title_Login>Login</Title_Login>
          </Login_Button>
        </View>
        <Redirection>
          <Redirection_Title>Não possui conta?</Redirection_Title>
          <TouchableOpacity activeOpacity={0.7}>
            <Button_Title>Clique aqui!</Button_Title>
          </TouchableOpacity>
        </Redirection>
      </Circle>
    </Container >
  )
}
