import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { remote, ipcRenderer } from 'electron';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Main from './Main/Main';
import Header from './Header/Header';
import Tools from './Tools/Tools';
import About from './About/About';
import Report from './Report/Report';
import { setParData } from '../Redux/redux-reducers';

const App = props => {
  const { i18n } = useTranslation();
  const currentWindow = (() => remote.getCurrentWindow()._id)();

  useEffect(() => {
    ipcRenderer.once('config', (event, config) => {
      if (config.language && (config.language === 'fr' || config.language === 'ru')) {
        i18n.changeLanguage(config.language);
      }
    });

    ipcRenderer.once('PAR', (event, PAR) => {
      props.setParData(PAR);
    });
  }, []);

  return (
    <div className="mb-3">
      <Header />
      <Switch>
        <Route exact path="/">
          {currentWindow === 'main' ? <Main /> : <Report />}
        </Route>
        <Route exact path="/tools">
          <Tools />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  actions: state.actions,
});

export default connect(mapStateToProps, {
  setParData,
})(App);
