import Image from 'next/image'
import { Button, Col, Container, Row } from 'react-bootstrap'

import portfolio1 from '@/assets/images/hero/portfolio1.png'

const Hero = () => {
    return (
        <section className="hero-2 pt-5 position-relative hero-with-shapes">
            <div className="shape1" />
            <div className="shape2" />
            <div className="shape3" />
            <Container className="hero-container ">
                <Row>
                    <Col lg={8} data-aos="fade-right" data-aos-duration={1000}>
                        <h1 className="hero-title">«I-tergeu» — цифровой помощник в расследованиях!</h1>
                        <hr/>
                        <p className="mt-2 fs-16 text-dark">
                            Миссия: Облегчение и повышение эффективности расследования уголовных дел путем внедрения
                            цифровых
                            инструментов, систематизации информации и автоматизации аналитики
                        </p>
                        <hr/>
                        <div className="text-secondary">
                            <ul className="pretty-list py-4">
                                <li>Создание единого ресурса для следователей и прокуроров.</li>
                                <li className="ps-5">Уменьшение бумажной волокиты и процессуальных ошибок.</li>
                                <li className="ps-6">Обеспечение доступа к актуальным правовым нормам и судебной
                                    практике.
                                </li>
                                <li className="ps-7">Развитие профессионального сообщества через форум и обмен опытом.
                                </li>
                                <li className="ps-8">Постоянное обновление информации и интеграция современных
                                    технологий в процесс расследования.
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} className="text-center text-lg-end">
                        <div className="img-container" data-aos="fade-up" data-aos-duration={200}>
                            <Image src={portfolio1} className="img-fluid" alt="portfolio"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Hero
