/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from '../crypts.module.css';

export default function Porto() {
    return (
        <>
        <section className={styles.wrapper}>
            <div>
                <img src="/porto/Frame_1.png" alt="" />
                <img src="/porto/Frame_2.png" alt="" />
                <p><strong>WHAT A PORTO</strong><br/>Its just a maniac vintage printed poster banner and all vintage look promotion tool, paint, press, dote image, bitmap visual, and sparation color. old but glory victory and crafty nafty paper cutting edge.</p>
            </div>
            <div>
                <div className={styles.wrapSm}>
                    <img src="/porto/Frame_3a.png" alt="" />
                    <p>Nothing special its just a visual thing that i pairing serif and sans serif font for vintage thing but not too boring all vintage but something to relax whit for reading.</p>
                </div>
                <div className={`${styles.wrapSm} ${styles.revert}`}>
                    <p>It&apos;s very cliché that I chose the background color to imitate or give rise to the perception that this website is printed on paper, so cliché it&apos;s so vintage, right?</p>
                    <img src="/porto/Frame_3b.png" alt="" />
                </div>
            </div>
            <img src="/porto/Frame_4.png" alt="" />
            <img src="/porto/Frame_5.png" alt="" />
            <img src="/porto/Frame_6.png" alt="" />
            <img src="/porto/Frame_7.png" alt="" />
        </section>
        </>
    )
}