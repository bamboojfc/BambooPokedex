import React from 'react'
import ReactDOM from 'react-dom'

//USE () == AUTO RETURN
const Header = (t) => (
        
    <h2>{t.title}</h2>
        
)

const Content = (m) => (
    <section> 
        <h3> {m.msg1} </h3>
        <h4> {m.msg2}  </h4>
    </section>
)

const Content2 = (pok) => {
    return(
        <section>
            {pok.pokes.pokemons.map(i => (<ShowPokemon p={i}/>))}
        </section>
    )
}

const ShowPokemon = (props) => (
    
    <section id="pokeBorder">
       
        <img src = {props.p.img} alt={props.p.name} height="150" width="170" />
        <p>name : {props.p.name}</p>
        <p>name : {props.p.CP}</p> 
        <p>name : {props.p.Stardust}</p>
        <p>name : {props.p.BellsproutCandy}</p> 
        <hr/>
    </section>

)


const App = () => {
    //combine many modules to App

    const myTitle ="Bamboo's Pokemon";
    const pokemon = {
        'pokemons':[
            {
                name            : 'Pikachu' ,
                CP              : 798 ,
                Stardust        : 49755 ,
                BellsproutCandy : 25 ,
                img             : 'img/pikachu.jpg'
            },
            {
                name            : 'Magmar' ,
                CP              : 1104 ,
                Stardust        : 49855 ,
                BellsproutCandy : 6 ,
                img             : 'img/Magmar.png'
            },
            {
                name            : 'Slowpoke' ,
                CP              : 1298 ,
                Stardust        : 49855 ,
                BellsproutCandy : 37 ,
                img             : 'img/slowpoke.png'
            },
            {
                name            : 'Gloom' ,
                CP              : 2781 ,
                Stardust        : 49855 ,
                BellsproutCandy : 17 ,
                img             : 'img/Gloom.png'
            },
            {
                name            : 'Seel' ,
                CP              : 578 ,
                Stardust        : 49755 , 
                BellsproutCandy : 10 ,
                img             : 'img/seel.png'
            }
        ]
    }

    return (
        <section> 
        <center>
            <Header title={myTitle}/>
            <Content msg1 = "Hello!" msg2 = "Welcome to Bamboo's pokemon world"/>
            <hr/>
            <Content2 pokes = {pokemon}/>
        </center>
        </section>
    )
}

const element = document.getElementById('pokemon');
ReactDOM.render(<App/>,element); //render APP module and add it to element