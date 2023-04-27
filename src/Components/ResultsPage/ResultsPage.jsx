import { useLocation } from "react-router-dom";
// import Styles from "../Homepage/Homepage.module.css";
import Styles2 from "../ResultsPage/ResultsPage.module.css";
import imagen from "../../assets/apps.svg";
import imagen2 from "../../assets/google3.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ResultsPage() {
  const location = useLocation();
  const searchResult = location.state;
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [showCard, setShowCard] = useState(false);
  const [inputIsEmpty, setInputIsEmpty] = useState(false);

  const handleClick = () => {
    setShowCard(!showCard);
  };

  const handleSearchInputChange = (e) => {
    if (e.target.value === "") {
      setInputIsEmpty(true);
    } else {
      setInputIsEmpty(false);
    }
    setSearchTerm(e.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      setInputIsEmpty(true);
    } else {
      setInputIsEmpty(false);
    }

    if (!searchTerm.trim()) {
      setInputIsEmpty(true);
    } else {
      setInputIsEmpty(false);
      searchAnimal(searchTerm);
    }
  };

  const searchAnimal = async (name) => {
    try {
      const response = await axios.get(
        "https://api.api-ninjas.com/v1/animals",
        {
          headers: {
            "X-Api-Key": "i3jBSnhMFNu/gLWD+ctLTA==YfIR4a01e39XmjIE",
          },
          params: { name },
        }
      );
      
    
      navigate("/results", { state: response.data });
      setInputIsEmpty(false);
    } catch (error) {
      console.error("Error: ", error.response.data);
    }
  };

  const repeatCount = 10;

  return (
    <>
      <div data-testid="results-page" className={Styles2.container}>
        <div className={Styles2.containerImag}>
          <a href="/">
            <img className={Styles2.imagen} src={imagen2} />
          </a>
        </div>
        <div className={Styles2.containerImg}>
          <div className={Styles2.containerSearch}>
            <form onSubmit={handleSearch}>
              <input
                value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                onChange={handleSearchInputChange}
                className={Styles2.inputPortada}
                type="search"
                data-testid="search-input"
              ></input>
            </form>
          </div>
          <a href="#">Gmail</a>
          <a href="#">Imágenes</a>
          <button className={Styles2.appsButton}>
            <img className={Styles2.apss} src={imagen} />
          </button>
          <div className={Styles2.circle}></div>
        </div>
      </div>
      <div>
        {inputIsEmpty ? (
          <p>
            Please enter a search term, such as &ldquo;lion,&rdquo;
            &ldquo;fish,&rdquo; or &ldquo;cheetah.&rdquo;
          </p>
        ) : searchResult.length > 0 ? (
          <>
            {[...Array(repeatCount)].map((_, index) => (
              <div key={index}>
                <p style={{ textDecoration: "underline", cursor: "pointer" }}>
                  https://api-ninjas.com/api/animals
                </p>
                <h2 onClick={handleClick}>{searchResult[0].name}</h2>
                <p>
                  {searchResult[0].name} is an animal found in{" "}
                  {searchResult[0].locations.join(", ")} their characteristics
                  are: Prey: {searchResult[0].characteristics.prey}, Name of
                  Young: {searchResult[0].characteristics.name_of_young}
                </p>
              </div>
            ))}
            {showCard || (
              <div className={Styles2.card}>
                <img
                  src="https://source.unsplash.com/random/400x200"
                  alt="Random image"
                />
                <div className={Styles2.cardContent}>
                  <p style={{ textDecoration: "underline", cursor: "pointer" }}>
                    https://api-ninjas.com/api/animals
                  </p>
                  <h2>{searchResult[0].name}</h2>
                  <p>
                    {searchResult[0].name} is an animal found in{" "}
                    {searchResult[0].locations.join(", ")} their characteristics
                    are: Prey: {searchResult[0].characteristics.prey}, Name of
                    Young: {searchResult[0].characteristics.name_of_young}
                  </p>
                </div>
              </div>
            )}
          </>
        ) : (
          <p>
            No results found for &ldquo;{searchTerm}&rdquo;. Try looking for
            &ldquo;lion,&rdquo; &ldquo;fish,&rdquo; or &ldquo;cheetah.&rdquo;
          </p>
        )}
      </div>
    </>
  );
}
