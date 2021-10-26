import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductItem from "../components/ProductItem";
import { Item } from '../src/mock-backend/data';

const product: Item = {
    id: 0,
    name: "Hair Shampoo",
    price: 5.17,
    inventory: 5,
}


describe("when the buy button is pressed", () => {
  it("should call the `BuyProduct` callback ", () => {
    
    const BuyProductMock = jest.fn();

    render(
      <ProductItem product={product} />
    )

    screen.debug()


  })
})

