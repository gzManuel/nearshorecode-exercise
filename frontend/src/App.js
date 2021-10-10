import { Switch, Route } from 'react-router-dom'

import FormEmail from "./components/Forms/FormEmail";
import FormPayment from './components/Forms/FormPayment';
import Layout from "./components/Layout/Layout";
import NotFoundPage from './components/UI/NotFoundPage';

function App() {
  return (
    <Layout>

    <Switch>
      <Route path="/payment">
        <FormPayment />
      </Route>

      <Route path="/">
        <FormEmail />
      </Route>

      <Route path='/*'>
        <NotFoundPage/>
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
