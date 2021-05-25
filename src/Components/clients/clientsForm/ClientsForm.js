import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetError } from "../../../redux/clients/clientsAction";
import { addClientOperation } from "../../../redux/clients/clientsOperations";
import { errorClientsSelektor } from "../../../redux/clients/clientsSelectors";

export default function ClientsForm() {
  const [clientName, setClientName] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const error = useSelector((state) => errorClientsSelektor(state));
  const dispatch = useDispatch;

  const onHendlerSubmit = (e) => {
    e.preventDefault();
    dispatch(addClientOperation({ clientName, creditCard }));
    setClientName("");
    setCreditCard("");
  };

  const onHandleChange = (e) => {
    error && dispatch(resetError());
    const { name, value } = e.target;

    name === "clientName" && setClientName(value);
    name === "creditCard" && setCreditCard(value);
  };

  return (
    <form onSubmit={onHendlerSubmit}>
      <label>
        Client:
        <input
          type="text"
          name="clientName"
          value={clientName}
          onChange={onHandleChange}
        />
        Card:
        <input
          type="text"
          name="creditCard"
          value={creditCard}
          onChange={onHandleChange}
        />
        <button type="submit">save</button>
      </label>
    </form>
  );
}

// class ClientsForm extends Component {
//   state = {
//     clientName: "",
//     creditCard: "",
//   };

//   onHendlerSubmit = (e) => {
//     e.preventDefault();
//     this.props.addClient(this.state);
//     this.setState({
//       clientName: "",
//       creditCard: "",
//     });
//   };

//   onHandleChange = (e) => {
//     this.props.error && this.props.resetError();
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form onSubmit={this.onHendlerSubmit}>
//         <label>
//           Client:
//           <input
//             type="text"
//             name="clientName"
//             value={this.state.clientName}
//             onChange={this.onHandleChange}
//           />
//           Card:
//           <input
//             type="text"
//             name="creditCard"
//             value={this.state.creditCard}
//             onChange={this.onHandleChange}
//           />
//           <button type="submit">save</button>
//         </label>
//       </form>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     error: errorClientsSelektor(state),
//   };
// };
// export default connect(mapStateToProps, { resetError })(ClientsForm);
