import * as React from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";
export interface IResetPassword extends RouteComponentProps {

}
function ResetPassword(props: IResetPassword) {
    return (
        <div>

        </div>
    )
}

export default withRouter(ResetPassword)