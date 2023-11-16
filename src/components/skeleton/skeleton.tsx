"use client";
import React from "react";
import { Container, Content } from "./styled";
import CardSkeleton from "./cardSkeleton";

export default function Skeleton() {
    const renderCardSkeletons = () => {
        const skeletons = [];
        for (let i = 0; i < 8; i++) {
            skeletons.push(<CardSkeleton key={i} />);
        }
        return skeletons;
    };

    return (
        <Container>
            <Content>
                {renderCardSkeletons()}
            </Content>
        </Container>
    );
};
