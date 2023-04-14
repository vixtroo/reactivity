import Heading from "@components/heading/heading"
import Motto from "@components/motto/motto"
import Title from "@components/title"

export default function App(){
    return (
        <div style={{height: '1000px', display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
            <Title name="Vincent Castro" course="BSIT"/>
            <Heading age="22" status="nagmamahal"/>
            <Motto motto="to appear disappear wanhap wanport wanport wanhap disappear appear"/>
        </div>
    )
}