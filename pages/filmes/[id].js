import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Detalhes = ({ filme }) => {
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

    </Pagina>

  )
}

export default Detalhes

export async function getServerSideProps(context) {

  const id = context.params.id

  const resultado = await apiFilmes.get('/movie/' + id)
  const filme = resultado.data

  return {
    props: { filme },
  }
}