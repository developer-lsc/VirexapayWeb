import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.muted};
`;

const Content = styled.div`
  text-align: center;
`;

const Code = styled.h1`
  margin-bottom: 16px;
  font-size: 56px;
`;

const Text = styled.p`
  margin-bottom: 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const HomeLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
`;

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Wrapper>
      <Content>
        <Code>404</Code>
        <Text>Oops! Page not found</Text>
        <HomeLink href="/">
          Return to Home
        </HomeLink>
      </Content>
    </Wrapper>
  );
};

export default NotFound;
