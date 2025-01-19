import Header from "@/components/common/header/Header";

const layout = ({children}: any) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
}

export default layout;