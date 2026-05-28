import { ProductCardComponent } from "@/src/app/components/products/ProductCardComponent";
import { ProductType } from "@/src/app/lib/product-type/poduct";
import Link from "next/link"
import { use } from "react";

//async function to ProductPage
async function getProducts() {
  try{
    //calling fetching data fromapi/product/route.ts
    const res = await fetch('http://localhost:3000/api/product', {cache: 'no-store'});
    const products = await res?.json();
    console.log(`====> Product Data: ${products?.content}`);
    return products; //datat from api which diplay as object
  }catch(err){
    throw new Error('Fail to fetch data from api')
  }
}

// const fercher = async (url: product){}
export default function ProductPageRoute() {
  // using use hook to fetch datat from server
  const {data:products} = use(getProducts());
  return (
    <div>
      {/* Product Page Route */}
      <div className="flex gap-5">
        <Link href="{'/dashboard/create'}">Create</Link>
        <Link href="{'/dashboard/edit'}">Edit</Link>
      </div>
      {/* display data from api  */}
      <div className="flex gap-5">
        {
          products?.content?.map(({uuid, thumbnail, priceOut, name}:ProductType)=>(
            <ProductCardComponent
            uuid={uuid}
            key={uuid}
            thumbnail={thumbnail}
            priceOut={priceOut}
            name={name}
            />
          ))
        }
      </div>
    </div>
  )
}
// function LoadingProduct(){}
// function ProoductRerenderingProcess(){

//   // const {data:product, error, isLoading} = useSWR('https://localhoat:3000/api/product');
// }