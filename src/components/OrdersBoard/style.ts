import styled from "styled-components";

export const Board = styled.div`
    padding: 16px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;


    header{
        padding: 8px;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: bolder;
    }
`;

export const OrdersContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 24px;


    .DataContainer{
        padding: 12px;
        background: #fff;
        border: 1px solid rgba(204, 204, 204, 0.4);
    
        border-radius: 16px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .titulo{
            margin-bottom: 12px;
            font-weight: 500;
        }
        
        small{
            font-size: 16px;
            
        }

        span{
            margin-top: 8px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        span:hover{
            font-size: 20px;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        }


        & + .DataContainer{
            margin-top: 24px;
        }
    }
`;