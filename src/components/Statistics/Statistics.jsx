import PropTypes from 'prop-types';
import { List } from './list/list'
import css from './Statistics.module.css'

export const Statistics = ({title, stats}) => {
    return (

        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            
            <ul className={css.statList}>
                {stats.map(({id, label, percentage}) => {
                    return (
                        <List key={id} label={label} percentage={percentage} />
                    )
                })} </ul>
</section>
    )
}
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      })
  ),
  title: PropTypes.string,
}