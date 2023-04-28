import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Galeria = (props) => {

  const size = props.size || 2
  const link = props.link || '/filmes/'

  return (
    <>
      {
        props.titulo &&
        <h2 className='mt-3'>Titulo:{props.titulo}</h2>
      
      } 
        
      <Row>
        {props.lista.map(item => (
          <Col className='mb-3' md={size}>
            <Link href={link + item.id}>
              {
                item[props.foto]
                ?
                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item[props.foto]} />
                :
                <Card.Img variant="top" src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAB/CAMAAAC31U6LAAAAYFBMVEURERH///8AAAALCwuGhoaPj48dHR3V1dWioqKXl5empqYGBgYpKSnPz8/Ly8vp6elYWFjz8/NOTk43NzcwMDC7u7vh4eG1tbV0dHTDw8N+fn5ra2sXFxdCQkJhYWGvr6/WcagZAAACw0lEQVRoge2W25KjIBBAYwOieL/hJTH5/78cutHEZPdBsi9bU31qaoKAR2ka8HJhGIZhGIZhGIZhGIb51QAhPq4PFUjmK0PVV5MkibmJ3XwfbWULmR9FsFKnOkwu4iZCYu+GTkeeZjqIoKA6GeaGMTq4YW2iJ8vTBFP0hRva6OAWmcWykYbquk0lbs1X7sqNvtrdoDAYPU4a2oZNBQ93YUPdJEvKzS0EPoXiDDU+JRfPsWkV6Baxu6ECvblJUlH2QYyPuaJLUPuaBrqhJMHTjfePgLo7RdjQECSVAt1wdf1neLkHfz+An0vXtiVpdQl0C5rIWLzcOIw7vHK8cC6YaWyBbno7l8QvNxZaWFBbYSQ0+El17x/mhtXf/ekeKBo33yqgwXzJQt1o6kH4mNxcetDKbvwiofct9lC4TnvhlBoHnYg8zwW6uzy/UbwxHquLwUKx6OntXadb4koqzuMz8l30YqL1F0UP3EtpMnzmvTGeCcvf3PiuzdUvHk0586W7+NPd4Q/tULREm/hb96Q2JC5vpdI1o7G4CXSnjPXBqdO9EzYNSt1PpQo8QY/TZT6ZI33vrljV9Nmhk8+T0GON3NvZYN5idOyURMHnzrtbvORvZ9r37rEo9Ja3AuoZdxlr8ncPSF3oa7D78vbJAHDr1v7zG2KbnmD1JyLLTq3sX8meuplw4aX/cKj1Sx+y52VIwMGWUuqxLpNa69UOdVniSZGatNW6ni1eqMJdlJOcpL0kugzYwLvSwqyKFuQC1dJrlThdYs04XZMVdw5I0nXo0lEuykqjoTrtrh55BUXcVr2SYOtYz263ALM0Ri5pO5Db1ENrHkqmpnzozJ52DwCyVMv8gGWCYqjHfsSYxHot57xN0K1qaItHPw9tuqTFfP5DFvaJu9AfzhvW0qQJKm8Nz/n898XDMAzDMAzDMAzDMAzzn/IDw8Mf2XGx8NUAAAAASUVORK5CYII="} />
              }
            </Link>
          </Col>
        ))}
      </Row>



      <h2 className='mt-3'>{props.titulo}</h2>
    </>
  )
}

export default Galeria