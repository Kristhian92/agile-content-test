import Styles from "../Homepage/Homepage.module.css";
import imagen from "../../assets/apps.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
 const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  

 const searchAnimal = async (name) => {
   try {
     const response = await axios.get("https://api.api-ninjas.com/v1/animals", {
       headers: { "X-Api-Key": "i3jBSnhMFNu/gLWD+ctLTA==YfIR4a01e39XmjIE" },
       params: { name },
     });
     navigate("/results", { state: response.data });
   } catch (error) {
     console.error("Error: ", error.response.data);
   }
 };

 const handleSearch = () => {
  //  console.log(searchAnimal);
   searchAnimal(searchTerm);
   
 };

  return (
    <>
      <div data-testid="homepage" className={Styles.container}>
        <div className={Styles.image}>
          <div className={Styles.containerImg}>
            <a href="#">Gmail</a>
            <a href="#">Imágenes</a>
            <button className={Styles.appsButton}>
              <img className={Styles.apss} src={imagen} />
            </button>
            <div className={Styles.circle}></div>
          </div>
          <div className={Styles.inputContainer}>
            <form onSubmit={handleSearch}>
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={Styles.inputPortada}
                type="search"
                data-testid="search-input"
              ></input>
            </form>
          </div>
          <div>
            <button
              type="submit"
              onClick={handleSearch}
              className={Styles.buttonPortada}
              data-testid="search-button"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


