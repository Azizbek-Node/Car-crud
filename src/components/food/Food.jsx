import React, { Component } from "react";

export default class Food extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      model: "",
      price: "",
      description: "",
      editingId: null,
      data: JSON.parse(localStorage.getItem("cars")) || [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, model, price, description, editingId, data } = this.state;

    if (editingId) {
      const updatedData = data.map((car) =>
        car.id === editingId ? { ...car, name, model, price, description } : car
      );
      this.setState({
        data: updatedData,
        name: "",
        model: "",
        price: "",
        description: "",
        editingId: null,
      });
      localStorage.setItem("cars", JSON.stringify(updatedData));
    } else {
      const newCar = {
        id: Date.now(),
        name,
        model,
        price,
        description,
      };
      const store = [...data, newCar];
      this.setState({
        data: store,
        name: "",
        model: "",
        price: "",
        description: "",
      });
      localStorage.setItem("cars", JSON.stringify(store));
    }
  };

  handleDelete = (id) => {
    const newData = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: newData });
    localStorage.setItem("cars", JSON.stringify(newData));
  };

  handleEdit = (id) => {
    const carToEdit = this.state.data.find((car) => car.id === id);
    this.setState({
      name: carToEdit.name,
      model: carToEdit.model,
      price: carToEdit.price,
      description: carToEdit.description,
      editingId: id,
    });
  };

  render() {
    return (
      <div className="flex">
        <div className="w-80 h-screen bg-blue-100 p-5">
          <form onSubmit={this.handleSubmit} action="">
            <input
              autoFocus
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              className="w-full h-10 mb-3 border rounded-lg px-2"
              placeholder="Car Name"
              type="text"
            />
            <input
              value={this.state.model}
              onChange={(e) => this.setState({ model: e.target.value })}
              className="w-full h-10 mb-3 border rounded-lg px-2"
              placeholder="model"
              type="text"
            />
            <input
              value={this.state.price}
              onChange={(e) => this.setState({ price: e.target.value })}
              className="w-full h-10 mb-3 border rounded-lg px-2"
              placeholder="Price"
              type="text"
            />
            <input
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
              className="w-full h-10 mb-3 border rounded-lg px-2"
              placeholder="Description"
              type="text"
            />
            <button className="w-full h-10 bg-blue-300 hover:bg-blue-400 rounded-lg font-medium">
              {this.state.editingId ? "Update Car" : "Add Car"}
            </button>
          </form>
        </div>
        <div className="p-5 flex flex-wrap gap-4 flex-1 items-start content-start bg-gray-50">
          {this.state.data?.map((car) => (
            <div key={car.id} className="w-72 shadow-md bg-white rounded-lg">
              <div className="w-full h-52 bg-blue-200 rounded-t-lg"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {car.name}
                </h3>
                <p className="text-gray-600">
                  <strong>model:</strong> {car.model}
                </p>
                <p className="line-clamp-1 text-gray-600">{car.description}</p>
                <p className="font-medium text-gray-700">${car.price}</p>
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => this.handleEdit(car.id)}
                    className="bg-yellow-400 hover:bg-yellow-500 px-4 py-1 rounded-md font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => this.handleDelete(car.id)}
                    className="bg-red-400 hover:bg-red-500 px-3 py-1 rounded-md font-medium text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
