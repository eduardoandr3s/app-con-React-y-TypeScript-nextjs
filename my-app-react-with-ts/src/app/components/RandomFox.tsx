//generate a random function to get a random number between 1 and 123

type Props ={image: string}


export const RandomFox = ({image} : Props): JSX.Element => {

  

    return <img width={320} height='auto' src={image} alt="Random Fox" className="rounded-md"/>
};


