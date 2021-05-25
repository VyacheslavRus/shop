import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/clients/clientsAction";
import { getFilterSelector } from "../../../redux/clients/clientsSelectors";

const ClientsFilter = () => {
  const filter = useSelector(getFilterSelector);
  const dispatch = useDispatch();
  const setFilterValue = () => dispatch(setFilter);

  return (
    <label>
      Filter:
      <input value={filter} onChange={setFilterValue} type="text" />
    </label>
  );
};

export default ClientsFilter;
