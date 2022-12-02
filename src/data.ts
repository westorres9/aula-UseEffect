const products = [
    {
        id: 1,
        name: "TV",
        price:2000.0
    },
    {
        id: 2,
        name: "Macbook",
        price:5000.0
    }
]

export function findProducts(id: number) {
    return products.find(x => x.id === id);
}