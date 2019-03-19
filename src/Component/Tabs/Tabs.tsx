import * as React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Jumbotron, Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Counter from '../Counter/Counter'
import Todo from "../Todo/Todo";
import Fetch from '../Fetch/Fetch'
interface ITabsProps {

}
export default function Tabs(props: ITabsProps) {
    const [activeTab, setActiveTab] = React.useState<string>('1')
    function toggleTab(tab: string) {
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
                        onClick={() => { toggleTab('1'); }}
                    > Counter </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggleTab('2'); }}
                    > Todo </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggleTab('3'); }}
                    > Fetch </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Jumbotron fluid>
                        <Container fluid>
                            <Row>
                                <Col sm="12">
                                    <Counter />
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </TabPane>
                <TabPane tabId="2">
                    <Jumbotron fluid>
                        <Container fluid>
                            <Row>
                                <Col sm="12">
                                    <Todo />
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </TabPane>
                <TabPane tabId="3">
                    <Jumbotron fluid>
                        <Container fluid>
                            <Row>
                                <Col sm="12">
                                    <Fetch />
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </TabPane>
            </TabContent>
        </div>
    );
}
