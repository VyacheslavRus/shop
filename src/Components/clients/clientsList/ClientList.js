import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClientOperation } from "../../../redux/clients/clientsOperations";
import {
  getClientsSelector,
  getFilterSelector,
} from "../../../redux/clients/clientsSelectors";

const ClientList = () => {
  const filter = useSelector(getFilterSelector);
  const clients = useSelector(getClientsSelector);
  const dispatch = useDispatch();

  const getFilterClients = () => {
    return clients.filter((client) =>
      client.clientName.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteClient = (e) => {
    const { id } = e.target;
    dispatch(deleteClientOperation(id));
  };

  return (
    <ul className="clientList">
      {getFilterClients().map((client) => (
        <li key={client.id}>
          <p>{client.clientName}</p>
          <p>{client.creditCard}</p>
          <button type="button" onClick={deleteClient} id={client.id}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ClientList;
