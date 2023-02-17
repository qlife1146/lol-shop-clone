// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Menu from "./Components/mainComponents/Menu";

import ChampionGrid from "./Components/detailComponents/ChampionGrid";
import SkinGrid from "./Components/detailComponents/SkinGrid";

import F0FError from "./Components/mainComponents/F0FError";
import MyPage from "./Components/myPage/MyPage";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import ChampionDetail from "./Components/detailComponents/ChampionDetail";
import SkinDetail from "./Components/detailComponents/SkinDetail";
import champList from "./data/champion";
import useSkins from "./data/useSkins";
import { useState } from "react";

function App() {
    const [champData] = useState(champList);
    const skinData = useSkins();
    console.log("APP:", skinData);
    return (
        <div
            className="App"
            style={{
                background: `url(
                    ${process.env.PUBLIC_URL}/images/bg.jpg
                )`,
            }}
        >
            <Header />
            <Menu />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Home />}
                />
                <Route
                    path={"/champions"}
                    element={<ChampionGrid />}
                />
                <Route
                    path="/skins"
                    element={<SkinGrid />}
                />
                <Route
                    path="/champions/:id"
                    element={<ChampionDetail data={champData} />}
                />
                <Route
                    path="/skins/:id"
                    element={
                        <SkinDetail
                            data={skinData}
                            sub={champData}
                        />
                    }
                />
                <Route
                    path="*"
                    element={<F0FError />}
                />
                <Route
                    path="/mypage"
                    element={<MyPage />}
                />
            </Routes>
            <Footer />
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </div>
    );
}

export default App;
