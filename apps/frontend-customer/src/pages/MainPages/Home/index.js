import styled from 'styled-components';
const StyledHome = styled.div`
    color: pink;
`;
export function Home(props) {
    return (
        <StyledHome>
            <h1>Welcome to Home!</h1>
        </StyledHome>
    );
}
export default Home;
