import './App.css';
const { Component } = require("react");

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { price: 0, quantity: 0, total: 0, d: 0, totalPaid: 0 };
    }

    calculateTotal = () => {
        const { price, quantity } = this.state;
        const total = price * quantity;
        const d = total * 0.1;
        const totalPaid = total - d
        this.setState({ total, d, totalPaid });
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: Number(value) });
    };

    render() {
        return (
            <>
                <h1>Shopping Cart</h1>
                <input type="number" name="price" placeholder="Price" onChange={this.handleInputChange} />
                <br />
                <input type="number" name="quantity" placeholder="Quantity" onChange={this.handleInputChange} />
                <br />
                <button onClick={this.calculateTotal}>Calculate</button>
                <h2>Total amount: {this.state.total}</h2>
                <h2>Discount: {this.state.d}</h2>
                <h2>Total payable: {this.state.totalPaid}</h2>
            </>
        );
    }
}

export default App;
