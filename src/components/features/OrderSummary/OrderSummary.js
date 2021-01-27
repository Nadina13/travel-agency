import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';



const OrderSummary = props => (
  <h2 className={styles.component}><strong>Total:</strong>{formatPrice(calculateTotal(props.tripCost, props.options))}</h2>
);

OrderSummary.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
};

export default OrderSummary;