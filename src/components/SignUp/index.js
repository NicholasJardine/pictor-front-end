import React from 'react'
import {Container, Text, FormButton,FormContent, FormH1, FormLabel, FormInput, FormWrap, Form, Icon} from './SignupElements'



const SignUp = () => {
    return (
        <>
        
        <Container>
            <FormWrap>

                <Icon to="/"> Golden </Icon>
                <FormContent>
                    <Form action = "#">
                        <FormH1>Create an account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='age' required />
                        <FormLabel htmlFor='for'>Age</FormLabel>
                        <FormInput type='age' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>


        </Container>
        
        </>

    )
}

export default SignUp
