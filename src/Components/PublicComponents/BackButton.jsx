import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function BackButton(){

const navigate = useNavigate()
    const text = "< Voltar"
    return(<Button onClick={()=>{navigate(-1)}}>{text}</Button>)
}

const Button = styled.p`
    position: fixed;
    bottom: 45px;
    left: 10px;
    text-decoration: underline;
    background-color: #fff;
`