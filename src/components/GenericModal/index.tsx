import React, { useCallback, FC, ReactNode } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { Container, Icon, Text } from 'native-base';
import { StackActions, useNavigation } from '@react-navigation/native';
import GenericHeader from '@components/GenericHeader';
import styles from './styles';

interface IModalPage {
  children: ReactNode;
  pageTitle: string;
}

const ModalPage: FC<IModalPage> = ({ children, pageTitle }) => {
  const navigation = useNavigation();
  const popAction = useCallback(() => StackActions.pop(), []);

  const closeModal = useCallback(() => {
    navigation.dispatch(popAction);
  }, [navigation, popAction]);

  return (
    <Container style={styles.container}>
      <GenericHeader
        BodyHeader={<Text style={styles.pageTitle}>{pageTitle}</Text>}
        RightAction={
          <TouchableOpacity onPress={() => closeModal()}>
            <Icon type="MaterialCommunityIcons" name="close" style={styles.headerIconContent} />
          </TouchableOpacity>
        }
      />
      <ScrollView contentContainerStyle={styles.content}>{children}</ScrollView>
    </Container>
  );
};

export default ModalPage;
