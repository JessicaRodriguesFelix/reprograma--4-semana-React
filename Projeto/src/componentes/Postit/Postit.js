import React, {Component} from 'react'
import { cadastraPostit } from '../../redux/actions'
import { connect } from 'react-redux'
import './Postit.css'

class Postit extends Component{

      constructor(props) {
        super(props)

      }

      cadastraOuAlteraPostit = (event) => {
        event.preventDefault()
        
        const form = event.target
        const dados = {
          id:`478f062a-1f7e-4e4f-b38a-3dbcbee4fd44${Math.random(100)}`,
          titulo: form.titulo.value,
          texto: form.texto.value
        }

       this.props.cadastraPostit(dados)

       form.reset()

        
      }

    render(){
      const cadastrando = !this.props.id
      
      return(
      <form className='postit' onSubmit={this.cadastraOuAlteraPostit}>
        <input
          className="postit__titulo"
          type="text"
          name="titulo"
          placeholder="Título"
          autoComplete="off"
          defaultValue={this.props.titulo}      
        />

        <textarea 
          className="postit__texto"
          name="texto"
          placeholder="Digite um texto..."
          rows={5}
          defaultValue={this.props.texto}      
        />

        <button className="postit__botao-concluir">
          Concluído
        </button>
      
      </form>
    )
    
  }
}

export default connect(
  null, 
  { cadastraPostit }
) (Postit)