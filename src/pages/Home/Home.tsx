
import { useCoinsGeek, getCoinById } from "../../hooks";
import { Navbar } from "../../components/Navbar/Navbar";
import { Text } from "../../components/Text/Text";
import { Container } from "../../components/Container/Container";
import { Carousel } from "../../components/Carousel/Carousel";
import { Table } from "../../components/Table";
import styled from "styled-components";

export const Home = () => {
  const { coins } = useCoinsGeek();

  const Section = styled.div`
    margin: 45px 80px 0px 80px;
  `;
  return (
    <Container width="100%" height="100%" display="flex">
      <Navbar />
      <Section>
        <Text variant="title_black_font">
          
          Preço das criptomoedas por valor de mercado
        </Text>
        <Carousel cards={coins} />
        <Table data={coins} />
      </Section>
    </Container>
  );
};
