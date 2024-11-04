import {useEffect, lazy, Suspense} from "react";
import "./App.scss";
import {useDispatch} from "react-redux";
import {fetchMultiplePokemonById} from "./RTK/thunk";
import {Route, Routes, Link} from "react-router-dom";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorite = lazy(() => import("./pages/Favorite"));
const Select = lazy(() => import("./pages/Select"));
const Input = lazy(() => import("./components/Input"));
const GenusSelect = lazy(() => import("./components/GenusSelect"));

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMultiplePokemonById(151));
    }, []);

    return (
        <>
            <h1 className="text-[40px] text-center py-[10px]">포켓몬 도감</h1>
            <nav className="flex gap-[20px] justify-center py-[10px]">
                <Link to={"/"}>메인</Link>
                <Link to={"favorite"}>찜목록</Link>
                <Input />
                <GenusSelect />
            </nav>
            <main className="flex flex-wrap gap-[20px] justify-center pt-[20px]">
                <Suspense fallback={<div>로딩중...</div>}>
                    <Routes>
                        <Route
                            path={"/"}
                            element={<Main />}
                        ></Route>
                        <Route
                            path={"/detail/:pokemonId"}
                            element={<Detail />}
                        ></Route>
                        <Route
                            path={"/search"}
                            element={<Search />}
                        ></Route>
                        <Route
                            path={"/favorite"}
                            element={<Favorite />}
                        ></Route>
                        <Route
                            path={"/select"}
                            element={<Select />}
                        ></Route>
                    </Routes>
                </Suspense>
            </main>
        </>
    );
}

export default App;
