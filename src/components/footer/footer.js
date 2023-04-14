export default function Footer({contact, address}){
    return (
        <div style={{display: 'flex', flexDirection: 'column',flexWrap: 'wrap', color:'purple'}}>
            <p style={{marginBottom: '10px'}}>Contact Number: {contact}</p>
            <p>Address: {address}</p>
        </div>
    )
}