import React from "react";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainContainer from "./components/mainContainer/mainContainer";

import './App.css';

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
