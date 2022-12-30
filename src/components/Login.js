import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = (props) => {
    return <Container>
        <Content>Content</Content>
        <div>
            <h1>This is the home page</h1>
            <Link to="about">Click to view our about page</Link>
        </div>
    </Container>;

};

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Login;

