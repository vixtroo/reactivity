import Paragraph from "@components/body/paragraph"
import Footer from "@components/footer/footer"
import Heading from "@components/heading/heading"
import Motto from "@components/motto/motto"
import Title from "@components/title"
// import "@/styles/global.scss"

export default function App() {
    return (
        <div style={{ height: '1000px', display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
            <Title name="Vincent Castro" course="BSIT" />
            <Heading age="22" status="nagmamahal" />
            <Paragraph stan="Jisoo" game="Saksakan" />
            <Motto motto="to appear disappear wanhap wanport wanport wanhap disappear appear" />
            <Footer contact="09672960756" address="Jan Lang St. Dun Banda City" />
        </div>
    )
}