import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet style={ { overflow: 'scroll' } }>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
