import { ReactNode, createContext, useContext } from "react";

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (productId: string) => void;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
