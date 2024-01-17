import { render } from 'preact';
import App from './components/App/App';
import './main.scss';
import * as dotenv from 'dotenv';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

dotenv.config;

render(<App />, document.getElementById('app')!);
