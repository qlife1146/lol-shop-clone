import { useState, useEffect } from "react";
import champ from "./champion";

const useSkins = () => {
    const [skins, setSkins] = useState([]);
    useEffect(() => {
        const skins = champ
            .filter((champ) => champ.skin && champ.skin.length > 0)
            .flatMap((champ) => champ.skin.map((skin) => ({ ...skin, championId: champ.id, championName: champ.name })))
            .flat();
        setSkins(skins);
    }, []);
    return skins;
};

export default useSkins;
