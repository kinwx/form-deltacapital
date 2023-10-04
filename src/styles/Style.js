import styled from "styled-components";

export const NavBar = styled.nav`
    display: block;
    position: fixed;
    top: 0;

    width: 100vw;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, .25);
    background-color: #e9e9e9;
    z-index: 2;

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .8em 1.8em;

        & > h1 {
            pointer-events: none;
        }
        & > img {
            height: 2.8em;
        }
        & > a {
            text-decoration: none;
            color: black;
            font-weight: 600;
            transition: all .4s ease;
            font-size: calc(10px + 1vmin);
            display: flex;
            align-items: center;
            gap: .4em;

            &:hover {
                text-decoration: underline #002c53;
                color: #002c53;
            }
        }
    }
`

export const StyledForm = styled.form`
    display: grid;
    grid-auto-flow: row;
    gap: 1em;
    padding: 2em 0em;
    
    & > button {
        padding: 1em 5em;
        border: none;
        border-radius: .8em;

        display: flex;
        align-items: center;
        gap: .4em;

        background-color: #002c53;
        color: white;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, .5);

        justify-self: center;
        font-weight: 500;
        font-size: calc(10px + 1vmin);

        transition: all .4s ease;
        cursor: pointer;
        

        &:disabled{
            color: white;
            background-color: #1c232e;
        }
    }
    `
export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2em;

    padding: 2.5em 1em;

    & > * {
        width: 90%;
    };
`
export const BoxRadio = styled.div`
    display: flex;
    flex-direction: column;

    & > h2 > span {
        color: red;
    }
    & > span {
        color: gray;
        margin-bottom: .5em;
    }
`
export const ItemRadioForm = styled.div`
    & > div {
        display: grid;
        grid-template-columns: 1fr 19fr;
        align-items: baseline;
        gap: .3em;

        padding: .2em 0;

        font-weight: 500;
    }
    & > div > input:first-of-type {
        appearance: none;

        width: 1em;
        height: 1em;
        border-radius: 50%;
        border: 2px solid #00272d;

        background: transparent;

        transition: all .1s linear;
        &:checked {
            border: 5px solid #00272d;
        }
    }
    & > span {
        color: gray;
        margin-bottom: .5em;
    }
`

export const BoxText = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 500;
    gap: .1em;
    position: relative;

    & > label > span {
        color: red;
    }
    & > input {
        font-size: calc(10px + 1vmin);
        height: 2.5em;

        margin-top: .2em;
        padding-left: .6em;

        border: none;
        border-radius: .8em;
        background: rgba(0, 0, 0, .1);

        transition: all .2s ease;
        &:focus {
            outline: none;
            border: 1px;
            border-color: #002c53;
            border-style: double;
        }
    }
    & > span {
        font-weight: 400;
        color: gray;
        margin-bottom: .5em;
    }
    & > input:disabled {
        color: black;
    }
`
export const SelectArea = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    & > h2 > span {
        color: red;
    }
    & > span {
        font-weight: 400;
        color: gray;
        margin-bottom: .5em;
    }
`

export const InputSelect = styled.div`
    position: relative;

    & > p {
        padding: 0;
        position: absolute;
        top: 60%;
        right: .8em;
        transform: translateY(-50%);
        pointer-events: none;
    }
    & > input {
        font-size: calc(10px + 1vmin);
        font-weight: 600;
        color: #1c232e;
        height: 2.4em;
        width: 100%;

        margin-top: .2em;
        padding-left: 1em;

        border: none;
        border-radius: .8em;
        background: rgba(0, 0, 0, .1);

        &:focus {
            outline: none;
        }
        &::placeholder {
            font-weight: 500;
        }
    }
    @media (max-width: 819px) {
        & > p {
            left: .4em;
        }
        & > input {
            padding-left: 1.8em;
        }
    }
`

export const SelectList = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    overflow-y: scroll;
    width: 100%;
    border-radius: .5em;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, .4);

    position: absolute;
    z-index: 1;
    bottom: 0;
    transform: translateY(103%);

    &::-webkit-scrollbar {
        background-color: #1c232e;
        border-top-right-radius: .5em;
        border-bottom-right-radius: .5em;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #e9e9e9;
    }
    & > button {
        display: grid;
        grid-template-rows: 0fr;

        border: none;
        padding: .8em;

        background-color: #1c232e;
        color: white;

        text-align: start;
        cursor: pointer;
        
        transition: all .2s ease;
        &:hover {
            background-color: #002c53;
            color: #e9e9e9;
            padding-left: .4em;
        }
        & > span {
            color: gray;
            width: 0;
            text-overflow: ellipsis;
            white-space: nowrap;
            pointer-events: none;
        }
    }
`

export const InputPrice = styled.div`
    position: relative;

    &::before {
        content: 'R$';
        font-weight: 600;
        position: absolute;
        top: 52%;
        left: 2%;
        transform: translateY(-50%);
    }

    & > input {
        font-size: calc(10px + 1vmin);
        height: 2.5em;
        width: 100%;

        margin-top: .2em;
        padding-left: 2em;

        border: none;
        border-radius: .8em;
        background: rgba(0, 0, 0, .1);

        transition: all .1s ease;
        &:focus {
            outline: none;
            border: 1px;
            border-color: #002c53;
            border-style: double;
        }
    }
    & > input:disabled {
        color: black;
    }
`

export const BoxMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    & > textarea {
        width: 80%;
        height: 10em;

        border: none;
        border-radius: .8em;
        background: rgba(0, 0, 0, .1);

        padding: .5em;
        font-size: calc(10px + 1vmin);
        outline: none;
    }
`

export const ImageArea = styled.img`
    margin-bottom: 2em;
    max-width: 18em;
`

export const FooterStyled = styled.footer`
    padding: 0 1em;
    overflow-x: hidden;
    background: url('https://deltacapital.com.br/images/bg/5.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: gray;

    ${ (props) => props.value && `
        position: relative;
        width: 100vw;
    `}
`

export const FooterLeft = styled.div`
    & > img {
        height: 8em;
        filter: invert(1) brightness(5);
        margin-bottom: 2em;
    }
`
export const FooterRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    & > h2 {
        color: white;
        pointer-events: none;
    }
    & > div > a {
        text-decoration: none;
        color: gray;
        max-width: 50%;

        display: flex;
        align-items: center;
        gap: .2em;
        cursor: pointer;
        transition: .3s ease;

        &:hover {
            color: #002c53;
        }
    }
`

export const SectionStyled = styled.section`
    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

        & > p {
            color: gray;
        }
    }
`