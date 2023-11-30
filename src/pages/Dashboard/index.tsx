import { Container, Title } from "./styles.ts";

import { Header } from "../../components/Header";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Title>Bem vindo</Title>
      </Container>
    </>
  )
}
