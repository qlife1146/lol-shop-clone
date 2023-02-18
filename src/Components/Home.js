import Banner from "./mainComponents/Banner";
import HotItem from "./mainComponents/HotItem";
import ChampionGrid from "./detailComponents/ChampionGrid";
export default function Home() {
    return (
        <div>
            {/* <Banner /> */}
            <ChampionGrid />
            <HotItem />
        </div>
    );
}
