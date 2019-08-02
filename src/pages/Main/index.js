import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

import { Container,Content,Card,CardHeader,CardContent,Title,CardFooter,Description,Annotation } from './styles';


export default function Main() {

    return ( 
      <Container> 
       <Header/>
      <Content>      
        <Card>
        <CardHeader>
        <Icon name="attach-money" size={28} color="#666"/>
        <Icon name="visibility-off" size={28} color="#666"/>
        </CardHeader>

        <CardContent>
        <Title>Saldo Disponível</Title>
        <Description>R$ 7.000,00</Description>
        </CardContent>

        <CardFooter>
         <Annotation>
              Transferência realizada com sucesso.
         </Annotation>
        </CardFooter>
        </Card>
      </Content>
      <Tabs/>
      </Container>
    );
}