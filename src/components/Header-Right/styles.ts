import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    .content-btn{
        width: 250px;
        background-color: red;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        
        button{
            gap: 5px;
            border: none;
            width: 180px;
            padding: 12px;
            border-radius: 6px;
            margin-top: 10px;
            font-weight: bolder;
            color: #cccc;
            font-size: 16px;
            margin-top: 4px;
        }

        button:hover{
            font-weight: 800px;
            background-color: grey;
            transition: all 0.3s;
        }
    }

    .content-Form{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;

        .contente-Form{
            justify-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
            border: 2px solid rgba(204, 204, 204, 0.4);
            border-radius: 16px;
            padding: 16px 16px 0px;
            width: 600px;
            height: 424px;

            h2{
                margin-bottom: 25px;
            }

            .input-group{
                input{
                    gap: 5px;
                    border: 1.5px solid rgba(204, 204, 204, 0.4);
                    width: 300px;
                    padding: 12px;
                    border-radius: 6px;
                    margin-top: 10px;
                    font-weight: bolder;
                    color: #cccc;
                    opacity: 0.8;
                    font-size: 16px;
                    margin-top: 4px;
                }

            }

            .input-group-btn{
                button{
                    padding: 12px;
                    width: 300px;
                    border-radius: 6px;
                    margin-top: 15px;
                    font-size: 16px;
                    font-weight: bolder;
                    background-color: red;
                    border: 1.5px solid rgba(204, 204, 204, 0.4);

                }

                button:hover{
                    transition: all 0.2s;
                    background-color: #7f1e2b;
                }
            }
        }
    }
`