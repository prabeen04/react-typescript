import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';

interface IVerifyEmail extends RouteComponentProps<any> { }

function VerifyEmail(props: IVerifyEmail) {
    const { match: { params } } = props;
    console.log(params)
    const token: string = params.token
    const VERIFY_EMAIL = gql`
    mutation VerifyEmail($token: String!) {
      verifyEmail( token: token )   
       }
  `;

    const verifyEmail = useMutation(VERIFY_EMAIL, { update: () => { } })
    React.useEffect(() => {
        verifyEmail({
            variables: {
                token
            }
        })
    }, [token])
    return (
        <div>
            <h1>Verify your email</h1>
        </div>
    )
}

export default withRouter<IVerifyEmail>(VerifyEmail)