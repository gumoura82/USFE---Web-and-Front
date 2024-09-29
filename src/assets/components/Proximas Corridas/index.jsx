import MiniCard from "../Mini-Card"

export default function ProximasCorridas(){
    const dadoscorridas = [
        {
            titulo:'E-Prix de Nova York',
            descricao:'12 a 13 de junho de 2022'
        },
        {
            titulo:'E-Prix de Londres',
            descricao:'23 a 24 de julho de 2022'
        },
        {
            titulo:'E-Prix de Berlim',
            descricao:'13 a 14 de agosto de 2022'
        },
        {
            titulo:'E-Prix de São Paulo',
            descricao:'18 a 19 de dezembro de 2022'
        }
    ]
    
    return (
        <MiniCard props={dadoscorridas}/>
    )
}