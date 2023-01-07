import styled from 'styled-components'

export const Container = styled.header`
    background-color: red;
    display: flex;
    justify-content: center;
    height: 198px;
    align-items: center;

    
`;

export const Content = styled.div`
    width:100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .page-details{
        h1{
            color: white;
            font-size: 32px;
        }

        h2{
            color: white;
            font-weight: 400px;
            font-size: 16px;
            opacity: 0.9;
            margin-top: 4px;
        }
    }
`;