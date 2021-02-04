import React from "react";
import './App.css';

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainContainer from "./components/mainContainer/mainContainer";

const App = () => {
    return (
        <div className="container">
            <main>
                <Header />
                <MainContainer />
            </main>

            <Footer />
        </div>
    );
}

export default App;