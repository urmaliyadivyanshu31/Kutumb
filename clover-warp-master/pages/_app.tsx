import '../styles/globals.css'
import '../styles/index.css'
import '../app/assets/css/plugins/bootstrap.min.css';
import '../app/assets/css/plugins/lightgallery.min.css';
import '../app/assets/css/plugins/slick.css';
import '../app/assets/css/plugins/lightgallery.min.css';
import '../app/assets/css/plugins/animate.css';
import '../app/assets/css/style.css';
import type { AppProps } from 'next/app'
import { GenProvider } from '../app/components/extras/contexts/genContext'
import AuthProvider from '../app/components/extras/contexts/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <AuthProvider>
        <GenProvider>
            <Component {...pageProps} />
        </GenProvider>
      </AuthProvider>
  );
}

export default MyApp;
