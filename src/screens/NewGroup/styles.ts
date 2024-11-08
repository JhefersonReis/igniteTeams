import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UsersThree } from "phosphor-react-native";
import { KeyboardAvoidingView, Platform } from "react-native";

export const KeyboardAvoiding = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
})`
  flex: 1;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
  size: 56,
}))`
  align-self: center;
`;
