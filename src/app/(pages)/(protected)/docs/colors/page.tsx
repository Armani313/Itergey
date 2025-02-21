import { colorVariants } from '@/assets/data/constants'
import type { Metadata } from 'next'
import { Col, Row } from 'react-bootstrap'
import Backgrounds from './components/Backgrounds'
import TextColors from './components/TextColors'
import Colors from './components/Colors'

export const metadata: Metadata = { title: 'Colors' }

const ColorsExample = () => {
  return (
    <Row>
      <Col xs={12}>
        <Colors variants={colorVariants} />
        <Backgrounds variants={colorVariants} />
        <TextColors variants={colorVariants} />
      </Col>
    </Row>
  )
}
export default ColorsExample
