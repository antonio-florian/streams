import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate';
import StreamDelete from './Streams/StreamDelete';
import StreamEdit from './Streams/StreamEdit';
import StreamList from './Streams/StreamList';
import StreamShow from './Streams/StreamShow';
import Header from './Header';
import history from '../history'

const App =() => {
    return (
        <div className="ui container">
            <Router history={history}> 
                <div>
                <Header />
                <Switch> 
                    <Route path="/"exact component={StreamList} />
                    <Route path="/streams/new"exact component={StreamCreate} />
                    <Route path="/streams/edit/:id"exact component={StreamEdit} />
                    <Route path="/streams/delete/:id"exact component={StreamDelete} />
                    <Route path="/streams/:id"exact component={StreamShow} />
                </Switch>
                </div>
            </Router>
        </div>
    )
}
//Router is the foundation on which RouterBrowser is build unpon but by using Router we can use our own history
//switch lets react use only one path,fixing the problem of showing two pages on the same path
  
export default App;