import "./HomePage.css";
import Image from "next/image";
import Link from "next/link";
import ImageListTodos from "../assets/images/listTodos.jpeg";
import ImageSearchTodo from "../assets/images/searchTodo.jpeg";
import ImageAddTodo from "../assets/images/AddTodo.jpeg";
import HtmlIcon from "../assets/icons/htlm-icon.ico";
import CssIcon from "../assets/icons/css_icon.ico";
import BootstrapIcon from "../assets/icons/bootstrap_logo_icon.ico";
import AngularIcon from "../assets/icons/angular_logo_icon.ico";
import ReactIcon from "../assets/icons/react_logo_icon.ico";
import NestJSIcon from "../assets/icons/nestjs_icon.ico";
import ImageListProducts from "../assets/images/products-list-mobile.jpeg";
import ImageShoppingCart from "../assets/images/shopping-mobile.jpeg";

export default function HomePage() {
  return (
    <>
      <h1 className="project-title">Proyectos</h1>
      <div className="project-container">
        <div className="note-container">
          <h2>Nota:</h2>
          <p>
            He realizado pequeños proyectos para mostrar en que tecnologías he
            trabajado, a continuación el detalle de ellas.
          </p>
        </div>
        <div className="project1-container">
          <div className="project-data">
            <h2 className="project-rol">Rol: FrontEnd Developer</h2>
            <p className="project-description">
              Desarrollo de una aplicación web, para la creación de lista de
              tareas para los trabajadores, utilizando Html, Css, Bootstrap y
              Angular.
            </p>
            <Link
              className="project-link"
              href="https://dcrisanto.github.io/proyect-TODO/"
            >
              Proyecto de Lista de Tareas
            </Link>
          </div>
          <div className="project-image-container">
            <div className="task-list-image-container">
              <Image
                className="list-todos"
                src={ImageListTodos}
                width={200}
                height={350}
                alt="Lista de tareas"
              />
            </div>
            <div className="task-search-image-container">
              <Image
                className="search-todo"
                src={ImageSearchTodo}
                width={200}
                height={350}
                alt="Búsqueda de tareas"
              />
            </div>
            <div className="task-add-image-container">
              <Image
                className="search-todo"
                src={ImageAddTodo}
                width={200}
                height={350}
                alt="Agregando tareas"
              />
            </div>
          </div>
          <div className="technology-container">
            <h2>Tecnologías</h2>
            <div className="technologies-icon-container">
              <Image
                className="html-icon"
                src={HtmlIcon}
                width={50}
                height={50}
                alt="Ícono html"
              />
              <Image
                className="css-icon"
                src={CssIcon}
                width={50}
                height={50}
                alt="Ícono css"
              />
              <Image
                className="bootstrap-icon"
                src={BootstrapIcon}
                width={50}
                height={50}
                alt="Ícono bootstrap"
              />
              <Image
                className="angular-icon"
                src={AngularIcon}
                width={50}
                height={50}
                alt="Ícono angular"
              />
            </div>
          </div>
        </div>
        <div className="project2-container">
          <div className="project-data">
            <h2 className="project-rol">Rol: FrontEnd Developer</h2>
            <p className="project-description">
              Desarrollo de una aplicación web, para la creación de un carrito
              de compras, utilizando Html, Css y React.
            </p>
            <Link
              className="project-link"
              href="https://react-shop-nextjs.vercel.app/"
            >
              Proyecto de Carrito de Compras
            </Link>
          </div>
          <div className="project-image-container">
            <div className="list-products-image-container">
              <Image
                className="list-products"
                src={ImageListProducts}
                width={250}
                height={300}
                alt="Lista de productos disponibles"
              />
            </div>
            <div className="shopping-cart-image-container">
              <Image
                className="shopping-cart"
                src={ImageShoppingCart}
                width={250}
                height={300}
                alt="Productos en el carrito de compras"
              />
            </div>
          </div>
          <div className="technology-container">
            <h2>Tecnologías</h2>
            <div className="technologies-icon-container">
              <Image
                className="html-icon"
                src={HtmlIcon}
                width={50}
                height={50}
                alt="Ícono html"
              />
              <Image
                className="css-icon"
                src={CssIcon}
                width={50}
                height={50}
                alt="Ícono css"
              />
              <Image
                className="angular-icon"
                src={ReactIcon}
                width={50}
                height={50}
                alt="Ícono angular"
              />
            </div>
          </div>
        </div>
        <div className="project3-container">
          <div className="project-data">
            <h2 className="project-rol">Rol: FullStack Developer</h2>
            <p className="project-description">
              Desarrollo de apis, utilizando nodeJS y NestJS.
            </p>
            <Link
              className="project-link"
              href="https://platzi-store-dcrisanto-ade68512427e.herokuapp.com/docs"
            >
              Proyecto creación de apis para carrito de compras, utilizando
              NestJS.
            </Link>
          </div>
          <div className="technology-container">
            <h2>Tecnologías</h2>
            <div className="technologies-icon-container">
              <Image
                className="nestJS-icon"
                src={NestJSIcon}
                width={50}
                height={50}
                alt="Ícono nestJS"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
