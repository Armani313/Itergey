import { Col, Row } from 'react-bootstrap'
import RegularHeading from './components/RegularHeading'
import DisplayHeading from './components/DisplayHeading'
import InlineText from './components/InlineText'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Typography' }

const Typography = () => {
  return (
    <Row>
      <Col xs={12}>
        <RegularHeading />
        <DisplayHeading />
        <InlineText />
      </Col>
    </Row>
  )
}
export default Typography
