import {Container, Text, FormButton,FormContent, FormH1, FormLabel, FormInput, FormWrap, Form, Icon} from './SearchElements'

const Search = () => {
    return (
        <>
        
        <Container>
            <FormWrap>

                <Icon to="/"> Golden </Icon>
                <FormContent>
                    <Form action = "#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
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

export default Search