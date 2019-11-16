import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { paper, search, medal, contact } from 'ionicons/icons';
import Search from './pages/Search/Search';
import SearchResultsScreen from './pages/Search/SearchResults';
import Journeys from './pages/Journeys/Journeys';
import Account from './pages/Account/Account';
import Achievements from './pages/Achievements/Achievements';
import Details from './pages/Journeys/Details';
import JourneyScreen from './pages/Journeys/Journey';

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
import './theme/variables.scss';
import './theme/index.scss';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/:tab(search)" component={Search} exact={true} />
          <Route
            path="/search/results"
            component={SearchResultsScreen}
            exact={true}
          />
          <Route path="/search/journeys/:id" component={JourneyScreen} />
          <Route path="/:tab(journeys)" component={Journeys} exact={true} />
          <Route path="/journeys/:id/detail" component={Details} />
          <Route path="/:tab(achievements)" component={Achievements} />
          <Route path="/:tab(account)" component={Account} />
          <Route
            path="/"
            render={() => <Redirect to="/search" />}
            exact={true}
          />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={search} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="journeys" href="/journeys">
            <IonIcon icon={paper} />
            <IonLabel>My Journeys</IonLabel>
          </IonTabButton>
          <IonTabButton tab="achievements" href="/achievements">
            <IonIcon icon={medal} />
            <IonLabel>Achievements</IonLabel>
          </IonTabButton>
          <IonTabButton tab="account" href="/account">
            <IonIcon icon={contact} />
            <IonLabel>Account</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
