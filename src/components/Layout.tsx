import FixedSidebar from "./FixedSidebar";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-[100vh]">
            <div className=" flex h-full flex-col">
                <Navbar />

                <div className="flex h-full w-full  ">
                    <FixedSidebar />

                    <section className="flex w-full flex-col">
                        <Header />
                        <div className="flex h-full  ">
                            <Sidebar />
                            <main className=" h-full w-full bg-gray-200/80 p-2 ">{children}</main>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Layout;
