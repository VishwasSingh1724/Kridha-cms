import Header from "@/app/components/Header";
import MenuTable from "@/app/components/MenuTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import MenuAddingModalButtton from "./components/MenuAddingModalButton";

const MenuPage = () => {
    return (<>
      <div className="flex flex-col gap-4 px-8 py-3">
        <div className="flex justify-between items-center w-full">
        <Header title="Menu" description="Manage your menu items" />
        <MenuAddingModalButtton/>
        </div>
        <MenuTable />
      </div>
    </>);
  };
  
  export default MenuPage;
  