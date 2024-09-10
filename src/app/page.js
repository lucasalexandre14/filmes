'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Cabecalho from "./components/Cabecalho";
import { Button } from "react-bootstrap";
import Link from "next/link";
import Pagina from "./components/Pagina";

export default function Home() {
  return (
    <Pagina titulo="Pagina Principal">
      <Button variant="danger">Primary</Button>{' '}
      <Cabecalho titulo="Pagina inicial" subtitulo="subtitulo"/>
      <Cabecalho titulo="Titulo 1" subtitulo="Lucas Alexandre"/>
      <Cabecalho titulo="Titulo 2" subtitulo="Lucas Alexandre"/>
      <Cabecalho titulo="Titulo 4" subtitulo="Lucas Alexandre"/>
      <Cabecalho titulo="Titulo 4" subtitulo="Lucas Alexandre"/>
      <Link href="/filmes">Página Filmes</Link>
      <Link href="/disney">Página Disney</Link>
    </Pagina>
  );
}
