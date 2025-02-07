"use client";

import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/shadcnui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/shadcnui/accordion";
import styles from "./HeaderModal.module.scss";
import burgerMenu from "@/public/header/burgerMenu.svg";
import Link from "next/link";
import { links } from "@/app/lib/constants/links";

type Props = {};

const HeaderModal = ({}: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className={styles.sheet__trigger}>
          <Image src={burgerMenu} alt="menu" />
        </button>
      </SheetTrigger>
      <SheetContent side={"right"} className={styles.sheet__content}>
        <SheetHeader>
          <SheetTitle className={styles.sheet__title}>Меню</SheetTitle>
        </SheetHeader>
        <Accordion type="single" collapsible className={styles.accordion}>
          {links.map((link, idx) =>
            !link.menu ? (
              <AccordionItem
                key={idx}
                value={link.href}
                className={styles.accordion__item}
              >
                <Link href={link.href} className={styles.accordion__link}>
                  {link.name}
                </Link>
              </AccordionItem>
            ) : (
              <AccordionItem
                key={idx}
                value={link.href}
                className={styles.accordion__itemMenu}
              >
                <AccordionTrigger className="p-3">
                  <Link href={link.href} className={styles.accordion__link}>
                    {link.name}
                  </Link>
                </AccordionTrigger>
                <AccordionContent className="p-0">
                  <ul className="">
                    {link.menu.map((submenu, idx) => (
                      <li
                        key={idx}
                        value={idx}
                        className={styles.accordion__sublink}
                      >
                        <Link
                          href={submenu.href}
                          className={`${styles.link} ${styles.link__regular}`}
                        >
                          {submenu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )
          )}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderModal;
