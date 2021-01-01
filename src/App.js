import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {home} from './Components/home.jsx';
import {about} from './Components/about.jsx';
import {contact} from './Components/contact.jsx';
import {blog} from './Components/blog.jsx';
import {nomatch} from './Components/nomatch.jsx';
import {Products}from './Components/Products/Products.jsx';
import {Layout} from './Components/Layout.jsx';
import {Jumbotron}from './Components/jumbo.jsx'
import {NavigationBar} from './Components/navbar.jsx';


function App() {
  return (
     <React.Fragment>
     <Router>
      <NavigationBar/>
       <Jumbotron/>
        <Layout>
         <Switch>
           <Route exact path ='/' component={home}  />
           <Route path='/about'component={about}/>
           <Route path='/blog' component={blog}/>
           <Route path='/contact' component={contact}/>
           <Route path='/products' component={Products}/>
           <Route component={nomatch}/>
         </Switch>
         </Layout>
        </Router>
     </React.Fragment>
  );
}

export default App;
