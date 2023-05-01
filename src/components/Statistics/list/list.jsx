import css from './list.module.css'
import PropTypes from 'prop-types';
import {randomColor} from '../../../untils/RandomColor'


export const List = ({ label, percentage }) => {
    return (<li className={css.item} style={{backgroundColor:randomColor()}}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage} %</span>
    </li>
    )
};

List.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}

