import styled from 'styled-components';

export const LayoutWrapper = styled.section`
  max-width: 375px;
  margin: 0 auto;
  margin-top: 50px;

  @media (min-width: 768px) {
    max-width: 1024px;
    margin: 0 auto;
  }

  @media (min-width: 1280px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;
