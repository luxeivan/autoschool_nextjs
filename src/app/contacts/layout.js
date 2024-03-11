import React from 'react'
import Container from "@/components/Container";

export default function layout({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}
