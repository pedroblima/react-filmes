import Galeria from '@/components/Galeria'
import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Detalhes = ({ filme, atores }) => {
  return (
    <Pagina titulo={filme.title}>
      <Row>
        <Col md={3}>
          <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + filme.poster_path} />
        </Col>
        <Col md={9}>
          <p><strong>Orçamentos: </strong>{filme.budget}</p>
          <p><strong>Data de Lançamentos: </strong>{filme.release_date}</p>
          <p><strong>Duração: </strong>{filme.runtime} min</p>
          <p><strong>Nota: </strong>{filme.vote_average}</p>


          <div>
            <strong>Generos:</strong>
            <ul>
              {filme.genres.map(item => (
                <li>{item.name}</li>
              ))}
            </ul>
          </div>

          <p>{filme.overview}</p>
        </Col>
      </Row>
        
        <h2>Atores</h2>
        
        <Galeria titulo='Atores' lista={atores} foto="profile_path" link="/atores/"/>
    </Pagina>

  )
}

export default Detalhes

export async function getServerSideProps(context) {

  const id = context.params.id

  const resultado = await apiFilmes.get('/movie/' + id)
  const filme = resultado.data

  const resAtores = await apiFilmes.get('/movie/' + id + '/credits')
  const atores = resAtores.data.cast




  return {
    props: { filme, atores },
  }
}