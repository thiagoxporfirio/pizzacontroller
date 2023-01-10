import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    a{
        text-decoration:none;
        color: #cccc;
    }

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
            transition: all 0.1s;
        }

        button:hover{
            font-weight: 800px;
            background-color: grey;
            transition: all 0.1s;
        }
    }

    .content-Form{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 100px;

        h1{
            font-size: 22px;
            margin-bottom: 20px;
            text-align: center;
            margin-top: 100px;
        }
        #boxForm{
                box-shadow: 1px 3px 10px 1px rgb(0 0 0 / 33%);
        }
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
                text-align: center;
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