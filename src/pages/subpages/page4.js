import Paragraph from "@components/body/paragraph"
import Footer from "@components/footer/footer"
import Title from "@components/title"

export default function App(){
    return (
        <div style={{height: '1000px', display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
            <Title name="Vincent Castro" course="BSIT"/>
            <Paragraph stan="Jisoo" game="Saksakan"/>
            <Footer contact="09672960756" address="Jan Lang St. Dun Banda City"/>
        </div>
    )
}