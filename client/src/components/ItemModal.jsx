import React, { Component } from "react";
import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";
import Create from "../views/Create";

class ItemModal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open ItemModal Start");
      },
      onOpenEnd: () => {
        console.log("Open ItemModal End");
      },
      onCloseStart: () => {
        console.log("Close ItemModal Start");
      },
      onCloseEnd: () => {
        console.log("Close ItemModal End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.ItemModal, options);
  }

  render() {
    return (
      <>
        <div
          ref={(ItemModal) => {
            this.ItemModal = ItemModal;
          }}
          id={"ItemModal" + this.props.item._id}
          className="modal"
        >
          <div className="modal-content">
            <h1>{this.props.item.name}</h1>
            <h4>
              {this.props.item.amount} {this.props.item.unit}
            </h4>
            <h4>{this.props.item.category}</h4>
          </div>
          <div class="modal-footer">
            <a className="modal-close waves-effect waves-red btn-flat">
              Disagree
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Agree
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default ItemModal;
