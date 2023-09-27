import "./Header.css";
import Image from "next/image";
import miImagen from "../assets/images/my-image.jpg";
export default function Header() {
  return (
    <>
      <header>
        <div className="background-my-image"></div>
        <di className="container-my-image">
          <Image
            className="my-image"
            src={miImagen}
            width={100}
            height={100}
            alt="mi imagen"
          />
        </di>
        <div className="presentation-container">
          <h1>Dorelly del Rosario Crisanto Silupú</h1>
          <h2>FrontEnd Developer</h2>
          <p className="presentation-paragraph">
            Estudié Ing. Electrónica y Telecomunicaciones, por 4 años ejercí mi
            carrera, pero hace aproximadamente 3 años me llamó la atención el
            mundo de desarrollo web, por lo que desde el momento comencé a
            estudiar para ingresar en el mundo digital y gracias a ello he
            trabajado en el desarrollo de páginas web y la implementación de
            servicios.
          </p>
          <p className="place-birth">Nacimiento: Sullana, Piura, Perú</p>
          <p className="place-residence">Residencia: Ate, Lima, Perú</p>
        </div>
      </header>
    </>
  );
}
