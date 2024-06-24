export interface Product{
    _id: string,
    title: string,
    description: string,
    price: number,
    discountPercentage:number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}
export interface FormProduct{
    title: string,
    description: string,
    price: string,
    category: string,
    thumbnail: string,
}
export interface FormErrorProduct{
    title?: string,
    description?: string,
    price?: string,
    category?: string,
    thumbnail?: string,
}

