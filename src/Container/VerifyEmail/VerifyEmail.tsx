import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IVerifyEmail extends RouteComponentProps { }

function VerifyEmail(props: IVerifyEmail) {
    const { match: { params } } = props;
    console.log(params)
    return (
        <div>
            <h1>Verify your email</h1>
        </div>
    )
}

export default withRouter(VerifyEmail)