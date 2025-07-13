import { Button, Field, Fieldset, HStack, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Login =()=> {
    return(
        <>
        <Fieldset.Root size="lg" maxW="md" mx={'auto'} className="">
             <Stack>
                <Fieldset.Legend>Login form</Fieldset.Legend>
                <Fieldset.HelperText>
                    Please provide your contact details below to login.
                </Fieldset.HelperText>
            </Stack>
            <Fieldset.Content>
                <Field.Root>
                    <Field.Label>Email address</Field.Label>
                    <Input name="email" type="email" />
                </Field.Root>
                <Field.Root>
                    <Field.Label>Password</Field.Label>
                    <Input name="password" type="password" />
                </Field.Root>
            </Fieldset.Content>
            <HStack>
                <Text>Don't have an account? <Link className="text-blue-700" to={'/signup'}>sign up</Link></Text>
            </HStack>
            <Button type="submit" alignSelf="flex-start">
                Login
            </Button>
        </Fieldset.Root>
        </>
    )
}