import React, { useEffect, useState} from 'react';
import SideNav from '../components/SideNav'
import '../css/TheOffice.css'

function TheOffice(){

    const [quotes, setQuotes] = useState(); //Array that holds all quotes
    const [quote, setQuote] = useState();   //Holds the current Quote
    const [load, setLoad] = useState(false); //Tells if api were loaded
    const [characterId, setCharacterId] = useState(); //Holds the current character id
    const [filterQuotes, setFilterQuotes] = useState(); //Array holds quotes filtered by character
    const [isFilter, setIsFilter] = useState(false); //Toggle if using filter quotes or not
    const [quoteCounter, setQuoteCounter] = useState(0); //Quote counter for filter quotes
    const [characters, setCharacters] = useState([]);
    const [showCharacters, setShowCharacters] = useState(false); //Toggle to show character list


    useEffect(() =>{
        //fetch All Quotes
        const fetchQuotes = async() =>{
            const result = await fetch('/quotes').then(response => response.json());
            setQuotes(result)
        };
        const fetchCharacters = async() =>{
            const result = await fetch('/characters').then(response => response.json());
            setCharacters(result.data)
        }
        fetchQuotes();
        fetchCharacters();
    },[])

    useEffect(() => {
        
        var uniqueCharacters = [];
        if(quotes){
            getRandomQuote();
            setLoad(true); 

            uniqueCharacters = Array.from(new Set(quotes.data.map(a => a.character._id)))
            .map(id => {
                return quotes.data.find(a => a.character._id === id)
            })
        }
        setCharacters(uniqueCharacters);
    },[quotes])

    useEffect(()=>{

        if(isFilter){
            setQuoteCounter(0);
            var filteredQuotes;
            var p1 = new Promise (
                function(resolve, reject){
                    console.log(characterId);
                    filteredQuotes = quotes.data.filter(quote => quote.character._id === characterId)
                    resolve(filteredQuotes);
                    
                }
            )
            p1.then(() => setFilterQuotes(filteredQuotes))
            .then(() => {
                setQuote(filteredQuotes[generateIndex(filteredQuotes)])
            })
        }else{
            if(quotes){
            setQuote(quotes.data[generateIndex(quotes.data)]);
        }
    }
    },[characterId, isFilter, quotes])

    function getRandomQuote(){
        if(isFilter){
            setQuote(filterQuotes[quoteCounter])
            if(quoteCounter === (filterQuotes.length - 1)){
                setQuoteCounter(0);
                console.log("here" + quoteCounter);
                
            }else{
                setQuoteCounter(quoteCounter + 1);
            }
        }else{
            setQuote(quotes.data[generateIndex(quotes.data)]);
        }
    }
    function generateIndex(quot){
        return Math.floor(Math.random() * quot.length);
    }
    // function showList(){
    //     setshowCharacters(!showCharacters);
    // }

    function nextQuote(quoteArr){

    }

        return(
            <div className="theOffice">
                <h1 className="h1A">LABORATORY</h1>
                <div className="mt-5  margin-bottom container text-center">
                    <h2>The Office Api</h2>
                    <p>Here you will find quotes from the tv series The Office. The quotes can be generated randomly or they can be filtered by character </p>
                {load? 
                    <div>
                        <div className="quoteCard">
                            <div className="quote"><p>"{quote.content}"</p></div>
                            <p className="quoter">-{quote.character.firstname} {quote.character.lastname}</p>
                        </div>
                        <button onClick={getRandomQuote}> Next </button>
                        <br/>
                        {isFilter? <button onClick={(() => setShowCharacters(!showCharacters))}>{quote.character.firstname} {quote.character.lastname} &#x25BC;</button> 
                        : <button onClick={(() => setShowCharacters(!showCharacters))}>Random &#x25BC;</button>}
                        
                    </div>
                    : <p>loading...</p>}
                {isFilter && filterQuotes?
                    <p>{quoteCounter + 1} / {filterQuotes.length}</p>
                : null}
                
                {showCharacters && characters?

                        <ul className="charList">
                            <li><button onClick={() => {setShowCharacters(false); setCharacterId(""); setIsFilter(false)}}>Random</button></li>
                        {characters.map(character=>(
                            <li><button onClick={() => {setShowCharacters(false); setCharacterId(character.character._id); setIsFilter(true)}}>{character.character.firstname} {character.character.lastname} </button></li>
                        ))}

                    </ul>

                : null}
                    
                    <SideNav/>
                </div>
                <div className="menu">
                    
                </div>
            </div>
        );   
    }
    
    export default TheOffice;