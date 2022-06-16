import React from 'react'
import { Container, Col, Row,  } from 'react-bootstrap'

import ColoredLine from './ColoredLine'

import SmallAdvert from './Advert-components/smallAdvert'
import BigAdvert from './Advert-components/bigAdvert'
import BannerAdvert from './Advert-components/bannerAdvert'

function Advert() {
  return (
    <div style={{ margin: 50 }}>
        <ColoredLine color='black' />
        <div>
            <Container>
                <Row>
                    <Col><SmallAdvert /></Col>
                    <Col><BigAdvert /></Col>
                </Row>
                <Row>
                    <Col><BannerAdvert /></Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default Advert