import * as React from "react";
import { motion } from "framer-motion";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const MenuItem = ({ itemName }) => {
    return (
        <motion.li
            className="linkLi"
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="flex ">{itemName}</div>
        </motion.li>
    );
};

export const Navigation = () => {
    const itemNames = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]; // Replace with your item names

    const variants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    return (
        <motion.ul variants={variants} className="linkUi">
            {itemNames.map((itemName, index) => (
                <MenuItem itemName={itemName} key={index} />
            ))}
        </motion.ul>
    );
};

export default Navigation;
