import React from 'react'
// import {IndexLink} from 'react-router'
import NavLink from './NavLink'
// import Home from './Home'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

// <Col md={4}>
//   <NavItem><NavLink to="/" /*activeClassName="active"*/ onlyActiveOnIndex={true}><h2>HOME</h2></NavLink></NavItem>
// </Col>



export default React.createClass({

  render() {
      return (
        <div>
          <div className='header-div'>
            <Nav bsStyle="pills" role="nav">
              <Grid>
                <Row>
                  <Col md={6} className="nav-selection-container">
                    <NavItem><NavLink to="/football"><h2>Fótbolti</h2></NavLink></NavItem>
                  </Col>
                  <Col md={6} className="nav-selection-container">
                    <NavItem><NavLink to="/handball"><h2>Handbolti</h2></NavLink></NavItem>
                  </Col>
                </Row>
              </Grid>
            </Nav>
          </div>
          {this.props.children /*|| <Home/>*/}
        </div>
      )

  }
})
