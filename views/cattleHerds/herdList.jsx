// DEPENDENCIES
const React = require('react');
const Def = require('../default');

// function cattleHerds(data){
function cattleHerds(data){
    //formats data into HTML so page can display it
    let cattleHerdsFormatted = data.cattleHerd.map((cattleHerd) => {
        return (
            <div className='col-sm-6' style={{margin: '15px 0px 15px 0px '}}>
                <h2>
                    <a href={`./HerdList/${cattleHerd.id}`}>
                        {cattleHerd.name}
                    </a>
                </h2>
            </div>
        )
    })

    return (
        <Def>
            <main>
                <h1>CATTLE HERDS</h1>
                <div className='row' style={{display: 'inline-flex'}}>
                    {cattleHerdsFormatted}  
                </div>
                <div>
                {/* BUTTONS */}
                    <div>
                        <div style={{display: 'inline-flex',}}>
                        {/* NEW BUTTON */}
                            <div>
                                <a href={`./HerdList/new`} className="btn btn-warning"> New Herd </a>  
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Def>
    )
}

// EXPORTS
module.exports = cattleHerds









                {/* <h3><a href={`/cattleHerds/${cattleHerds.cattle_herd_id}`}>
                    {cattleHerds.name}
                </a></h3> */}
                {/* <img className='mockImg' src={pokemon.image} alt={pokemon.name}></img>
                <img src={pokemon.sprite} alt={pokemon.sprite}></img> */}

                               {/* <div>
                    <a href={`./HerdList/new`} className="btn btn-warning"> New Herd </a>  
                    <form method="POST" action={`/cattleHerds/${data.cattleHerd.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger"> Delete </button>
                    </form>  
                </div>    */}