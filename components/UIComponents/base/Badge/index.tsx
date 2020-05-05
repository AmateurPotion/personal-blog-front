import React from "react";
import styled from "styled-components";

interface IProps {
    children?: React.ReactChild;
}

const Badge: React.FC<IProps> = props => {
    const { children } = props;
    return <Container>{children}</Container>;
};

const Container = styled.div`
    display: inline-block;
    width: auto;
    height: auto;
    text-align: center;
    padding: 4px 12px;
    margin-right: 6px;
    border-radius: 4px;
    font-size: 14px;
    background: ${props => props.theme.color.sub};
    color: ${props => props.theme.color.white};
    line-height: 1.2;
    font-weight: 800;
`;

export default Badge;