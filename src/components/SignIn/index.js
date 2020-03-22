/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';
// on importe la route de navigation
import { NavLink } from 'react-router-dom';
// import du frameworks
import {
  Input,
  Form,
  Checkbox,
  Button,
} from 'semantic-ui-react';

// == Import locaux
// import de la feuille de style associée
import SignInStyled from './SignInStyled';

// == Composant
// ici on fait la fonction qui affiche le formulaire d'inscription
const SignIn = () => (
  <SignInStyled>
    <NavLink
      activeClassName="selected"
      exact
      to="/"
      className="btnhome"
    >
      Retour à l'Accueil
    </NavLink>
    <h1 className="title">INSCRIPTION</h1>
    <Form>
      <Form.Field>
        <label>
          Pseudo
          <Input type="text" placeholder="Pseudo" />
        </label>
      </Form.Field>
      <Form.Field>
        <label>
          Date de naissance
          <Input type="date" placeholder="Date de naissance" />
        </label>
      </Form.Field>
      <Form.Field>
        <label>
          Email
          <Input icon="at" placeholder="Email" />
        </label>
      </Form.Field>
      <Form.Field>
        <label>
          Mot de passe
          <Input type="password" placeholder="Mot de passe" />
        </label>
      </Form.Field>
      <Form.Field>
        <label>
          Confirmer votre mot de passe
          <Input type="password" placeholder="Confirmer votre mot de passe" />
        </label>
      </Form.Field>
      <Form.Field>
        <label>
          <Checkbox label="J'accepte de respecter la charte du site" />
        </label>
      </Form.Field>
      <Button className="btn" type="submit">Je m'inscris</Button>
    </Form>
  </SignInStyled>
);

// == Export
export default SignIn;
