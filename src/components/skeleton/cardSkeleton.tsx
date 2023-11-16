"use client";
import React from "react";
import { SkeletonContainer, SkeletonImg, SkeletonNameAndPrice, SkeletonBuyButton, ContainerImg } from "./styled";

export default function CardSkeleton() {
    return (
        <SkeletonContainer>
            <ContainerImg>
                <SkeletonImg />
            </ContainerImg>
            <SkeletonNameAndPrice />
            <SkeletonBuyButton />
        </SkeletonContainer>
    );
};
