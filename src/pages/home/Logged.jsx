import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbarlogged from "../../components/navbar/Navbarlogged";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Logged = () => {
    return (
        <div>
            <Navbarlogged />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">지역별 경기장 보기</h1>
                <PropertyList />
                <h1 className="homeTitle">추천 경기장</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Logged