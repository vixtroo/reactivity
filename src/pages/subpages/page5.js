import Footer from "@components/footer/footer"
import Motto from "@components/motto/motto"
import Title from "@components/title"

export default function App(){
    return (
        <div style={{height: '1000px', display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
            <Title name="Vincent Castro" course="BSIT"/>
            <Motto motto="to appear disappear wanhap wanport wanport wanhap disappear appear"/>
            <Footer contact="09672960756" address="Jan Lang St. Dun Banda City"/>
        </div>
    )
}