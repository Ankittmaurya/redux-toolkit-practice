import { Button, Field, Fieldset, HStack, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Signup =()=> {
    return(
        <>
        <Fieldset.Root size="lg" maxW="md" mx={'auto'} className="">
             <Stack>
                <Fieldset.Legend>Signup form</Fieldset.Legend>
                <Fieldset.HelperText>
                    Please provide your contact details below to signup.
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
                <Field.Root>
                    <Field.Label>Confirm Password</Field.Label>
                    <Input name="confirm_password" type="password" />
                </Field.Root>
            </Fieldset.Content>

            <HStack>
                <Text>Already have an account? <Link className="text-blue-700" to={'/login'}>Login</Link></Text>
            </HStack>

            <Button type="submit" alignSelf="flex-start">
                Sign up
            </Button>
        </Fieldset.Root>
        </>
    )
}