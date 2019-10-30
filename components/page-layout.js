import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import NavBar from './nav-bar';

export default ({ children }) => (
    <div className='bg-dark'>
        <NavBar />
        <Container>
            {children}
        </Container>
    </div>
);