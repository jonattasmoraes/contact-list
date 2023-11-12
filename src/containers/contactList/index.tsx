import Contact from '../../components/contact'
import { Container } from './styles'

const contacts = [
  {
    name: 'Jônattas Moraes',
    email: 'jonatas.moraes.09@hotmail.com',
    phone: '(41) 99999-9999',
    type: 'Família',
    state: 'Ativo'
  },
  {
    name: 'Ana Julia',
    email: 'anajulia@hotmail.com',
    phone: '(41) 99999-9999',
    type: 'Amigos',
    state: 'Ativo'
  },
  {
    name: 'Tiago Teixeira',
    email: 'tiago100@hotmail.com',
    phone: '(41) 99999-9999',
    type: 'Família',
    state: 'Ativo'
  },
  {
    name: 'Silvana teles',
    email: 'silvateles@hotmail.com',
    phone: '(41) 99999-9999',
    type: 'Trabalho',
    state: 'Bloqueado'
  },
  {
    name: 'Policia Militar',
    email: 'policia@gov.pr',
    phone: '190',
    type: 'Emergência',
    state: 'Ativo'
  }
]

const ContactList = () => (
  <Container>
    <p>cinco contatos marcados para amanhã</p>
    <ul>
      {contacts.map((c) => (
        <li key={c.name}>
          <Contact
            name={c.name}
            email={c.email}
            phone={c.phone}
            type={c.type}
            state={c.state}
          />
        </li>
      ))}
    </ul>
  </Container>
)
export default ContactList
