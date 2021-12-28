export type item = {
    title:string
    image:string
    price:number | string
};

 interface storeType {
	items: item[];
}

export default storeType;