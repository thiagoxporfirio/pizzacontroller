import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 52px;
    top: 238px;

    .content{
        width: 100%;
        height: 100%;
        display: flex;
        gap: 20px;
        align-items: flex-start;
        justify-content: center;

        .card{
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 16px;
            gap: 24px;
            width: 384px;
            /* height: 100%; */
            left: 0px;
            top: 0px;
            border: 2px solid rgba(204, 204, 204, 0.4);
            /* box-shadow: 1px 3px 15px 1px rgb(0 0 0 / 33%); */
            border-radius: 16px;

            h1{
                font-size: 22px;
                margin-bottom: 20px;
            }

            h2{
                font-size: 18px;
                margin-bottom: 5px;
            }
            .content-card{
                width: 350px;
                height: 250px;
                border-radius: 16px;
                border: 2px solid rgba(204, 204, 204, 0.4);
                padding: 10px;
                justify-content: center;
                align-items: flex-start;

                .btn{
                    display: flex;
                    align-items: center;
                    justify-content: center;


                    .btnCadastraProducts{
                        margin-top: 50px;
                        text-decoration: none;
                        border:none;
                        font-weight: bolder;
                        box-shadow: 1px 3px 15px 1px rgb(0 0 0 / 33%);
                        border-radius: 50px;
                        transition: all 0.3s;
                        padding: 2px;
                        border: white;
                        outline: none;
                    }

                    .btnCadastraProducts:hover{
                        background-color: #CCC;
                    }
                }
                
            }
                
        }
    }

    




`