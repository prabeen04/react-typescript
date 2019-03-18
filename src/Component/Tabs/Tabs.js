import * as React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Counter from '../Counter/Counter'
import Form from "../Form/Form";

export default function Tabs(props) {
    const [activeTab, setActiveTab] = React.useState('1')
    function toggleTab(tab) {
        if (activeTab !== tab) {
            setActiveTab(tab)
        }
    }
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => {toggleTab('1'); }}
                    >
                        Counter
            </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => {toggleTab('2'); }}
                    >
                        Todo
            </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <Counter />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <Form />
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}
