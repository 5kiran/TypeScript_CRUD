let items = {
    1: {
        id: 1,
        name: "Burger",
        price: 599,
        description: "Tasty",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
    },
    2: {
        id: 2,
        name: "Pizza",
        price: 299,
        description: "Cheesy",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
    },
    3: {
        id: 3,
        name: "Tea",
        price: 199,
        description: "Informative",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
    },
};
/**
 * Service Methods
 */
export const findAll = async () => Object.values(items);
export const find = async (id) => items[id];
/**
 * Service Methods
 */
export const create = async (newItem) => {
    const id = new Date().valueOf();
    items[id] = {
        id,
        ...newItem,
    };
    return items[id];
};
export const update = async (id, itemUpdate) => {
    const item = await find(id);
    if (!item) {
        return null;
    }
    items[id] = { id, ...itemUpdate };
    return items[id];
};
