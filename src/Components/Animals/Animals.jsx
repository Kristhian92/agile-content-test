export default function Animals(props) {
      
    const handleClick = (description, imageURL) => {
        props.onAnimalClick(description, imageURL);
      };

      return (
        <div>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <button
            onClick={() => handleClick(props.description, props.imageUrl)}
          >
            Show Image
          </button>
        </div>
      );
}