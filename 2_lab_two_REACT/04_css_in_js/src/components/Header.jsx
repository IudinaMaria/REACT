import styled from 'styled-components';

const HeaderStyled = styled.header`
  background-color:rgb(186, 198, 119);
  color: white;
  padding: 10px;
  text-align: center;
`;

function Header() {
  return (
    <HeaderStyled>
      <h1>My React App</h1>
    </HeaderStyled>
  );
}

export default Header;
