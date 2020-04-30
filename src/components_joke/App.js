import React from 'react'

import Joke from './Joke'
import jokesData from './JokesData'

function App() {

    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />)
    // const nums = [1,2,3,4,5,6,7,8]
    // const doubles = nums.map((num) => (num*2))
    // console.log(doubles)

    return (
        
        <div>
            {jokeComponents}
        </div>




        // <div>
        //     <Joke
        //         //question="Name boy!"
        //         punchline="Go away!"    
        //     />
        //     <Joke
        //         question="Good man!"
        //         punchline="No man!"
        //     />
        //     <Joke
        //         question="Write boy!"
        //         punchline="Right boy!"
        //     />
        //     <Joke
        //         question="true Boy!"
        //         punchline="Come boy!"
        //     />
        //     <Joke
        //         question="Sue boy!"
        //         punchline="Sew Boy!"
        //     />
        // </div>
    )
}

export default App