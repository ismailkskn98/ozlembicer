'use client';
import React from 'react'
import { motion } from 'motion/react'

export default function MotionScrollInView({ children, className, duration = 0.4, yOffset = 150 }) {
    return (
        <motion.section
            initial={{ y: yOffset, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1, transition: { duration } }}
            className={`${className}`}
        >
            {children}
        </motion.section>
    )
}
