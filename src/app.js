import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

function NavBar(props) {
    return (
	<Navbar>
	    <Navbar.Header>
		<Navbar.Brand>
		    <Link to="/">Chibi-Con</Link>
		</Navbar.Brand>
		<Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
		<Nav>
		    <IndexLinkContainer to="/">
			<NavItem eventKey={1}>Home</NavItem>
		    </IndexLinkContainer>
		    <LinkContainer to="/travel">
			<NavItem eventKey={2}>Travel</NavItem>
		    </LinkContainer>
		    <LinkContainer to="/activities">
			<NavItem eventKey={3}>Activities</NavItem>
		    </LinkContainer>
		    <LinkContainer to="/tickets">
			<NavItem eventKey={5}>Tickets</NavItem>
		    </LinkContainer>
		</Nav>
	    </Navbar.Collapse>
	</Navbar>
    );
}

export default function App({ children }) {
    return (
	<div>
	    <header>
		<NavBar />
	    </header>
	    <div style={{ marginTop: '1.5em' }}>{children}</div>
	    <footer className='footer'>
		<div className='container'>
		    <a href="https://www.facebook.com/chibiconuk"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
		    <a href="https://twitter.com/UoEAnimeManga"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
		    <a href="mailto:chibiconuk@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
		</div>
	    </footer>
	</div>
    )
}
