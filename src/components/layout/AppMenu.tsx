// src/components/layout/AppMenu.tsx
"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface AppMenuProps {
    centered?: boolean;
}

const AppMenu = ({ centered }: AppMenuProps) => {
    const pathname = usePathname();

    const menuItems = [
        { label: "Главная", url: "/" },
        { label: "Информационно-аналитическая платформа", url: "/platform" },
        { label: "Форум", url: "/forum" },
        { label: "Новости", url: "/news" },
        { label: "Обратная связь", url: "/feedback" },
        { label: "Личный кабинет", url: "/account" },
        { label: "О нас", url: "/about" },
    ];

    return (
        <ul className={clsx("navbar-nav align-items-lg-center custom-navbar-nav", centered ? "mx-auto" : "ms-auto")}>
            {menuItems.map((item, idx) => (
                <li key={idx} className="nav-item">
                    <Link
                        href={item.url}
                        className={clsx("nav-link custom-nav-link", { active: pathname === item.url })}
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default AppMenu;