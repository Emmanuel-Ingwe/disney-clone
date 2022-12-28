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
;`;

const Content = styled.div`

`;

export default Login;

