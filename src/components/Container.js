import React from 'react'

export default function Container({ children }) {
    
    return (
        <div style={{
            minHeight: 280,
            maxWidth: 1240,
            margin: "0 auto",
            padding: "0 24px",
        }}>{children}</div>
    )
}
