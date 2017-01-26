import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import { Grid, Row, Col, Jumbotron, Panel } from 'react-bootstrap';

import App from './app';

const reducer = combineReducers({
    routing: routerReducer
});

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
	<LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
);

const store = createStore(
    reducer,
    DevTools.instrument()
);

var redirect = sessionStorage.getItem('redirect');

if(redirect && redirect != location.href) {
    browserHistory.push(redirect);
}

sessionStorage.removeItem('redirect');

const history = syncHistoryWithStore(browserHistory, store);

function Home() {
    return (
	<Grid>
	    <Row>
		<Col xs={12}>
		    <Jumbotron style={{textAlign: 'center'}}>
			<img src="/logo.png" height="250em" />
		    </Jumbotron>
		</Col>
	    </Row>
	    <Row>
		<Col xs={12}>
		    <Panel>
			<p>Chibi-Con is the first anime convention held at the University of Essex. It is hosted by the Anime and Manga Society. We have been to many conventions across the country and we enjoyed them so much we wanted to have a go at making our own. We want to include as many societies at our university as possible as well as local businesses. We will also be inviting performers to come and join us. There will be a variety of events and stalls throughout the day to keep you busy.</p>
			<p>We hope you will join us for what we hope to be the start of a new chapter here at the University of Essex.</p>
			<p>Chibi-Con will be held on <b>Saturday 25th February 2017</b>. Opening times are 10am – 6pm. Last entry 5:30pm.</p>
		    </Panel>
		</Col>
	    </Row>
	</Grid>
    )
}

function Travel() {
    return (
	<Grid>
	    <Row>
		<Col xs={12}>
		    <Panel>
			<p>
			    The address for the University of Essex is:<br />
			    University of Essex<br />
			    Wivenhoe Park<br />
			    Colchester<br />
			    Essex<br />
			    CO4 3SQ
			</p>
			<h3>By Train</h3>
			<p>The best way to get to the University of Essex Colchester Campus would be to get to Colchester station (Not Colchester Town). From there you will have access to buses that can take you to the university. The 61 and 62 bus will take you to campus.</p>
			<p>When you arrive on campus there will be signs and staff to help guide you to Base and the Lecture Theatre Building (LTB) where the event will be taking place.</p>
		    </Panel>
		</Col>
	    </Row>
	</Grid>
    )
}

function Activities() {
    return (
	<Grid>
	    <Row>
		<Col xs={12}>
		    <Panel>
			<h3>Events</h3>
			<h4>Dancers - 11am-11:30am</h4>
			<h4>SciFi - 12pm-1pm</h4>
			<h4>J-fashion show - 1:30pm-2:30pm</h4>
			<p>There are many different fashions out there so we want to give you a chance to show off your own style. Whether you are a Lolita, if you wear visual kei or any other fashion all are welcome. If you would like to take part tell us your name at: <a href="mailto:chibiconuk@gmail.com">chibiconuk@gmail.com</a></p>
			<h4>Cosparade - 3pm-4pm</h4>
			<p>Participants will be able to strut their stuff on stage and show off all their hard work and the best costume will win the grand prize. Feel free to act out your character. Both handmade and bought cosplays will be welcome. If you would like to take part tell us your name and the character you will be playing at: <a href="mailto:chibiconuk@gmail.com">chibiconuk@gmail.com</a></p>
			<h4>Dancers - 4:30pm-5pm</h4>
			<h4>Raffle and Cosparade Winner Announcement - 5pm onwards</h4>
			
			<h3>For Exhibitors</h3>
			<p>If you would like to sell your wares at our convention contact us either by our Facebook page or by email at <a href="mailto:chibiconuk@gmail.com">chibiconuk@gmail.com</a> (Exhibitors will get free entry)</p>
			<h3>For Performers</h3>
			<p>If you would like to perform at Chibi-Con contact us either by our Facebook page or by email at <a href="mailto:chibiconuk@gmail.com">chibiconuk@gmail.com</a>. In the message let us know what you will be doing and let us know about any equipment requirements you may have. (Performers will get free entry)</p>
		    </Panel>
		</Col>
	    </Row>
	</Grid>
    )
}

function Tickets() {
    return (
	<Grid>
	    <Row>
		<Col xs={12}>
		    <Panel>
			<p>Tickets are on sale <a href="https://www.eventbrite.co.uk/e/chibi-con-2017-tickets-31367252296">now</a>. (Exhibitors and Performers do not need to buy tickets)</p>
			<p>Bring ID with you when you collect your tickets as under 18s will require a separate wristband.</p>
			<p>Chibi-Con will be held on Saturday 25th February 2017. Opening times are 10am – 6pm. Last entry 5:30pm.</p>
		    </Panel>
		</Col>
	    </Row>
	</Grid>
    )
}

ReactDOM.render(
    <Provider store={store}>
	<div>
	    <Router history={history}>
		<Route path="/" component={App}>
		    <IndexRoute component={Home} />
		    <Route path="travel" component={Travel} />
		    <Route path="activities" component={Activities} />
		    <Route path="tickets" component={Tickets} />
		</Route>
	    </Router>
	</div>
    </Provider>,
    document.getElementById('root')
);
