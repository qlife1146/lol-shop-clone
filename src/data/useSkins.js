import { useState, useEffect } from "react";
import champ from "./champion";

const useSkins = () => {
    const [skins, setSkins] = useState([]);
    useEffect(() => {
        const skins = champ
            .filter((champ) => champ.skin && champ.skin.length > 0)
            // .map((champ) => champ.skin)
            .flatMap((champ) => champ.skin.map((skin) => ({ ...skin, championId: champ.id })))
            .flat();
        setSkins(skins);
    }, []);
    return skins;
};

export default useSkins;
