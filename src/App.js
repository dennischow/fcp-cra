import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppHeader from "./components/app-header/app-header.component";
import AppFooter from "./components/app-footer/app-footer.component";

function App() {
    return (
        <div className="app-view">
            <AppHeader />
            <main className="app-main">
                <div className="container-fluid">
                    Body
                </div>
            </main>
            <AppFooter />
        </div>
    );
}

export default App;
