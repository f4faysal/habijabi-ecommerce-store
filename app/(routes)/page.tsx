import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("5a8e4803-8afd-4576-80b1-19f513f92313");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        {/* <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div> */}
      </div>
    </Container>
  );
};

export default HomePage;
