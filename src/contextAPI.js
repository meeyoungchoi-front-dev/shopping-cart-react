import { dataProducts } from "./appData";
import { dataProducts, productDetails } from "./appData";
const ProductContentx = React.createContext();

class ProductProvieder extends Component {
    state = {
        products:dataProducts,
        detailProduct: productDetails,
    }

    render() {
        return (
            <ProductContentx.Provider value = {{
                ...this.state,
            }}>
            {this.props.children}
            </ProductContentx.Provider>
        )
    }
}