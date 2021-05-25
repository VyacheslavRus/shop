import { createAction } from "@reduxjs/toolkit";

export const addClient = createAction("clients/addClient");
export const deleteClient = createAction("clients/deleteClient");
export const getAllClients = createAction("clients/getAllClients");
export const setClientLoading = createAction("clients/setClientLoading");
export const setError = createAction("clients/setError");
export const resetError = createAction("clients/resetError");
export const setFilter = createAction("clients/setFilter");

// export const addClient = (client) => ({
//   type: "addClient",
//   payload: client,
// });

// export const deleteClient = (id) => ({
//   type: "deleteClient",
//   payload: id,
// });
