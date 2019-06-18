import * as React from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';
export interface IResetPassword extends RouteComponentProps<any> { }

function ResetPassword(props: IResetPassword) {
    const { match: { params } } = props;
    const token: string = params.token;
    const RESET_PASSWORD = gql`
        mutation ResetPassword($email: string){
            resetPassword(email: $email)
        }
    `;
    const resetPassword = useMutation(RESET_PASSWORD, { update: () => { } })
    React.useEffect(() => {
        resetPassword({
            variables: {
                token
            }
        })
    }, [token])
    return (
        <div>
            <h1>Reset Password</h1>
        </div>
    )
}

export default withRouter(ResetPassword)