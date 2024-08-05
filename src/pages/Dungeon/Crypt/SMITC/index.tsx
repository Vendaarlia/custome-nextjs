/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from '../crypts.module.css';

export default function Smitc() {
    return (
        <>
        <section className={styles.wrapper}>
            <div>
                <img src="/smitc/Frame_1.png" alt="" />
                <img src="/smitc/Frame_2.png" alt="" />
                <p><strong>LOGO</strong><br/>SMITC is taken from the client&apos;s name SARAH MITCHELL and a play on &apos;smith&apos; instead of forging iron. The client is a color smith not to make weapons that hurt but to convey emotion.</p>
            </div>
            <div>
                <div className={styles.wrapSm}>
                    <img src="/smitc/Frame_3a.png" alt="" />
                    <p>because the overall landing page design that the client wanted was minimalist and had lots of space, I used a minimalist font and had a variety of font families to meet all the accents needed, from bold to very light, available for all future needs.</p>
                </div>
                <div className={`${styles.wrapSm} ${styles.revert}`}>
                    <p>For color, I use gradient accents to blend with the client&apos;s work which is full of mixed colors. I use this gradient accent for the buttons and interaction lines below the navigation list and footer.</p>
                    <img src="/smitc/Frame_3b.png" alt="" />
                </div>
            </div>
            <img src="/smitc/Frame_4.png" alt="" />
            <img src="/smitc/Frame_5.png" alt="" />
            <img src="/smitc/Frame_6.png" alt="" />
        </section>
        </>
    )
}