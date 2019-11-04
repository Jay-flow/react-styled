import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme"

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Form />
            </Container>
        </ThemeProvider>
    );
}


const Card = styled.div`
    background-color: red;
`;

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: pink;
    ${Card} {
      background-color: blue;
    }
`;

const Button = styled.button`
    border-radius: 30px;
    padding: 25px 15px;
    background-color: ${props => props.theme.successColor}
`;

const Form = () => (
    <Card>
        <Button>Hello</Button>
    </Card>
);
export default App;
