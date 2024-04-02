import Layout from "./components/Layout";
import MessageBox from "./components/MessageBox";

function App() {
    return (
        <Layout>
            <div className="h-full">
                <MessageBox />
            </div>
        </Layout>
    );
}

export default App;
