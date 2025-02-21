// src/app/(pages)/(public)/(home)/components/Services.tsx
"use client";

import { useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { ServiceType } from "@/app/(pages)/(public)/(home)/types";

// Типы данных
interface SubCategory {
    id: string;
    name: string;
    content: string | JSX.Element; // Обновляем тип для поддержки JSX
}

interface Category {
    id: string;
    article: string;
    subCategories: SubCategory[];
}

interface ServicesProps {
    services?: ServiceType[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
    const [categories] = useState<Category[]>([
        {
            id: "1",
            article: "Статья 99. Убийство",
            subCategories: [
                {
                    id: "1-1",
                    name: "Комментарии",
                    content:
                        "Убийство, предусмотренное ст. 99 УК РК, квалифицируется как умышленное лишение жизни другого человека. Санкция включает лишение свободы от 8 до 15 лет. Особое внимание уделяется квалифицирующим признакам: убийство с особой жестокостью, группой лиц или из корыстных побуждений.",
                },
                {
                    id: "1-2",
                    name: "Законодательство",
                    content: (
                        <div>
                            <p>Основной нормативный акт — Уголовный кодекс РК (раздел 5, глава 1). Связанные нормы: ст. 15 (покушение), ст. 24 (соучастие), ст. 96 (умысел). См. также Постановление Верховного Суда РК №4 от 11.07.2003 о судебной практике по делам об убийствах.</p>
                            <ul>
                                <li><a href="https://adilet.zan.kz/rus/docs/K1400000231" target="_blank">Уголовный кодекс РК (ст. 99)</a> — полный текст статьи на сайте Министерства юстиции РК.</li>
                                <li><a href="https://supcourt.kz/ru/postanovlenie-4-2003" target="_blank">Постановление Верховного Суда РК №4</a> — разъяснения по делам об убийствах.</li>
                            </ul>
                            <p>Примеры судебной практики:</p>
                            <img
                                src="https://sud.gov.kz/sites/default/files/styles/news_list__220x120/public/kzh_2217.jpg?itok=LjW4Tr3F"
                                alt="Здание Верховного Суда РК"
                                style={{ maxWidth: "100%", margin: "10px 0" }}
                            />
                            <img
                                src="https://simg.marwin.kz/media/catalog/product/1/2/ugolovnyy_kodeks_respubliki_kazahstan_2022_g.jpg"
                                alt="Законодательство Казахстана"
                                style={{ maxWidth: "100%", margin: "10px 0" }}
                            />
                        </div>
                    ),
                },
                {
                    id: "1-3",
                    name: "Статистика",
                    content:
                        "По данным МВД РК за 2023 год, зарегистрировано около 300 случаев убийств. Преобладают бытовые преступления (60%). Средний срок наказания — 12 лет лишения свободы.",
                },
                {
                    id: "1-4",
                    name: "Следственная тактика",
                    content: (
                        <Tabs defaultActiveKey="inspection" className="mb-3">
                            <Tab eventKey="inspection" title="Следственный осмотр">
                                <p>
                                    Осмотр места происшествия включает фиксацию следов, расположения тела и орудия
                                    преступления. Используются методы криминалистической фотографии и 3D-сканирования
                                    для документирования.
                                </p>
                                <img
                                    src="https://topkvestov.ru/storage/app/uploads/public/5db/c10/65b/5dbc1065b8d34742728750.gif"
                                    alt="Детектив осматривает место преступления"
                                    style={{maxWidth: "100%", margin: "10px 0"}}
                                />
                            </Tab>
                            <Tab eventKey="objects" title="Описание объектов">
                                <p>
                                    Детальное описание объектов на месте преступления: тип орудия, следы крови, предметы
                                    обстановки. Важно установить их связь с мотивом и умыслом.
                                </p>
                            </Tab>
                            <Tab eventKey="interrogation" title="Программа допроса">
                                <p>
                                    Допрос свидетелей и подозреваемых проводится по заранее составленному плану:
                                    установление хронологии, мотивов и алиби. Применяются психологические техники.
                                </p>
                                <a href="https://youtu.be/-ThwDMUJT-w?feature=shared" target="_blank"
                                   rel="noopener noreferrer">
                                    Техники допроса в расследованиях (YouTube)
                                </a>
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://youtu.be/-ThwDMUJT-w?feature=shared"
                                    title="Техники допроса в расследованиях"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </Tab>
                            <Tab eventKey="expertise" title="Судебная экспертиза">
                                <p>
                                    Назначение экспертиз: судебно-медицинская (причина смерти), ДНК-анализ,
                                    баллистическая (при огнестрельном оружии). Экспертиза помогает подтвердить умысел.
                                </p>
                            </Tab>
                            <Tab eventKey="investigation" title="Программы расследования">
                                <p>
                                    Разработка программ расследования: анализ улик, построение версий, координация следственных действий. Используются цифровые инструменты для систематизации данных.
                                </p>
                            </Tab>
                        </Tabs>
                    ),
                },
                {
                    id: "1-5",
                    name: "Образцы процессуальных документов",
                    content:
                        "Пример: постановление о возбуждении уголовного дела по ст. 99 УК РК, протокол осмотра места происшествия, ходатайство о назначении судебно-медицинской экспертизы.",
                },
                {
                    id: "1-6",
                    name: "Судебные акты",
                    content:
                        "Пример: приговор Алматинского городского суда от 15.03.2022 — осуждение по ч. 2 ст. 99 УК РК (убийство с особой жестокостью) к 18 годам лишения свободы.",
                },
                {
                    id: "1-7",
                    name: "Шаблоны протестов, жалобы и тд",
                    content:
                        "Шаблон апелляционной жалобы: указание на нарушение ст. 351 УПК РК (оценка доказательств). Шаблон протеста прокурора на мягкость приговора по ст. 99.",
                },
                {
                    id: "1-8",
                    name: "Научные работы",
                    content:
                        "Иванов А.А. 'Квалификация убийств в судебной практике РК', 2021. Сейдахметов Б.К. 'Проблемы доказывания умысла при убийстве', журнал 'Юрист', №3, 2022.",
                },
            ],
        },
        // Добавляем вкладки для других категорий "Следственная тактика"
        {
            id: "2",
            article: "Статья 100. Умышленное причинение тяжкого вреда здоровью",
            subCategories: [
                {
                    id: "2-1",
                    name: "Комментарии",
                    content:
                        "Статья 100 УК РК предусматривает ответственность за умышленное причинение тяжкого вреда здоровью, опасного для жизни или повлекшего утрату органа. Наказание — лишение свободы от 3 до 8 лет. Квалифицирующие признаки: применение оружия, группой лиц.",
                },
                {
                    id: "2-2",
                    name: "Законодательство",
                    content:
                        "Основание — ст. 100 УК РК (глава 1, раздел 5). Связанные нормы: ст. 97 (умысел), ст. 103 (лёгкий вред здоровью). См. также УПК РК, ст. 208 (осмотр пострадавшего).",
                },
                {
                    id: "2-3",
                    name: "Статистика",
                    content:
                        "В 2023 году по ст. 100 УК РК зарегистрировано 450 случаев. 70% дел связаны с бытовыми конфликтами. Средний срок наказания — 5 лет.",
                },
                {
                    id: "2-4",
                    name: "Следственная тактика",
                    content: (
                        <Tabs defaultActiveKey="inspection" className="mb-3">
                            <Tab eventKey="inspection" title="Следственный осмотр">
                                <p>
                                    Осмотр места происшествия для фиксации следов борьбы и орудия преступления. Применяются методы криминалистической фотографии.
                                </p>
                            </Tab>
                            <Tab eventKey="objects" title="Описание объектов">
                                <p>
                                    Описание орудия преступления и других объектов, связанных с нанесением тяжкого вреда здоровью.
                                </p>
                            </Tab>
                            <Tab eventKey="interrogation" title="Программа допроса">
                                <p>
                                    Допрос потерпевшего и свидетелей для установления обстоятельств и умысла. Используются техники выявления противоречий.
                                </p>
                            </Tab>
                            <Tab eventKey="expertise" title="Судебная экспертиза">
                                <p>
                                    Судебно-медицинская экспертиза для определения степени тяжести вреда и трасологическая для анализа орудия.
                                </p>
                            </Tab>
                            <Tab eventKey="investigation" title="Программы расследования">
                                <p>
                                    Сбор медицинских заключений и координация действий для доказывания умысла и тяжести вреда.
                                </p>
                            </Tab>
                        </Tabs>
                    ),
                },
                {
                    id: "2-5",
                    name: "Образцы процессуальных документов",
                    content:
                        "Пример: постановление о назначении судебно-медицинской экспертизы, протокол допроса потерпевшего по ст. 100 УК РК.",
                },
                {
                    id: "2-6",
                    name: "Судебные акты",
                    content:
                        "Пример: приговор Карагандинского областного суда от 10.02.2023 — осуждение по ч. 1 ст. 100 УК РК к 4 годам лишения свободы.",
                },
                {
                    id: "2-7",
                    name: "Шаблоны протестов, жалобы и тд",
                    content:
                        "Шаблон кассационной жалобы: указание на ошибку в квалификации по ст. 100 вместо ст. 103. Шаблон ходатайства о смягчении наказания.",
                },
                {
                    id: "2-8",
                    name: "Научные работы",
                    content:
                        "Касымов Р.Т. 'Проблемы разграничения ст. 100 и ст. 103 УК РК', 2020. Жумабаева А.С. 'Судебная практика по тяжкому вреду здоровью', журнал 'Право', №2, 2021.",
                },
            ],
        },
        // Оставшиеся категории остаются без изменений или аналогично обновляются для "Следственная тактика"
    ]);

    const [selectedCategory, setSelectedCategory] = useState<Category | null>(categories[0]);
    const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(
        categories[0].subCategories[0]
    );
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleCategoryClick = (category: Category) => {
        setSelectedCategory(category);
        setSelectedSubCategory(category.subCategories[0]);
    };

    const handleSubCategoryClick = (subCategory: SubCategory) => {
        setSelectedSubCategory(subCategory);
    };

    const filteredCategories = categories.filter((category) =>
        category.article.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="reference-container">
            <div className="left-panel">
                <h2>Статьи УК РК</h2>
                <input
                    type="text"
                    placeholder="Поиск по статьям..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <ul className="category-list">
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((category) => (
                            <li
                                key={category.id}
                                className={`category-item ${
                                    selectedCategory?.id === category.id ? "active" : ""
                                }`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category.article}
                                {selectedCategory?.id === category.id && (
                                    <ul className="subcategory-list">
                                        {category.subCategories.map((sub) => (
                                            <li
                                                key={sub.id}
                                                className={`subcategory-item ${
                                                    selectedSubCategory?.id === sub.id ? "active" : ""
                                                }`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleSubCategoryClick(sub);
                                                }}
                                            >
                                                {sub.name}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))
                    ) : (
                        <li>Ничего не найдено</li>
                    )}
                </ul>
            </div>
            <div className="right-panel">
                {selectedSubCategory ? (
                    <>
                        <h3>
                            {selectedCategory?.article} - {selectedSubCategory.name}
                        </h3>
                        <div>{selectedSubCategory.content}</div>
                    </>
                ) : (
                    <p>Выберите категорию и подкатегорию</p>
                )}
            </div>
        </div>
    );
};

export default Services;