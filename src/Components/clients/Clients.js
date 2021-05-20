import React, { Component, Fragment } from "react";
import ClientsForm from "./clientsForm/ClientsForm";
import ClientList from "./clientsList/ClientList";
import ClientsFilter from "./clientsFilter/ClientsFilter";
import { connect } from "react-redux";
import {
  addClientOperation,
  deleteClientOperation,
  getAllClientsOperation,
} from "../../redux/clients/clientsOperations";
import {
  errorClientsSelektor,
  getClientsSelector,
  loaderClientsSelector,
} from "../../redux/clients/clientsSelectors";

class Clients extends Component {
  state = {
    filter: "",
  };

  async componentDidMount() {
    this.props.getAllClientsOperation();
    // try {
    //     this.setState({ clients });
    //   }
    //   // console.log(data);
    // } catch (error) {}
  }

  addClient = async (client) => {
    this.props.addClientOperation(client);
    // try {
    //   console.log(data);
    //   this.setState((prev) => {
    //     return {
    //       clients: [...prev.clients, { ...client, id: uuidv4() }],
    //     };
    //   });
    // } catch (error) {}
  };

  deleteClient = async (e) => {
    const { id } = e.target;
    this.props.deleteClientOperation(id);
    // try {
    //   this.setState({
    //     clients: this.state.clients.filter((client) => client.id !== id),
    //   });
    // } catch (error) {}
  };

  setFilter = (e) => {
    const { value } = e.target;
    this.setState({
      filter: value,
    });
  };

  getFilterClients = () => {
    return this.props.clients.filter((client) =>
      client.clientName.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <>
        {this.props.error && <h2>{this.props.error}</h2>}
        {this.props.isLoading && <h2>Loading</h2>}
        <h2>Клиенты</h2>
        <ClientsForm addClient={this.addClient} />
        <ClientsFilter filter={this.state.filter} setFilter={this.setFilter} />
        <ClientList
          clients={this.getFilterClients()}
          deleteClient={this.deleteClient}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  clients: getClientsSelector(state),
  isLoading: loaderClientsSelector(state),
  error: errorClientsSelektor(state),
});

const mapDispatchToProps = {
  getAllClientsOperation,
  addClientOperation,
  deleteClientOperation,
};
export default connect(mapStateToProps, mapDispatchToProps)(Clients);
