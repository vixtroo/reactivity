import Paragraph from "@components/body/paragraph"
import Footer from "@components/footer/footer"
import Heading from "@components/heading/heading"

export default function App(){
    return (
        <div style={{height: '1000px', display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
            <Paragraph stan="Jisoo" game="Saksakan"/>
            <Heading age="22" status="nagmamahal"/>
            <Footer contact="09672960756" address="Jan Lang St. Dun Banda City"/>
        </div>
    )
}