import {Container, Text, FormButton,FormContent, FormH1, FormLabel, FormInput, FormWrap, Form, Icon} from './SearchElements'
import SearchData from './SearchData'

import UserList from '../Search/Userlist';
import { render } from '@testing-library/react';

const Search = () => {

    return (
        <>
        <Container>
            <FormWrap>

                <Icon to="/"> Golden </Icon>
                <FormContent>
                    <Form>
                        <UserList/>
                    </Form>
                </FormContent>
            </FormWrap>

        </Container>
        </>

    )
}

export default Search;