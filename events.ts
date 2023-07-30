export type ShoppingCartEvent =
  | {
      type: 'ShoppingCartOpened';
      data: {
        shoppingCartId: string;
        clientId: string;
        openedAt: string;
      };
    }
  | {
      type: 'ProductItemAddedToShoppingCart';
      data: {
        shoppingCartId: string;
        productItem: ProductItem;
      };
    }
  | {
      type: 'ProductItemRemovedFromShoppingCart';
      data: {
        shoppingCartId: string;
        productItem: ProductItem;
      };
    }
  | {
      type: 'ShoppingCartConfirmed';
      data: {
        shoppingCartId: string;
        confirmedAt: string;
      };
    }
  | {
      type: 'ShoppingCartCanceled';
      data: {
        shoppingCartId: string;
        canceledAt: string;
      };
    };

    export type ShoppingCart =
  | {
      status: 'Empty';
    }
  | {
      status: 'Pending';
      id: string;
      clientId: string;
      productItems: ProductItem[];
    }
  | {
      status: 'Confirmed';
      id: string;
      clientId: string;
      productItems: ProductItem[];
      confirmedAt: Date;
    }
  | {
      status: 'Canceled';
      id: string;
      clientId: string;
      productItems: ProductItem[];
      canceledAt: Date;
    };