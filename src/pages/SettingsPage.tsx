import styled from "styled-components";

const HeadingBlock = styled.div`
  margin-bottom: 32px;
`;

const Heading = styled.h1`
  font-size: 30px;
`;

const Subheading = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.card};
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: 32px;
  text-align: center;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const SettingsPage = () => {
  return (
    <div>
      <HeadingBlock>
        <Heading>Configurações</Heading>
        <Subheading>Gerencie sua conta e preferências</Subheading>
      </HeadingBlock>
      <Card>
        <Text>Em breve. Configure seu perfil, assinatura e integrações aqui.</Text>
      </Card>
    </div>
  );
};

export default SettingsPage;
