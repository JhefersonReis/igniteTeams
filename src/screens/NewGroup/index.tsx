import { Container, Content, Icon, KeyboardAvoiding } from "./styles";

import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { appError } from "@utils/appError";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo time", "Nome do time não pode ser vazio");
      }

      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof appError) {
        Alert.alert("Novo time", error.message);
      } else {
        Alert.alert("Novo time", "Erro ao criar o time");
        console.log(error);
      }
    }
  }

  return (
    <KeyboardAvoiding>
      <Container>
        <Header showBackButton />

        <Content>
          <Icon />

          <Highlight
            title="Novo time"
            subtitle="Crie o time para adicionar as pessoas"
          />

          <Input placeholder="Nome do time" onChangeText={setGroup} />

          <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
        </Content>
      </Container>
    </KeyboardAvoiding>
  );
}
