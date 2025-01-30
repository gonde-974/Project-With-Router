import React, { useEffect, useState } from "react";
import PostServise from "../service/postService";
import { toast } from "react-toastify";

import SingleProductCardComponent from "../components/SingleProductCardComponent";

function ProductsPage() {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    PostServise.getSingleProduct()
      .then((res) => {
        setSingleProduct(res.data);
        setIsLoading(true);
        console.log(res.data);

        toast.success("Податоците пристигнаа од Dummy JSON");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Настана грешка при преземање на податоците");
      });
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-700 min-h-screen flex flex-col items-center justify-center px-4 py-8 text-white">
      <h1 className="text-5xl font-extrabold mb-8 tracking-wide text-center">
        SINGLE PRODUCT
      </h1>
      <div className="w-full max-w-4xl mx-auto">
        {isLoading ? (
          <SingleProductCardComponent product={singleProduct} />
        ) : (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
