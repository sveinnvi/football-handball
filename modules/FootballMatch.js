import React from 'react'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import Button from 'react-bootstrap/lib/Button'

// import Button from 'react-bootstrap/lib/Button';

export default React.createClass({



  render() {
    return (
      <div>
        <div>
         <Col xs={12} md={6}>
           <Thumbnail className="custom-thumbnail" /*src="/assets/thumbnaildiv.png" alt="242x200"*/>
            <Row>
              <Col md={6} xs={12}>
              <div>
              <h3>{this.props.singleMatch.homeTeam}</h3>
              </div>
              </Col>
              <Col md={6} xs={12}>
              <div>
              <h3>{this.props.singleMatch.awayTeam}</h3>
              </div>
              </Col>
            </Row>
             <p>{this.props.singleMatch.location}</p>
             <p>{this.props.singleMatch.date +' klukkan ' + this.props.singleMatch.time}</p>
           </Thumbnail>
         </Col>
        </div>
        {this.props.children}
      </div>
    )
  }
})
