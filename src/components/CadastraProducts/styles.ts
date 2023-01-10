import styled from "styled-components";

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4.5px);
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalBody = styled.div`
    background-color: #fff;
    width: 480px ;
    border-radius: 8px;
    padding: 32px;
    
    .closemodal{
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: end;
        margin-bottom: 10px;

        span{
            font-weight: bolder;
            color: red;
            cursor: pointer;
        }
    }

    .contente-Form{
        border: 2px solid rgba(204, 204, 204, 0.4);
        border-radius: 8px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2{
            margin-bottom: 20px;
            text-align: center;
        }

        .input-group{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-top: 10px;

            input{
                width: 100%;
                padding: 12px;
                background: #FFFFFF;
                border: 1px solid rgba(204, 204, 204, 0.4);
                border-radius: 8px;
            }
        }

        .datecontainer{
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 15px;
            align-items: center;
            gap: 15px;
        }

        .input-group-btn{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            button{
                width: 100%;
                padding: 8px;
                margin-top: 20px;
                font-weight: bolder;
                background-color: red;
                border-radius: 8px;
                border: 1px solid rgba(204, 204, 204, 0.4);
            }
        }
    }

`    