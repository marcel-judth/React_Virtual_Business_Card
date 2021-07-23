import Details from "./components/details/Details";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Details />
    </div>
  );
}

const AppWrapper = styled.div`
  padding: 0;
`;

export default App;
