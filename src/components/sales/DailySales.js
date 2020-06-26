import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDailySales } from '../../actions/order';

const customerName = (user) => {
  if (!user.customer_id.first_name) return user.customer_id.business_name;
  return `${user.customer_id.first_name} ${user.customer_id.last_name} `;
};

const ItemOrdered = () => {
  const itemOrdered = useSelector((state) => state.order.itemOrdered);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDailySales());
  }, []);
  return (
    <div>
      <div className="container">
        <h6>Produce Ordered</h6>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Price(₦)</th>
            <th>Quantity Ordered</th>
            <th>Total(₦)</th>
            <th>Customer Name</th>
          </tr>
        </thead>
        <tbody>
          {itemOrdered ? itemOrdered.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.produce.name}</td>
              <td>{item.produce.price}</td>
              <td>{item.quantity}</td>
              <td>{item.quantity * item.produce.price} </td>
              <td>{item.orders ? customerName(item.orders) : 'no name'}</td>
            </tr>
          )) : <h6>No item Ordered Today</h6>}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ItemOrdered;
