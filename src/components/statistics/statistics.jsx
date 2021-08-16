import React from "react";
import PropTypes from "prop-types";
import styles from './Statistics.module.css';

const randomColor = () => '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)

const Statistics  =({title, stats}) => (
    <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.stat_list}>
        {stats.map(({id, label, percentage}) => (
            <li 
                className={styles.item}
                key = {id}
                style = {{
                backgroundColor: randomColor(),
        }}
        >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
            </li>
        ))}
        </ul>
    </section>
);

Statistics.propTypes = {

    title: PropTypes.string,
    stats: PropTypes.shape({
        id: PropTypes.number,
        label: PropTypes.string,
        percentage: PropTypes.number,
    }),
};

export default Statistics;

