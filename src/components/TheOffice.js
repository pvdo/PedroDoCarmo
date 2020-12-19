import React, { useEffect, useState} from 'react';
import SideNav from '../components/SideNav'
import '../css/TheOffice.css'
import axios from 'axios'

function TheOffice(){

    const [quotes, setQuotes] = useState(); //Array that holds all quotes
    const [quote, setQuote] = useState();   //Holds the current Quote
    const [load, setLoad] = useState(false); //Tells if api were loaded
    const [characterId, setCharacterId] = useState(); //Holds the current character id
    const [filterQuotes, setFilterQuotes] = useState(); //Array holds quotes filtered by character
    const [isFilter, setIsFilter] = useState(false); //Toggle if using filter quotes or not
    const [quoteCounter, setQuoteCounter] = useState(0); //Quote counter for filter quotes
    const [characters, setCharacters] = useState([]); //Holds one quote from each character
    const [showCharacters, setShowCharacters] = useState(false); //Toggle to show character list
    const [highlighId, setHighlighId] = useState(); //Highlight the characters clicked

    /*
    ** It happen just when it is mounted
    ** fetch All Quotes from https://www.officeapi.dev
    ** Assign values fetched to quotes
     */
    useEffect(() =>{
        
        const fetchQuotes = async() =>{
            const result = await axios.get('https://cors-anywhere.herokuapp.com/https://www.officeapi.dev/api/quotes/');
            setQuotes(result.data)
        };

        fetchQuotes();
    },[])

    /*
    ** Happen every time quotes are updated
    ** The load variable is set to true, allowing to show the content
    ** Assign value from the array quotes to the array characters 
    */
    useEffect(() => {
        console.log(quotes);
        var uniqueCharacters = [];
        if(quotes){
            generateQuote();
            setLoad(true); 

            //Filter quotes with one quote from each character
            uniqueCharacters = Array.from(new Set(quotes.data.map(quote => quote.character._id)))
            .map(id => {
                return quotes.data.find(a => a.character._id === id)
            })
        }
        setCharacters(uniqueCharacters);
    },[quotes])

    /*
    ** Happen every time character Id is changed;
    ** Set a new array of filtered quotes by character id;
    ** Set the current quote filtered or not;
    */
    useEffect(()=>{
        if(isFilter){
            setQuoteCounter(0);
            var filteredQuotes;
            var filterPromise = new Promise (
                function(resolve, reject){
                    console.log(characterId);
                    filteredQuotes = quotes.data.filter(quote => quote.character._id === characterId)
                    resolve(filteredQuotes);
                    
                }
            )
            filterPromise.then(() => setFilterQuotes(filteredQuotes))
            .then(() => {
                setQuote(filteredQuotes[generateIndex(filteredQuotes)])
            })
        }else{
            if(quotes){
            console.log(quotes.data);
            setQuote(quotes.data[generateIndex(quotes.data)]);
        }
    }
    },[characterId, isFilter, quotes])

    /*
    ** Generate a random quote or a filtered quote
    */
    function generateQuote(){
        if(isFilter){
            setQuote(filterQuotes[quoteCounter])
            if(quoteCounter === (filterQuotes.length - 1)){
                setQuoteCounter(0);
                console.log("here" + quoteCounter);
                
            }else{
                setQuoteCounter(quoteCounter + 1);
            }
        }else{
            console.log(quotes.data)
            setQuote(quotes.data[generateIndex(quotes.data)]);
        }
    }

    /*
    ** Calculate a random number for the quotes array index
    */
    function generateIndex(quot){
        return Math.floor(Math.random() * quot.length);
    }

        return(
            <div className="theOffice">
                <h1 className="h1A">LABORATORY</h1>
                <div className="mt-5  margin-bottom container text-center">
                    <h2>The Office - Api</h2>
                    <p>Here you will find quotes from the tv series The Office. The quotes can be generated randomly or they can be filtered by character </p>
                    <small>Api website: <a className="aColor" href="https://www.officeapi.dev">https://www.officeapi.dev</a></small>
                {load? 
                    <div>
                        <div className="quoteCard">
                            <div className="quote"><p>"{quote.content}"</p></div>
                            <p className="quoter">-{quote.character.firstname} {quote.character.lastname}</p>
                        </div>
                        <button className="normalButton" onClick={generateQuote}> Next </button>
                        <br/>
                        {isFilter? <button className="normalButton" onClick={(() => setShowCharacters(!showCharacters))}>{quote.character.firstname} {quote.character.lastname} &#x25BC;</button> 
                        : <button className="normalButton" onClick={(() => setShowCharacters(!showCharacters))}>Random &#x25BC;</button>}
                        
                    </div>
                    : <p>loading...</p>}
                {isFilter && filterQuotes?
                    <p>{quoteCounter + 1} / {filterQuotes.length}</p>
                : null}
                
                {showCharacters && characters?

                        <ul className="charList">
                            <li><button className="normalButton" onClick={() => {setShowCharacters(false); setCharacterId(""); setIsFilter(false)}}>Random</button></li>
                        {characters.map(character=>(
                            <li><button className={highlighId === character.character._id? 'clickedButton' : 'normalButton'}
                                onClick={() =>{setHighlighId(character.character._id); setShowCharacters(false); setCharacterId(character.character._id); setIsFilter(true)}}>
                                {character.character.firstname} {character.character.lastname} </button></li>
                        ))}

                    </ul>

                : null}
                    
                    
                </div>
                <br/>
                <SideNav/>

            </div>
        );   
    }
    
    export default TheOffice;