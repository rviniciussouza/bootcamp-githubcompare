import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
`;

export const Repository = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 3px;
    margin: 0 10px;

    header {
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 64px;
        }

        strong {
            font-size: 24px;
            margin-top: 10px;
        }

        small {
            font-size: 16px;
            color: #666;
        }
    }

    ul {
        list-style: none;

        li {
            font-weight: none;
            padding: 12px 20px;

            small {
                font-weight: normal;
                font-size: 12px;
                color: #999;
                font-style: italic;
            }

            &:nth-child(2n - 1) {
                background: #f5f5f5;
            }
        }
    }
`;
