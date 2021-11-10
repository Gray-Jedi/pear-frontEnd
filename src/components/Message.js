import React from 'react'
import { Alert } from 'react-bootstrap'


export function Message({ variant, children }) {
    return (
        <Alert variant={variant}>
            {children}
        </Alert>
    )
}


export function ErrorMessage({variant, children}) {
    return (
        <Alert variant={variant} style={{ textAlign:'center' }}>
            <Alert.Heading as='h2'>Technical Difficulties...</Alert.Heading>
            {children}
        </Alert>
    )
}


export function EmptyCartMessage({variant, children}) {
    return (
        <Alert variant={variant} style={{ textAlign:'center' }}>
            <Alert.Heading as='h2'>I feel so empty inside...</Alert.Heading>
            {children}
        </Alert>
    )
}


export function PasswordMessage({variant, children}) {
    return (
        <Alert variant={variant} style={{ textAlign:'center' }}>
            <Alert.Heading as='h2'>Passwords do not match</Alert.Heading>
            {children}
        </Alert>
    )
}



