import { Container, Content, Icon, KeyboardAvoiding } from "./styles";

import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate("players", { group });
  }

  return (
    <KeyboardAvoiding>
      <Container>
        <Header showBackButton />

        <Content>
          <Icon />

          <Highlight
            title="Nova turma"
            subtitle="crie a turma para adicionar as pessoas"
          />

          <Input placeholder="Nome da Turma" onChangeText={setGroup} />

          <Button
            title="Criar turma"
            style={{ marginTop: 20 }}
            onPress={handleNew}
          />
        </Content>
      </Container>
    </KeyboardAvoiding>
  );
}
