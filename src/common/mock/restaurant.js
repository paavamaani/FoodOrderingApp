import fetchMock from 'fetch-mock';

fetchMock.config.overwriteRoutes = true;

fetchMock.get(/\/api\/restaurant\/(\d+)/, (url, opts) => {
  const match = url.match(/\/api\/restaurant\/(\d+)/);
  const resId = match[1];

  if (resId === '271483') {
    return {
      data: {
        name: 'Burger King',
        price: '200 for Two',
        menu: [
          'Whopper',
          'Chicken Fries',
          'Bacon King',
          'Veggie Burger',
          'BK Stacker',
        ],
      },
    };
  } else if (resId === '341895') {
    return {
      data: {
        name: 'Burger Seigneur',
        price: '100 for Two',
        menu: [
          'Le Classic Seigneur',
          'Le Veggie Seigneur',
          'Le Spicy Seigneur',
          'Truffle Cheese Burger',
          'Seigneur Special',
        ],
      },
    };
  } else if (resId === '506323') {
    return {
      data: {
        name: 'Louis Burger',
        price: '200 for Two',
        menu: [
          'Classic Louis Burger',
          'Cheese Deluxe',
          'Louis Veggie Burger',
          'Grilled Chicken Sandwich',
          'Spicy Deluxe',
        ],
      },
    };
  } else if (resId === '23680') {
    return {
      data: {
        name: "McDonald's",
        price: '100 for Two',
        menu: [
          'Big Mac',
          'McChicken',
          'Filet-O-Fish',
          'McFlurry',
          'Chicken McNuggets',
        ],
      },
    };
  } else if (resId === '79472') {
    return {
      data: {
        name: "Domino's Pizza",
        price: '200 for Two',
        menu: [
          'Pepperoni Pizza',
          'Cheese Pizza',
          'Veg Extravaganza',
          'Chicken Golden Delight',
          'Paneer Makhani Pizza',
        ],
      },
    };
  } else {
    return { data: resId };
  }
});
