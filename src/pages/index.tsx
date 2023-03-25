import { GetServerSideProps } from "next"


const Index = () => {
  null
}


export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/products",
      permanent: false,
    },
  };
};

export default Index